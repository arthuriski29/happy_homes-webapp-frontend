import { Plus } from 'lucide-react'
import React from 'react'
import TimesheetDataTable from './timesheet/data/data-table'
import { columns } from './timesheet/data/column'
import { dataTimesheet } from '@/timesheeet'
import { AddAction } from './timesheet/actions/add-action/AddAction'
import { FormValues } from './pengaturan'
import moment from 'moment';

type Props = {}

interface DisplayProps {
  dataKaryawan: FormValues | null;
}

export const ContentHead: React.FC<DisplayProps> = ({dataKaryawan}) => {
  // const testMoment = moment().startOf('hour').fromNow(); 

  return (
    <div className="bg-white rounded-lg m-[20px] p-[24px] flex flex-col shadow-md">
      <div className="flex gap-10 pb-[20px]">
        <div>
          <div className="text-[12px] font-bold text-[#AAAAAA]">Nama Karyawan</div>
          <div className="font-semibold">{dataKaryawan?.namaKaryawan}</div>
        </div>
        <div>
          <div className="text-[12px] font-bold text-[#AAAAAA]">Rate</div>
          <div className="font-semibold">{`Rp. ${dataKaryawan?.rate}/jam`}</div>
        </div>
      </div>
      <hr className="mx-[-24px]" />
      <div className="flex flex-col">
        <div className="flex items-center gap-4 py-[35px]">
          <div className="font-bold ">Daftar Kegiatan</div>
          {/* <div className="flex px-[12px] py-[8px] bg-[#F6F0FF] rounded-[4px] gap-[4px] items-center">
            <div className="flex items-center justify-center rounded-full p-[1px] border-[1.5px] border-[#2775EC] text-[#2775EC]">
              <Plus size={8} className="text-center" />
            </div>
            <div className="font-bold text-[#2775EC] text-[12px]">Tambah Kegiatan</div>
          </div> */}
          <AddAction />
        </div>
        <TimesheetDataTable columns={columns} data={dataTimesheet} />
      </div>
      <div className='bg-[#F0F0F0] py-[12px] px-[26px]'>
        <div className='flex justify-between'>
          <div className='text-[14px] font-semibold text-[#2775EC]'>Total Durasi</div>
          <div className='text-[14px] font-semibold text-[#2775EC]'>9 jam 45 menit</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-[18px] font-extrabold text-[#2775EC]'>Total Pendapatan</div>
          <div className='text-[18px] font-extrabold text-[#2775EC]'>{`Rp.${dataKaryawan?.rate}`}</div>
        </div>
      </div>

    </div>
  )
}