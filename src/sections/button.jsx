export const Button=({label,arrow})=>{
 return <button className="bg-coral-red  flex  justify-center gap-2 item-center px-7 py-4 border text-lg font-montserrat leading-none rounded-full text-white" >{label}<img src={arrow} alt="buttonurl "
  className="ml-2 rounded-full w-5 h-5" ></img></button>
}
export const ButtonIcon=({label})=>{
 return <button className="  flex  justify-center gap-2 item-center px-7 py-4 border text-lg font-montserrat leading-none rounded-full bg-coral-red text-white" >{label}</button>
}