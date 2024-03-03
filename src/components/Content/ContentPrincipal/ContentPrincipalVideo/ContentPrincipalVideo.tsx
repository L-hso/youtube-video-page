import {VideoBar} from './VideoBar';

export function ContentPrincipalVideo() {
  const vdeo = document.querySelector('video');

  return (
    <div className="group relative rounded-md overflow-hidden flex justify-center cursor-pointer"
    onClick={()=>vdeo?.paused ? vdeo?.play():vdeo?.pause()}>
      <video
        src="src\assets\Não fui feito para Programar != Bloqueado no Código.mp4"
        controls
        className="-z-10"
        id="video"
        disablePictureInPicture
        disableRemotePlayback
      />
      <VideoBar actualTime={vdeo?.currentTime} totalTime={vdeo?.duration}/>
      <div className="absolute bottom-0 w-full h-0 transition-all duration-100 ease-in-out invisible bg-gradient-to-b from-transparent from-65% to-black group-hover:h-full group-hover:visible"/>
    </div>
  );
}
