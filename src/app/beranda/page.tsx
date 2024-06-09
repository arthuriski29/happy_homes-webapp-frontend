'use client'
import { Navigation } from '@/components/navigation';
import { ContentHead } from '@/components/content';
import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';
import { FormValues, Pengaturan } from '@/components/pengaturan';

type Props = {}

const Beranda = (props: Props) => {
  const [daftarButton, setDaftarButton] = React.useState(true)

  const [karyawan, setKaryawan] = React.useState<FormValues | null>(null);

  const handleData = (dataKaryawan: FormValues) => {
    console.log("data passed: ", dataKaryawan)
    setKaryawan(dataKaryawan)
  }

  return (
    <div className=" bg-[#F7F8FB] w-full h-full  border-[2px] border-[#AAAA]">
      <Navigation />

      <div className=" bg-white px-[20px] pt-[20px] flex flex-col">
        <div className="text-[24px] font-bold">HH Timesheet</div>
        <div className="flex px-[24px]  h-[43px] gap-5">
          <div className="text-[12px] font-bold tracking-tighter border-b-[2px]">
            <Button
              variant={"ghost"}
              className={cn(
                "",
                daftarButton ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline"
              )}
              onClick={() => { setDaftarButton(true) }}
            > Daftar Kegiatan
            </Button>
          </div>
          <div className="text-[12px] font-bold tracking-tighter border-b-[2px]">
            <Button
              variant={"ghost"}
              className={cn(
                "",
                !daftarButton ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline"
              )}
              onClick={() => { setDaftarButton(false) }}
            > Pengaturan
            </Button>
          </div>
        </div>
      </div>

      {daftarButton ?
        <ContentHead dataKaryawan={karyawan} />
        :
        <Pengaturan dataKaryawan={handleData} tetap={karyawan} />
      }
      
    </div>
  )
}

export default Beranda