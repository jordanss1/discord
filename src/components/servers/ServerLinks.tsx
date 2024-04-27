import { ReactElement } from "react";
import { Link } from "react-router-dom";
import DiscordIcon from "../DiscordIcon";

const ServerLinks = () => {
  return (
    <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
      <Link to="/">
        <div className="bg-gray-700 transition-all rounded-3xl duration-200 hover:rounded-2xl hover:bg-brand hover:text-white text-gray-100 w-12 h-12 flex items-center justify-center">
          <DiscordIcon className="w-7 h-5" />
        </div>
      </Link>
      <Link to="/servers/1">
        <a className="bg-gray-700 transition-all rounded-3xl duration-200 hover:rounded-2xl hover:bg-brand hover:text-white text-gray-100 w-12 h-12 flex items-center justify-center">
          S1
        </a>
      </Link>
      {/* {[...Array(40)].map((_, i) => (
        <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
          {i}
        </div>
      ))} */}
    </div>
  );
};

export default ServerLinks;
