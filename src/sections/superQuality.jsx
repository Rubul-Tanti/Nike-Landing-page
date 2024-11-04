import React from 'react'
import { ButtonIcon } from './button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className="flex flex-col lg:flex-row  min-h-screen w-full gap-20  max-contailner justify-center relative" >
      <div>
        <h1 className="font-palanquin text-4xl font-bold leading-1">We Provide You<span class="text-coral-red"> Super  Quality </span>Shoes</h1>
        <p className="font-montserrat text-slate-gray mt-10">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="font-montserrat text-slate-gray mt-10">Our dedication to detail and excellence ensures your satisfaction</p>
<div className='mt-10'>
<ButtonIcon  label={"View details"}></ButtonIcon>      </div>
</div>
      <div >
        <img src={shoe8} alt="shoe"
        width={2080}
        ></img>
      </div>

    </section>
  )
}

export default SuperQuality
