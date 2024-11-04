import React from 'react'
import { footerLogo } from '../assets/images'
import { copyrightSign, facebook, instagram, twitter } from '../assets/icons'
import { footerLinks } from './data'
const Footer = () => {
  return (<section>
<div className="flex min-h-[60vh] lg:flex-row   flex-col  w-full font-montserrat text-white gap-10">
<div className='flex w-1/2  flex-col max-sm:w-full '>
<div ><img width={150}  src={footerLogo}/></div>
<div><h1 className="leading-2 font-montserrat mt-10 text-gray-300 ">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</h1></div>
<div className='flex-row flex gap-5 mt-10' ><nav className='bg-white rounded-full w-[45px] flex p-[10px] justify-center h-[45px]'><img src={facebook}/></nav><nav className='bg-white rounded-full w-[45px] flex p-[10px] justify-center h-[45px]'><img src={twitter}/></nav><nav className='bg-white rounded-full w-[45px] flex p-[10px] justify-center h-[45px]'><img src={instagram}/></nav></div>

</div>

<div className='flex flex-row gap-10 justify-between w-full text-gray-300 flex-wrap'>
{footerLinks.map((item)=>(
<div >
<div className='text-2xl text-white font-montserrat '>{item.title}</div>
<div className='flex flex-col mt-10 gap-3'>
{item.links.map((link)=>(
  <p>{link.name}</p>
))}
</div>
  </div>
))}
</div>
</div>
<div className='flex flex-col sm:flex-row lg:flex-row justify-center mt-10 text-center lg:justify-between text-gray-300 gap-5 '>
<a className='flex flex-row gap-2'><img  src={copyrightSign}/><a className='text-white text-center font-montserrat'>copyright signCopyright. All rights reserved.</a></a>
<a className='text-white'>Terms & Conditions</a>
  
</div>
</section>

  )
}

export default Footer
