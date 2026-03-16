import { useState } from "react";

const menuItems = [
  {
    label: "Who We Are",
    items: [
      "Overview", "Partners", "Clientel", "Leadership",
      "Global Presence", "Corporate facts", "Infrastructure",
      "Certifications", "News & Publication"
    ]
  },
  {
    label: "What We Do",
    items: [
      "Fintech & Payment Solutions",
      "Enterprise Software",
      "Digital",
      "Operations",
      "IT Consulting",
      "Innovative",
      "Assure"
    ]
  },
  {
    label: "We Work With",
    items: [
      "Banking & Finance", "Government / Semi Government", "IT & Consulting",
      "Ecommerce & Retail", "Manufacturing", "Startups",
      "Education & Elearning", "Insurance", "Media & Entertainment", "Telecom"
    ]
  }
];

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="flex justify-between items-center px-16 py-6 bg-white shadow-sm relative z-50">

      <div>
        <img src="/images/auisy_logo1.png" alt="Auisy Logo" className="h-16 w-auto" />
      </div>

      <ul className="flex gap-11 list-none m-0 p-0 items-center font-['Inter'] ml-auto mr-8">
        {menuItems.map((menu) => (
          <li
            key={menu.label}
            className={`relative font-normal text-[17px] cursor-pointer flex items-center gap-2 transition-all py-6 ${
              activeMenu === menu.label ? "text-[#ff6a00]" : "text-[#333] hover:text-[#ff6a00]"
            }`}
            onMouseEnter={() => setActiveMenu(menu.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menu.label} <span className="text-xs text-gray-400">▾</span>

            <div
              className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-1 min-w-[260px] z-50 transition-all duration-300 origin-top ${
                activeMenu === menu.label
                  ? "opacity-100 scale-y-100 translate-y-0"
                  : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {menu.items.map((item) => (
                <div
                  key={item}
                  className="px-5 py-1.5 text-[14px] text-[#333] hover:bg-gray-50 hover:text-[#ff6a00] cursor-pointer flex justify-between items-center whitespace-nowrap"
                >
                  {item}
                  {menu.label === "What We Do" && (
                    <span className="text-gray-400 text-xs">›</span>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}

        <li className="text-[#333] font-normal text-[17px] cursor-pointer hover:text-[#ff6a00] transition-colors">
          Careers
        </li>
      </ul>

      <div className="flex items-center gap-8">
        <span className="text-lg cursor-pointer text-gray-500 hover:text-[#ff6a00]">🔍</span>
        <button className="bg-[#ff4d00] hover:bg-[#e04400] text-white px-5 py-2 rounded-md font-semibold text-[14px] transition-colors">
          Contact Us
        </button>
      </div>

    </nav>
  );
}

export default Navbar;