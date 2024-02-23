import { Search } from "lucide-react";

export function NavbarSearchBar() {
  return (
    <div className="flex ">
      <input
        className="rounded-l-full outline-none h-10  border-[0.85px] border-youtube-light-gray bg-[#444] text-sm text-gray-200 ml-96 placeholder:text-youtube-light-gray pl-4 w-80"
        placeholder="Pesquise algo no LuisTube"
      />
      <button className="px-5  border-r-[0.85px] border-t-[0.85px] border-b-[0.85px] border-youtube-light-gray rounded-r-full bg-youtube-darkest hover:bg-youtube-dark">
        <Search color="#fff" size={19.5}/>
      </button>
    </div>
  );
}
