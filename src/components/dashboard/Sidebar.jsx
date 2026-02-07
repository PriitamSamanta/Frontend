const Sidebar = () => (
  <div className="sidebar">
    {/* TOP */}
    <div>
      <div className="logo">Data Analytics</div>

      <ul className="menu">
        <li>Dashboard</li>
        <li>Users</li>
        <li>Requests</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>

    {/* BOTTOM IMAGE */}
    <div className="sidebar-image-wrapper">
      <img
        src="/src/assets/loginimage.png"
        alt="sidebar visual"
        className="sidebar-image"
      />
    </div>
  </div>
);

export default Sidebar;
