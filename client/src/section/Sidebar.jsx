/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UserItem from "../components/UserItem";
import fakeUsers from "../data/fakeUsers";

const Sidebar = ({ username, userPhoto, users, subtitle }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const allUsers = [...fakeUsers, ...users].filter(
    (user) => user.username !== username
  );

  const filteredUsers = allUsers.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[313px] bg-gray-200 p-4 border-r border-gray-300 overflow-auto">
      <div className="flex items-center mb-6 w-[257px] h-[45px]">
        <img
          src={userPhoto}
          alt="Profile"
          className="w-[45px] h-[45px] rounded-full mr-4 shadow-lg"
        />
        <div>
          <h2 className="font-bold text-[15px] text-[#4399FF] transition-transform duration-300 hover:scale-105">
            {username}
          </h2>
          <p className="text-[9px] text-gray-500">{subtitle}</p>
        </div>
      </div>
      <h3 className="font-bold text-lg mb-4">Users in Chat</h3>

      <div className="relative mb-6 w-[257px] h-[40px]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users..."
          className="p-3 pl-10 border border-gray-300 rounded-full w-full h-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md hover:shadow-lg placeholder-gray-400"
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <button>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-blue-500 text-xl"
            />
          </button>
        </span>
      </div>

      <div className="flex flex-col space-y-4">
        {filteredUsers.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
