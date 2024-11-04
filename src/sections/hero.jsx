import React from 'react'
import { Button } from './button'
import { arrowRight } from '../assets/icons'
import { statistics } from './data'

import Showcase from './data/logic/imageSelector'
const Hero = () => {

  return (
    <section id='Hero' className=" w-full flex xl:flex-row flex-col justify-start min-h-screen gap-20  max-container">
      
<div className="relative xl:w-2/5 flex-col flex justify-center z-index-10 items-start xl:padding-x pt-28">
<p className="text-coral-red text-xl font-montserrat">Our Summer collections</p>
<h1 className="mt-10 font-palanquin xl:whitespace-nowrap z-10
text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82px] pr-10">The New Arrival<br/>
<span className="text-coral-red inline-block z-index-10 mt-3">Nike</span> Shoe</h1>
<p className="text-slate-gray text-lg mt-10 mb-14 leading-8 font-montserrat">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
<Button label="shop now" arrow={arrowRight}></Button>
<div className="flex justify-start item-start  xl:flex-nowrap  mt-20 w-full gap-16 " >
  {statistics.map((price)=>(<div key={price.label}><p className="text-4xl font-palanquin font-bold">{price.value}</p>
  <p className="text-slate-gray leading-7 font-montserrat">{price.label}</p></div>))

  } </div>
</div> 
 <Showcase />

</section>
)
}

export default Hero
