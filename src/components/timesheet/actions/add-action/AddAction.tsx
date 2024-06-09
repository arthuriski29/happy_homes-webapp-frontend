'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

//DATE INPUT
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { format } from "date-fns"


//FORM REQUIREMENTS
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, undefined, z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { ClockIcon } from "./svg/ClockIcon"
import { Plus } from "lucide-react"


export interface AddDialogProps {
  // id: number;
  // judul_kegiatan: string;
  // nama_proyek: string;
  // tanggal_mulai: Date;
  // tanggal_berakhir: Date;
  // waktu_mulai: Date;
  // waktu_berakhir: Date;
  // durasi: Date;
}

//Form Edit
const FormSchema = z.object({

  tanggal_mulai: z.date({ required_error: "Please enter a valid date" }),
  tanggal_berakhir: z.date({ required_error: "Please enter a valid date" }),
  waktu_mulai: z.date({ required_error: "Please enter a valid date" }),
  waktu_berakhir: z.date({ required_error: "Please enter a valid date" }),
  // tanggal_mulai: z.date({ required_error: "Please enter a valid date" }),
  // tanggal_berakhir: z.date({ required_error: "Please enter a valid date" }),

  // waktu_mulai: z.string().min(1, {
  //   message: "This field is required"
  // }),
  // waktu_berakhir: z.string().min(1, {
  //   message: "This field is required"
  // }),
  // judul_kegiatan: z.string().min(1, {
  //   message: "This field is required",
  // }),
  // nama_proyek: z.string().min(1, {
  //   message: "This field is required",
  // }),
})

export function AddAction() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // tanggal_mulai: kegiatan.tanggal_mulai || undefined,
      // tanggal_berakhir: kegiatan.tanggal_berakhir || undefined,
      // waktu_mulai: kegiatan.waktu_mulai || undefined,
      // waktu_berakhir: kegiatan.waktu_berakhir || undefined,
      // judul_kegiatan: kegiatan.judul_kegiatan || "",
      // nama_proyek: kegiatan.nama_proyek || "",
      // tanggal_mulai: new Date() || undefined,
      tanggal_mulai: "",
      // tanggal_berakhir: new Date() || undefined,
      tanggal_berakhir: "",
      waktu_mulai: "",
      waktu_berakhir: "",
      judul_kegiatan: "",
      nama_proyek: "",
    },
  })

  const { toast } = useToast()

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    console.log(typeof data.tanggal_mulai)
    toast({
      title: `You submitted the new project: ${data.judul_kegiatan}`,
      description: "Congrats! Project sent to the server "
    })
  }
  //Form Edit

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="default">Edit</Button> */}
        <Button variant={"outline"} className="flex px-[12px] py-[8px] bg-[#F6F0FF] rounded-[4px] gap-[4px] items-center hover:cursor-pointer">
          <div className="flex items-center justify-center rounded-full p-[1px] border-[1.5px] border-[#2775EC] text-[#2775EC]">
            <Plus size={8} className="text-center" />
          </div>
          <div className="font-bold text-[#2775EC] text-[12px]">Tambah Kegiatan</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col sm:min-w-[1000px]">
        <DialogHeader>
          <CardTitle>Tambah Kegiatan Baru</CardTitle>
          <CardDescription>Tambahkan Kegiatan Baru pada tabel.</CardDescription>

        </DialogHeader>
        <CardContent className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="min-w-[500px] space-y-6">
              <div className="flex flex-row gap-2">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="tanggal_mulai"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Tanggal Mulai</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PP")
                                ) : (
                                  <span>Masukkan Tanggal</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="waktu_mulai"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Waktu Mulai</FormLabel>
                        <FormControl className="w-full">
                          <div className="relative flex">
                            <Input
                              type="time"
                              id="time"
                              aria-label="Choose time"
                              placeholder="shadcn"
                              className="border-x-none cursor-pointer hover:text-muted-foreground w-full"
                            />
                            <ClockIcon className="absolute right-4 bottom-3 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="tanggal_berakhir"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Tanggal Berakhir</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PP")
                                ) : (
                                  <span>Masukkan Tanggal</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        {/* <FormDescription>
                          Tanggal saat mengambil project ini
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="waktu_berakhir"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Waktu Berakhir</FormLabel>
                        <FormControl className="w-full">
                          <div className="relative flex">
                            <Input
                              type="time"
                              id="time"
                              aria-label="Choose time"
                              placeholder="shadcn"
                              className="border-x-none cursor-pointer hover:text-muted-foreground w-full"
                            />
                            <ClockIcon className="absolute right-4 bottom-3 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="judul_kegiatan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul Kegiatan</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan Judul Kegiatan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nama_proyek"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Proyek</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan Nama Proyek" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Save</Button>
            </form>
          </Form>
        </CardContent>
      </DialogContent>
    </Dialog>
  )
}
