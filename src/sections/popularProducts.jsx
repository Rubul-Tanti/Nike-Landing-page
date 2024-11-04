import React from 'react'
import { products } from './data'
const PopularProducts = () => {
  return (
    <section className="items-start w-full justify-start  flex-col  flex min-h-screen relative max-container z-10 mt-14 ">
<h1 className='font-palanquin text-[48px]  font-bold leading-1 inline-block'>Our <span className='text-coral-red inline-block '>Popular</span> Products
</h1>
<p className=" mt-8 text-slate-gray font-montserrat w-[50%] leading-1 ">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
<div className="flex flex-wrap  lg:flex-row  mt-20 font-montserrat text-2xl   
 font-bold w-full">
  {products.map((item)=>(<div className='flex flex-col gap-10 p-10 max-sm:w-full w-1/2 xl:w-1/4 lg:w-1/3 '>
  <div ><img className='w-full' src={item.imgURL}  />
  </div>
  <div>
    <div ></div>
    <div >{item.name}</div>
    <div className='text-coral-red mt-7'>{item.price}</div>
  </div>
  
  </div>
))}

</div>
    </section>
  )
}

export default PopularProducts
