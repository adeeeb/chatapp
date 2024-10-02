/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faVideo,
  faPhone,
  faUser,
  faHeart,
  faFilePdf,
  faMusic,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

const RightMenu = ({ otherUser }) => (
  <div className="w-[313px] bg-white shadow-lg rounded-lg p-6 overflow-auto">
    <div className="mb-6 mt-10">
      <div className="flex items-center border-b border-gray-200 pb-2">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-gray-500 mr-3 text-lg"
        />
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-[257px]"
          placeholder="Search..."
        />
      </div>
    </div>

    <div className="text-center mb-6">
      <img
        src={otherUser.userPhoto}
        alt={otherUser.username}
        className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      />
      <h4 className="font-semibold text-xl transition-transform duration-300 hover:scale-105">
        {otherUser.username}
      </h4>
      <p className="text-gray-500 text-sm">{otherUser.subtitle}</p>
    </div>

    <hr className="border-gray-200 mb-4" />

    <div className="flex justify-center text-center items-center mb-6 w-[166px] ml-12 gap-y-16">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#DCE8FF] rounded-full mb-1">
          <button className="relative group">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-primary text-[30px]"
            />
          </button>
        </div>
        <span className="text-sm text-gray-500 mt-1">Video Call</span>
      </div>
      <div className="border-l border-gray-300 h-10 mx-4" />
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#DCE8FF] rounded-full mb-1">
          <button className="relative group">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-primary w-[30px] h-[28px]"
            />
          </button>
        </div>
        <span className="text-sm text-gray-500 mt-1">Voice Call</span>
      </div>
    </div>

    <hr className="border-gray-200 mb-4" />

    <div className="flex justify-around items-center mb-6 w-[245px] h-[14px]">
      <button className="flex items-center text-black w-[106px] h-[12px]">
        <FontAwesomeIcon icon={faUser} className="text-[14px] mr-1" />
        <span className="text-[11px] w-[89px]">View Friend</span>
      </button>
      <button className="flex items-center text-black w-[106px] h-[12px]">
        <FontAwesomeIcon icon={faHeart} className="text-[14px] mr-1" />
        <span className="text-[11px] w-[89px]">Add to Favorites</span>
      </button>
    </div>

    <hr className="border-gray-200 mb-4" />

    <h5 className="text-left font-bold text-[11px] mb-4">Attachments</h5>

    <div className="flex justify-around items-center mb-6 w-[258px] h-[45px]">
      <button className="bg-blue-100 rounded-lg w-[52px] h-[45px] text-[#699BF7] text-center items-center transition-transform duration-300 transform hover:scale-105 hover:bg-blue-200">
        <FontAwesomeIcon icon={faFilePdf} className="w-[15px] h-[20px]" />
        <p className="text-[10px] w-full h-[10px] text-center">PDF</p>
      </button>
      <button className="bg-blue-100 rounded-lg w-[52px] h-[45px] text-[#699BF7] transition-transform duration-300 transform hover:scale-105 hover:bg-blue-200">
        <FontAwesomeIcon icon={faVideo} className="w-[25px] h-[20px]" />
        <p className="text-[10px] w-full h-[10px] text-center">VIDEO</p>
      </button>
      <button className="bg-blue-100 rounded-lg w-[52px] h-[45px] text-[#699BF7] transition-transform duration-300 transform hover:scale-105 hover:bg-blue-200">
        <FontAwesomeIcon icon={faMusic} className="w-[20px] h-[20px]" />
        <p className="text-[10px] w-full h-[10px] text-center">MUSIC</p>
      </button>
      <button className="bg-blue-100 rounded-lg w-[52px] h-[45px] text-[#699BF7] transition-transform duration-300 transform hover:scale-105 hover:bg-blue-200">
        <FontAwesomeIcon icon={faImage} className="w-[23px] h-[20px]" />
        <p className="text-[10px] w-full h-[10px] text-center">IMAGE</p>
      </button>
    </div>

    <div className="text-center">
      <button className="w-[100px] h-[27px] text-[10px] border border-[#4399FF] text-[#4399FF] rounded-full hover:bg-[#4399FF] hover:text-white transition-transform duration-300 transform hover:scale-105">
        View All
      </button>
    </div>
  </div>
);

export default RightMenu;
