import { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <>
      <div className="bg-gray-800 flex flex-col w-60">
        <div className="px-3 h-12 flex items-center shadow-md font-title text-white">
          Dashboard
        </div>
        <div className="p-3 flex-1 text-gray-300 overflow-y-scroll space-y-2 font-medium">
          Friends
        </div>
      </div>
      <div className="bg-gray-700 flex flex-col flex-1" />
    </>
  );
};

export default Home;
