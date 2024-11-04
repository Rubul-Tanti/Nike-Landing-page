import React from 'react'
import { Button, ButtonIcon } from './button'
import { offer } from '../assets/images'

const SpecialOffers = () => {
  return (
  <section className=' lg:flex-row flex-col-reverse relative min-h-screen flex  w-full max-container justify-center gap-10 items-center'>
<div className='w-full lg:w-1/2 p-1'>
  <img className='w-full ' src={offer}/>
</div>
<div className='justify-center flex flex-col sm:w-full lg:w-1/2 '>
  <h1 className='font-palanquin text-4xl font-bold '>Special <span className='font-palanquin  text-coral-red text-4xl font-bold '>offers</span></h1>
  <p className='font-montserrat text-slate-gray text-lg mt-10'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
  <p className='font-montserrat text-slate-gray text-lg mt-10'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
  <div className='flex flex-row gap-5 mt-10'>

<ButtonIcon label={"shopnow"}></ButtonIcon>

 <button className="  flex  justify-center gap-2 item-center px-7 py-4 border text-lg font-montserrat leading-none rounded-full border-slate-gray text-slate-gray" >Learn more</button>
  </div>
</div>

  </section>
  )
}

export default SpecialOffers
