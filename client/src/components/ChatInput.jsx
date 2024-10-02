/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPaperclip,
  faCamera,
  faSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const ChatInput = ({ input, setInput, sendMessage }) => (
  <div className="p-4 bg-gray-200">
    <form onSubmit={sendMessage} className="flex items-center space-x-2">
      <div className="relative flex-1">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 w-full rounded-full focus:outline-none focus:border-primary transition-all duration-300 pl-10"
          placeholder="Write something..."
        />
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <FontAwesomeIcon
            icon={faMicrophone}
            className="text-blue-500 text-xl"
          />
        </span>
      </div>
      <div className="flex items-center space-x-1 border-l border-gray-300 pl-2">
        <button type="button">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="text-blue-500 text-2xl"
          />
        </button>
        <span className="border-l border-gray-300 h-6" />
        <button type="button">
          <FontAwesomeIcon icon={faCamera} className="text-blue-500 text-2xl" />
        </button>
        <span className="border-l border-gray-300 h-6" />
        <button type="button">
          <FontAwesomeIcon icon={faSmile} className="text-blue-500 text-2xl" />
        </button>
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-full">
        <FontAwesomeIcon icon={faPaperPlane} className="text-xl" />
      </button>
    </form>
  </div>
);

export default ChatInput;
