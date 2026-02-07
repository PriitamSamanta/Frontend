import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import StatCard from "../../components/dashboard/StatCard";
import "../../styles/dashboard.css";

const ManagerDashboard = () => {
  // ✅ hooks hamesha yahan
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rohit Sharma",
      email: "rohit@test.com",
      role: "User",
      status: "Active",
    },
    {
      id: 2,
      name: "Anita Verma",
      email: "anita@test.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Kunal Singh",
      email: "kunal@test.com",
      role: "User",
      status: "Active",
    },
  ]);

  return (
    <div className="dashboard-layout">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="dashboard-main">
        <Topbar title="Manager Dashboard" />

        {/* STATS */}
        <div className="stats-grid">
          <StatCard title="Total Users" value="67,343" />
          <StatCard title="Requests" value="2,343" />
          <StatCard title="Orders" value="35,343" />
          <StatCard title="Active Rate" value="70%" />
        </div>

        {/* USERS TABLE */}
        <div className="content-box">
          <div className="table-header">
            <h3>Users</h3>
            <button className="primary-btn">Create User</button>
          </div>

          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <span
                      className={
                        u.status === "Active"
                          ? "status active"
                          : "status inactive"
                      }
                    >
                      {u.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ACTIVITY */}
        <div className="content-box">
          <h3>Activity</h3>
          <p>System usage is healthy ✔️</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
