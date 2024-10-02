import Chat from "./section/Chat";
import "./index.css";

const App = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-200">
      <div className="w-full h-full shadow-lg rounded-lg overflow-hidden">
        <Chat />
      </div>
    </div>
  );
};

export default App;
