import React, { useState } from "react";
import { roles } from "../../data/Setting";

const ToggleSwitch = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`w-10 h-5 flex items-center  rounded-full p-0.5 transition-colors duration-300 ${
      enabled ? "bg-green-500" : "bg-gray-700"
    }`}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ${
        enabled ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

const RoleAssignment = () => {
  const [permissions, setPermissions] = useState({
    admin: Array(7).fill(true),
    supervisor: Array(5).fill(true),
    user: Array(2).fill(true),
  });

  const togglePermission = (role, index) => {
    setPermissions((prev) => {
      const updated = [...prev[role]];
      updated[index] = !updated[index];
      return { ...prev, [role]: updated };
    });
  };

  return (
    <div className="bg-[#0f172a] py-4 rounded-lg w-full border border-gray-800 h-[734px] mb-10 text-[#FFFFFFCC] font-sans">
      <h2 className="text-lg text-[#FFFFFFCC] font-semibold pl-7 2xl:pl-13 border-b border-gray-700 pb-4">
        Role Assignment
      </h2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className=" py-4 pl-7 text-[15px] 2xl:pl-13 text-left font-medium">
              Role
            </th>
            <th className=" py-3 pl-24 2xl:pl-70 text-[15px] text-left font-medium">
              Permissions
            </th>
            <th className=" py-3 pl-7 text-[15px] text-left font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <React.Fragment key={role.role}>
              {role.permissions.map((perm, permIndex) => (
                <tr
                  key={permIndex}
                  className={
                    permIndex === role.permissions.length - 1
                      ? "border-b border-gray-700 last:border-none"
                      : ""
                  }
                >
                  {permIndex === 0 && (
                    <td
                      rowSpan={role.permissions.length}
                      className="py-3 pl-7 2xl:pl-13 font-medium text-[#FFFFFFCC] whitespace-nowrap align-top mt-6 text-[14.5px]"
                    >
                      {role.role}
                    </td>
                  )}
                  <td className="py-3 pl-24 2xl:pl-70 text-[#FFFFFF99]">
                    {perm}
                  </td>
                  <td className="py-3 pl-10 mb-6">
                    <ToggleSwitch
                      enabled={permissions[role.key][permIndex]}
                      onToggle={() => togglePermission(role.key, permIndex)}
                    />
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleAssignment;
