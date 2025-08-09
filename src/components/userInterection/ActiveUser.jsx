import { useState } from "react";
import { chatUsers } from "../../data/ChatUsers";
import { Search } from "lucide-react";

const ActiveUsers = () => {
  const [searchText, setSeachText] = useState("");

  const filterActiveUser = chatUsers.filter((user) => {
    return user.name
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase());
  });

  return (
    <>
      <div className="bg-[#0F131C] text-[#FFFFFFCC] px-4 w-full sm:w-[270px] rounded-t-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSeachText(e.target.value)}
            className="w-full pl-4 pr-12 py-2 border border-gray-700 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-400 text-sm my-5"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </span>
        </div>
      </div>

      <div className="bg-[#0F131C] text-[#FFFFFFCC] w-full sm:w-[270px] rounded-b-md  overflow-y-auto h-[600px] matches-list mb-6 custom-scrollbar">
        {filterActiveUser.length > 0 ? (
          filterActiveUser.map((user, index) => {
            return (
              <div
                key={index}
                className="p-4 flex flex-col border-t border-gray-700 transition-all duration-200 hover:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-[#FFFFFFCC]">
                      {user.name}
                    </h3>
                    <div className="flex justify-between items-center gap-9">
                      <p className="text-xs text-[#FFFFFF80]">{user.text}</p>
                      <small className="text-[11px] text-[#FFFFFF80]">
                        {user.time}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-white text-center text-md mt-5 font-semibold">
            ❌ No matches found!
          </div>
        )}
      </div>
    </>
  );
};

export default ActiveUsers;
