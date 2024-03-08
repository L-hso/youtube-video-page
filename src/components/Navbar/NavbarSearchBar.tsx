import { Search } from "lucide-react";

export function NavbarSearchBar() {
  return (
    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex justify-center w-1/2">
      <input
        className="rounded-l-full outline-none h-9 border-[0.85px] border-[#666] bg-[#444] text-sm text-gray-200 placeholder:text-youtube-light-gray pl-4 flex-1 min-w-10 max-w-96"
        placeholder="Pesquise"
      />
      <button className="px-5  h-9 border-r-[0.85px] border-t-[0.85px] border-b-[0.85px] border-[#666] rounded-r-full bg-youtube-dark hover:bg-youtube-gray">
        <Search color="#fff" size={19.5}/>
      </button>
    </div>
  );
}
