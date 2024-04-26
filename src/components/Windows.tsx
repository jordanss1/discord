import { ReactElement } from "react";
import DiscordIcon from "./DiscordIcon";

const Windows = (): ReactElement => {
  return (
    <div className="flex text-gray-100 h-screen">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        <div className="bg-gray-700 hover:bg-brand hover:text-white text-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
          <DiscordIcon className="w-7 h-5" />
        </div>
        {/* {[...Array(40)].map((_, i) => (
          <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
            {i}
          </div>
        ))} */}
      </div>
      <div className="bg-gray-800 flex flex-col w-60">
        <div className="px-3 h-12 flex items-center shadow-md font-title text-white">
          Tailwind CSS
        </div>
        <div className="p-3 flex-1 text-gray-300 overflow-y-scroll space-y-2 font-medium">
          <p className="text-white">channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p>channel {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex flex-col flex-1">
        <div className="p-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-4">
          {[...Array(40)].map((_, i) => (
            <p>
              message {i} Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Perspiciatis porro magni quas esse eligendi ratione hic
              inventore id fuga quam. Minima voluptatem ad debitis? Nesciunt
              laboriosam dicta similique harum ex.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Windows;
