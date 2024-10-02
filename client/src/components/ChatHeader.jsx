/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faBell } from "@fortawesome/free-solid-svg-icons";

const ChatHeader = ({ otherUser }) => (
  <div className="flex items-center justify-between p-4 bg-white shadow-md">
    <div className="flex items-center">
      <img
        src={otherUser.userPhoto}
        alt={otherUser.username}
        className="w-10 h-10 rounded-full mr-2"
      />
      <h4 className="font-semibold mr-2">{otherUser.username}</h4>
      <div
        className={`w-3 h-3 rounded-full ${
          otherUser.active ? "bg-green-500" : "bg-gray-500"
        }`}
      />
    </div>
    <div className="flex items-center space-x-4">
      <button>
        <FontAwesomeIcon icon={faSearch} className="text-blue-500 text-xl" />
      </button>
      <button>
        <FontAwesomeIcon icon={faHeart} className="text-blue-500 text-xl" />
      </button>
      <button>
        <FontAwesomeIcon icon={faBell} className="text-blue-500 text-xl" />
      </button>
    </div>
  </div>
);

export default ChatHeader;
