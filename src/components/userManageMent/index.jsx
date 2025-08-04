import { useState } from "react";
import { usermanagement } from "../../data/Data";
import UserModal from "../../modal/UserModal";

const UserManageMentTable = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="bg-[#0F172A] rounded-md text-[#FFFFFFB2] w-full overflow-auto mb-10">
      <table className="min-w-full w-full text-sm text-left">
        <thead className="bg-[#1E293B] text-[#FFFFFFCC">
          <tr>
            <th className="py-4 px-4">Face ID</th>
            <th className="py-4 px-4">Name</th>
            <th className="py-4 px-4">Violation Type</th>
            <th className="py-4 px-4">Region</th>
            <th className="py-4 px-4">Last Event</th>
            <th className="py-4 max-2xl:pr-10">Risk</th>
            <th className="py-4 2xl:text-right 2xl:pr-21">Action</th>
          </tr>
        </thead>
        <tbody>
          {usermanagement.map(
            (user, index) => (
              console.log(user),
              (
                <tr
                  key={index}
                  className="border-b border-[#1E293B] hover:bg-[#1e2536] transition"
                >
                  <td className="py-2 px-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 whitespace-nowrap">{user.name}</td>
                  <td className="py-2 px-4 whitespace-nowrap">
                    {user.violation}
                  </td>
                  <td className="py-2 px-4 whitespace-nowrap">{user.region}</td>
                  <td className="py-2 px-4 whitespace-nowrap">{user.date}</td>
                  <td className="py-2 max-2xl:pr-10 whitespace-nowrap">
                    {user.risk}
                  </td>
                  <td className="py-2  2xl:text-right 2xl:pr-5">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="bg-[#1E293B] text-[#FFFFFFB2] px-4 py-1 rounded-lg border border-[#334155] hover:bg-[#2b3b51] transition"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserManageMentTable;
