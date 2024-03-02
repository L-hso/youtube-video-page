export function VideoBar({actualTime = 0, totalTime = 1}:{actualTime?:number, totalTime?:number}){
  return (<div className="hidden group-hover:block absolute bottom-10 w-[95%] h-0.5 bg-neutral-600 z-10">
    <div className={`bg-red-600 z-10 h-0.5 w-[${actualTime/totalTime}%]`}/>
  </div>)
}