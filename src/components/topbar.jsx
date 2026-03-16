function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#ff6a00] to-[#ffb347] text-white px-5 py-2 flex justify-between items-center text-sm">
      <div>
        India HQ Hours: Mon – Fri, 9am – 5pm
      </div>
      <div className="flex items-center gap-5">
        <span>📞 02061096815</span>
        <span>✉ info@auisy.com</span>
      </div>
    </div>
  );
}

export default TopBar;