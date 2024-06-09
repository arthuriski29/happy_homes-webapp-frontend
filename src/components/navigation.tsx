import React from 'react'

type Props = {}

export function Navigation({ }: Props) {
  return (
    <div className="border-b-2 bg-white border-[#AAAA] px-[20px] flex items-center py-[20px] w-full drop-shadow-md shadow-lg">
      <div className="flex flex-col w-[100px]">
        <div className="nunito font-extrabold text-center text-[#F15858] leading-none ">Timesheet</div>
        <div className="nunito font-bold  text-[12px] text-center text-[#F15858] tracking-[0.75px] leading-none mt-[-2.25px]">Management</div>
      </div>
    </div>
  )
}
