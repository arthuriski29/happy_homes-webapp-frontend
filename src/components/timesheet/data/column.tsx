'use client'

import { ColumnDef } from "@tanstack/react-table";
import { dataKerja } from "@/timesheeet"
import { Button } from "@/components/ui/button";
import { EditAction } from "../actions/edit-action/EditAction";
import { DeleteAction } from "../actions/delete-action/DeleteAction";
import { format } from "date-fns"
import { ArrowUpDown } from "lucide-react";
import { CaretSortIcon } from "@radix-ui/react-icons";

export const columns: ColumnDef<dataKerja>[] = [
  // {
  //   header: "ID",
  //   accessorKey: "id",
  // },
  {
    header: ({ column }) => {
      const header = 'Judul Kegiatan'
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const data = row.original.judul_kegiatan
      return (
        <div className="pl-6">{data}</div>
      )
    },
    accessorKey: "judul_kegiatan",
  },
  {
    header: ({ column }) => {
      const header = 'Nama Proyek'
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const data = row.original.nama_proyek
      return (
        <div className="pl-6">{data}</div>
      )
    },

    accessorKey: "nama_proyek",
  },
  {
    header: ({ column }) => {
      const header = 'Tanggal Mulai'
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    accessorKey: "tanggal_mulai",
    cell: ({ row }) => {
      const dataAwal = row.original.tanggal_mulai
      const data = format(dataAwal, "PP")


      return (
        <div className="pl-6">{data}</div>
      )
    },
  },
  {
    header: ({ column }) => {
      const header = 'Waktu Mulai'
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    accessorKey: "waktu_mulai",
    cell: ({ row }) => {
      const dataAwal = row.original.waktu_mulai
      const data = format(dataAwal, "hh:mm a")


      return (
        <div className="pl-6">{data}</div>
      )
    }
  },
  {
    header: ({ column }) => {
      const header = 'Tanggal Berakhir'
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    accessorKey: "tanggal_berakhir",
    cell: ({ row }) => {
      const dataAwal = row.original.tanggal_berakhir
      const data = format(dataAwal, "PP")


      return (
        <div className="pl-6">{data}</div>
      )
    }
  },

  {
    header: ({ column }) => {
      const header = 'Waktu Berakhir'
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    accessorKey: "waktu_berakhir",
    cell: ({ row }) => {
      const dataAwal = row.original.waktu_berakhir
      const data = format(dataAwal, "hh:mm a")


      return (
        <div className="pl-6">{data}</div>
      )
    }
  },
  {
    header: ({ column }) => {
      const header = 'Durasi'
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    accessorKey: "durasi",
    cell: ({ row }) => {
      const dataAwal = row.original.durasi
      const data = format(dataAwal, "H:mm")


      return (
        <div className="pl-6">{data}</div>
      )
    }
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const kegiatan = row.original

      const id = kegiatan.id
      const judul_kegiatan = kegiatan.judul_kegiatan
      const nama_proyek = kegiatan.nama_proyek
      const tanggal_mulai = new Date(kegiatan.tanggal_mulai)
      const tanggal_berakhir = new Date(kegiatan.tanggal_berakhir)
      const waktu_mulai = new Date(kegiatan.waktu_mulai)
      const waktu_berakhir = new Date(kegiatan.waktu_berakhir)
      const durasi = new Date(kegiatan.durasi)

      const dataFormat = {
        id,
        judul_kegiatan,
        nama_proyek,
        tanggal_mulai,
        tanggal_berakhir,
        waktu_mulai,
        waktu_berakhir,
        durasi
      }
      return (
        <div className="flex gap-2">
          <EditAction kegiatan={dataFormat} />
          {/* <Button onClick={() => deleteButton} >Delete</Button> */}
          <DeleteAction judul={kegiatan.judul_kegiatan} />
        </div>
      )
    }
  },

]