function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-6 bg-white shadow-sm">

      <div>
        <img src="/images/auisy_logo1.png" alt="Auisy Logo" className="h-14 w-auto" />
      </div>

      <ul className="flex gap-11 list-none m-0 p-0 items-center font-['Inter'] ml-auto mr-8">
        <li className="text-[#333] font-normal text-[17px] cursor-pointer flex items-center gap-2 hover:text-[#ff6a00] transition-colors">
          Who We Are <span className="text-xs text-gray-400">▾</span>
        </li>
        <li className="text-[#333] font-normal text-[17px] cursor-pointer flex items-center gap-2 hover:text-[#ff6a00] transition-colors">
          What We Do <span className="text-xs text-gray-400">▾</span>
        </li>
        <li className="text-[#333] font-normal text-[17px] cursor-pointer flex items-center gap-2 hover:text-[#ff6a00] transition-colors">
          We Work With <span className="text-xs text-gray-400">▾</span>
        </li>
        <li className="text-[#333] font-normal text-[17px] cursor-pointer hover:text-[#ff6a00] transition-colors">
          Careers
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <span className="text-lg cursor-pointer text-gray-500 hover:text-[#ff6a00]">🔍</span>
        <button className="bg-[#ff4d00] hover:bg-[#e04400] text-white px-5 py-2 rounded-md font-semibold text-[14px] transition-colors">
          Contact Us
        </button>
      </div>

    </nav>
  );
}

export default Navbar;