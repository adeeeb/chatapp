/* eslint-disable react/prop-types */
const UserForm = ({
  userPhoto,
  handleFileChange,
  username,
  setUsername,
  subtitle,
  setSubtitle,
  handleUsernameSubmit,
}) => (
  <form
    onSubmit={handleUsernameSubmit}
    className="flex flex-col items-center justify-center h-full bg-gray-200"
  >
    {userPhoto && (
      <img
        src={userPhoto}
        alt="Profile Preview"
        className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-primary"
      />
    )}
    <input
      type="file"
      onChange={handleFileChange}
      className="mb-4 p-2 border border-gray-300 rounded"
      accept="image/*"
      required
    />
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-primary transition-all duration-300"
      placeholder="Enter your username"
      required
    />
    <input
      type="text"
      value={subtitle}
      onChange={(e) => setSubtitle(e.target.value)}
      className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-primary transition-all duration-300"
      placeholder="Enter your subtitle"
      required
    />
    <button
      type="submit"
      className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-all duration-300"
    >
      Join Chat
    </button>
  </form>
);

export default UserForm;
