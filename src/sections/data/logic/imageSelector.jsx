import { bigShoe1,bigShoe2,bigShoe3 } from"../../../assets/images"
import { useEffect, useState } from 'react';
function Showcase(){
const [currentShoe,setcurrentShoe]=useState(bigShoe1);
function changepic(shoe,event){
setcurrentShoe(shoe)
}
let active=""
const shoearr=[bigShoe1,bigShoe2,bigShoe3]
return <> <div className="flex justify-center padding-x relative  items-center bg-primary  xl:min-h-screen max-xl:py-4">
<img src={currentShoe} alt='bigShoe!' width={610}
height={500}
></img>
<div className="flex justify-center item-start gap-10 absolute -bottom-12 ">
{shoearr.map((shoe)=>{
  if(currentShoe===shoe){active="  border-pale border shadow-xl shadow-slate-500  transition-shadow"}else{active=""}
return <div onClick={(event)=>{changepic(shoe,event)}} className ={`${active} h-28 w-28 p-1 xl:h-40 xl:w-40 bg-primary rounded-lg border  border-slate-100 `}>
  <img  src={shoe} className="w-full"></img>
</div>
})}
</div>
</div>
</>
}export default Showcase