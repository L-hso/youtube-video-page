import { Search } from "lucide-react";

export function NavbarSearchBar() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex">
      <input
        className="rounded-l-full outline-none h-9 border-[0.85px] border-[#666] bg-[#444] text-sm text-gray-200 placeholder:text-youtube-light-gray pl-4 w-80"
        placeholder="Pesquise"
      />
      <button className="px-5  border-r-[0.85px] border-t-[0.85px] border-b-[0.85px] border-[#666] rounded-r-full bg-youtube-dark hover:bg-youtube-gray">
        <Search color="#fff" size={19.5}/>
      </button>
    </div>
  );
}
