import React from 'react'
import { star } from '../assets/icons'
import  { reviews } from"./data"

const CustumerReview = () => {
  return (
    <section className="min-h-screen flex justify-start gap-10  text-center flex-col ">
      <div className="flex justify-center flex-col items-center">
        <h1 className='font-palanquin text-4xl font-bold '>
        What Our <span className='text-coral-red'>Customers </span> Say?
        </h1>
        <p className='text-lg font-montserrat text-slate-gray max-w-[550px] mt-10 text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        </div>
<div className="flex flex-col lg:flex-row sm:flex-row mt-10  gap-20 ">
  {reviews.map((reviews)=>(
    <div className='z-20  flex flex-col  text-center lg:w-1/2 w-full  mt-10 justify-center items-center '>
     <img className='w-32 rounded-full' src={reviews.imgURL} ></img>
      <div className='font-montserrat text-lg text-slate-gray mt-10 text-center max-w-[400px]' >{reviews.feedback}</div>
      <p className='flex gap-2 mt-10 font-montserrat text-slate-gray text-xl '><img src={star}/>({ reviews.rating})</p>
      <div className='font-monteserrat text-3xl font-bold '>{reviews.customerName}</div>
    </div>
  ))}

</div>
    </section>
  )
}

export default CustumerReview
