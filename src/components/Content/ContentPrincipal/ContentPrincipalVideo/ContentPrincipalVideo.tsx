import { useRef, useState } from 'react';
import {VideoBar} from './VideoBar';

export function ContentPrincipalVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [actualTime, setActualTime] = useState(0);
  
  function currentTimeHandler (this: HTMLVideoElement) {
    setActualTime(this.currentTime);
    console.log(this.duration)
  }
  
  return (
    <div className="group relative rounded-md overflow-hidden flex justify-center cursor-pointer"
    onClick={()=>videoRef.current!.paused?videoRef.current!.play():videoRef.current!.pause()}>
      <video
        src="src\assets\Não fui feito para Programar != Bloqueado no Código.mp4"
        ref={videoRef}
        onLoadedMetadata={()=>currentTimeHandler}
        controls
        className="-z-10"
        id="video"
        onPlay={()=>{setInterval(()=>setActualTime(state=>state+1),1000)}}

        disablePictureInPicture
        
      />
      <VideoBar actualTime={actualTime} totalTime={100000}/>
      <div className="absolute bottom-0 w-full h-0 transition-all duration-100 ease-in-out invisible bg-gradient-to-b from-transparent from-65% to-black group-hover:h-full group-hover:visible"/>
    </div>
  );
}
