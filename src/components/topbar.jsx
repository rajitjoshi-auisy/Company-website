function TopBar() {
  return (
    <div style={{
      background: "linear-gradient(to right,#ff6a00,#ffb347)",
      color: "white",
      padding: "8px 20px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px"
    }}>
      <div>
        India HQ Hours: Mon – Fri, 9am – 5pm
      </div>

      <div>
        📞 02061096815 &nbsp;&nbsp; ✉ info@auisy.com
      </div>
    </div>
  );
}

export default TopBar;