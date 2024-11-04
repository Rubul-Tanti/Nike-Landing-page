import React from 'react'
import { services } from './data'

const Services = () => {

  return (
    <section className='flex  justify-center flex-row w-full lg:flex-nowrap  gap-8 flex-wrap max-container'>
   {services.map((item)=>(
       <card key={item} className='w-1/3 h-[300px] p-8 max-w-[600px] min-w-[300px] flex flex-col justify-center justify start rounded-xl shadow-lg shadow-slate-300'>
        <img className='bg-coral-red rounded-full m-2 w-10  p-2' src={item.imgURL} />
        <div className='font-palanquin text-3xl m-2 font-bold'>{item.label}</div>
        <div className="font-montserrat text-lg m-2 text-slate-gray ">{item.subtext}</div>
       </card>

   ))}    </section>
  )
}

export default Services
