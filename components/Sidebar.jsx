import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button 
        className="md:hidden p-3 bg-gray-700 text-white fixed top-2 left-2 z-50 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-64`}
      >
        <ul className="space-y-4">
          <li><a href="/dashboard" className="hover:text-blue-300 transition">Dashboard</a></li>
          <li><a href="/apply-leave" className="hover:text-blue-300 transition">Apply Leave</a></li>
          <li><a href="/leave-status" className="hover:text-blue-300 transition">Leave Status</a></li>
          <li><a href="/admin" className="hover:text-blue-300 transition">Admin Panel</a></li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
