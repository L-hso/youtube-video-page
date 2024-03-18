import { useRef, useState } from 'react';
import {VideoBar} from './VideoBar';

export function ContentPrincipalVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [actualTime, setActualTime] = useState(0);
  function durationHandler(e:HTMLVideoElement){
    console.log(e.duration);
    return e.duration;
  }

  let duration;
    
  function currentTimeHandler (e: HTMLVideoElement) {
    

  }
  
  return (
    <div className="group relative rounded-md overflow-hidden flex justify-center cursor-pointer"
    onClick={()=>videoRef.current!.paused?videoRef.current!.play():videoRef.current!.pause()}>
      <video
        src="src\assets\Não fui feito para Programar != Bloqueado no Código.mp4"
        ref={videoRef}
        onLoadedMetadata={(e)=>{duration = durationHandler(e.currentTarget)}}
        controls
        className="-z-10"
        id="video"
        
        onTimeUpdate={(e)=>{console.log(e.currentTarget.currentTime);}}
        disablePictureInPicture
        
      />
      <VideoBar actualTime={actualTime} totalTime={duration}/>
      <div className="absolute bottom-0 w-full h-0 transition-all duration-100 ease-in-out invisible bg-gradient-to-b from-transparent from-65% to-black group-hover:h-full group-hover:visible"/>
    </div>
  );
}
