import React from "react";
import UserManageMentTable from "../components/userManageMent";
import FilterControls from "../components/userManageMent/FilterControls";

export default function UserManageMent() {
  return (
    <div>
      <FilterControls />
      <UserManageMentTable />
    </div>
  );
}
