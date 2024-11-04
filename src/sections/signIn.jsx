import React from 'react'
import { ButtonIcon } from './button'

const SignIn = () => {
  return (
   <section className="flex sm:flex-col flex-col lg:flex-row gap-10 justify-center">
    <div className="justify-center items-center"><h1 className='font-palanquin text-4xl font-bold '>Sign Up for <span className='font-palanquin text-4xl font-bold text-coral-red '>Updates</span> & Newsletter</h1></div>

    <div className='max-w-full min-0 lg:w-1/2 sm:w-full flex max-sm:flex-col justify-center items-center '>
  <div className="w-[90%]  h-18   border-slate-gray flex justify-between border  rounded-full">

<input type="text" placeholder='subscribe@nike ' className="  outline-none 
border-none m-5 outline-offset-0 " data-has-listeners="true"></input>


<button className="w-[150px] m-2 border text-lg font-montserrat leading-none rounded-full  bg-coral-red text-white" >Sign Up</button>
      </div>
    </div>

   </section>
  )
}

export default SignIn
