export function VideoBar({actualTime = 0, totalTime = 1}:{actualTime?:number, totalTime?:number}){
  return (<div className={`hidden group-hover:block absolute bottom-10 w-[95%] transition-all duration-600 hover:after:visible hover:h-1.5 h-0.5 bg-neutral-600 z-10 before:bg-red-600 before:h-full before:w-[${actualTime/totalTime * 100}%] before:absolute before:left-0 after:invisible after:w-3.5 after:h-3.5 after:rounded-full after:shadow-sm after:shadow-black after:bg-red-600 after:absolute after:right-[${actualTime/totalTime*100}%] after:-translate-y-1/2 after:top-1/2`}>
  </div>)
}