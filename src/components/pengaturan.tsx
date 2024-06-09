// import * as React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import React from "react"


// type Props = {}


export interface FormValues  {
  namaKaryawan: string
  rate: number
}

interface ValueProps {
  dataKaryawan: (data: FormValues) => void;
  tetap: FormValues | null
}

export const Pengaturan: React.FC<ValueProps> = ({dataKaryawan, tetap})=>{
  const [karyawan, setKaryawan] = React.useState<FormValues | {}>({dataKaryawan})
  console.log('karyawan', karyawan)

  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) =>{
    setKaryawan(data)
    dataKaryawan(data)

  }
 



  return (
    <div className="flex items-center justify-center bg-[#F7F8FB] h-[85vh] rounded-lg  p-[24px] shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Pengaturan</CardTitle>
            <CardDescription>Ubah karyawan</CardDescription>
          </CardHeader>
          <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nama Karyawan</Label>
                  <Input id="name" defaultValue={tetap?.namaKaryawan} {...register("namaKaryawan")} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Rate</Label>
                  <div className="flex relative">
                    <Input id="rate" type="number" defaultValue={tetap?.rate} {...register("rate")}/>
                    <div className="z-0 absolute right-2 top-2 text-[#AAAAAA] text-sm">/Jam</div>
                  </div>
                </div>
                {/* <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
              </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Save</Button>
          </CardFooter>
        </Card>
      </form>
    </div>

  )
}

