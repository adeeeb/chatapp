/* eslint-disable react/prop-types */

const UserItem = ({ user }) => {
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
      <img
        src={user.userPhoto}
        alt={user.username}
        className="w-12 h-12 rounded-full mr-3 transition-transform duration-300 transform hover:scale-110"
      />
      <div className="flex-1">
        <h4 className="font-semibold transition-transform duration-300 hover:scale-105">
          {user.username}{" "}
          <span className="text-[11px] text-gray-400">({user.subtitle})</span>
        </h4>
        <p className="text-[11px] text-gray-500">
          Last message: {user.lastMessage} - {user.time}
        </p>
      </div>

      {user.unreadMessages > 0 && user.sentByUser ? (
        <div className="relative flex items-center justify-center w-4 h-4 bg-gray-200 border-2 border-blue-500 rounded-full mr-2">
          <div className="absolute inset-0 bg-white rounded-full"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 h-2 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 12l4 4L18 8"
            />
          </svg>
        </div>
      ) : user.unreadMessages > 0 ? (
        <div className="relative flex items-center justify-center w-4 h-4 bg-gray-200 border-2 border-blue-500 rounded-full mr-2">
          <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
          <span className="relative text-xs text-white font-bold">
            {user.unreadMessages}
          </span>
        </div>
      ) : null}

      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          user.active ? "bg-green-500 transform scale-125" : "bg-gray-500"
        }`}
      />
    </div>
  );
};

export default UserItem;
