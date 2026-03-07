// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router";

// export default function Dashboard() {
//   const { user, token, logout } = useAuth();
//   const [secret, setSecret] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:5000/api/dashboard", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       setSecret(data.secretData || "No data");
//     }
//     if (token) fetchData();
//   }, [token]);

//   if (!user) return navigate("/login");

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold">Welcome, {user.name} ({user.role}) 🎉</h2>

//       {user.role === "admin" ? (
//         <AdminPanel token={token} />
//       ) : (
//         <UserPanel data={secret} />
//       )}

//       <button
//         onClick={() => {
//           logout();
//           navigate("/login");
//         }}
//         className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// function AdminPanel({ token }) {
//   const [adminData, setAdminData] = useState("");

//   useEffect(() => {
//     async function fetchAdmin() {
//       const res = await fetch("http://localhost:5000/api/admin", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       setAdminData(data.message);
//     }
//     fetchAdmin();
//   }, [token]);

//   return (
//     <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
//       <h3 className="font-semibold">Admin Panel 👑</h3>
//       <p>{adminData}</p>
//     </div>
//   );
// }

// function UserPanel({ data }) {
//   return (
//     <div className="mt-4 p-4 bg-green-100 rounded-lg">
//       <h3 className="font-semibold">User Dashboard 🧍</h3>
//       <p>{data}</p>
//     </div>
//   );
// }
