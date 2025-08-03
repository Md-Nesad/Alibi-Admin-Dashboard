import { usermanagement } from "../../data/Data";

const UserManageMentTable = () => {
  return (
    <div className="bg-[#0F172A] p-6 rounded-xl text-white w-full overflow-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-[#1E293B] text-gray-400">
          <tr>
            <th className="py-3 px-4">Face ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Violation Type</th>
            <th className="py-3 px-4">Region</th>
            <th className="py-3 px-4">Last Event</th>
            <th className="py-3 px-4">Risk</th>
            <th className="py-3 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {usermanagement.map((alert, index) => (
            <tr
              key={index}
              className="border-b border-[#1E293B] hover:bg-[#1e2538] transition"
            >
              <td className="py-3 px-4">
                <img
                  src={alert.avatar}
                  alt={alert.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </td>
              <td className="py-3 px-4 whitespace-nowrap">{alert.name}</td>
              <td className="py-3 px-4 whitespace-nowrap">{alert.violation}</td>
              <td className="py-3 px-4 whitespace-nowrap">{alert.region}</td>
              <td className="py-3 px-4 whitespace-nowrap">{alert.date}</td>
              <td className="py-3 px-4 whitespace-nowrap">{alert.risk}</td>
              <td className="py-3 px-4">
                <button className="bg-[#1E293B] text-white px-4 py-1 rounded-lg border border-[#334155] hover:bg-[#2b3b51] transition">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManageMentTable;
