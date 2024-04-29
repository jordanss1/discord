import { ReactElement } from "react";
import { CheckIcon, ChevronIcon, VerifiedIcon } from "../icons/icons";

type ServerPropsType = {
  name: string;
};

const Server = ({ name }: ServerPropsType) => {
  return (
    <>
      <div className="bg-gray-800 flex flex-col w-60">
        <button className="px-4 h-12 flex items-center gap-1 shadow-sm font-title text-white text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative w-4 h-4">
            <VerifiedIcon className="w-4 h-4 absolute text-gray-550" />
            <CheckIcon className="w-4 h-4 absolute" />
          </div>
          {name}
          <ChevronIcon className="ml-auto w-[18px] h-[18px] opacity-80" />
        </button>
        <div className="p-3 flex-1 text-gray-300 overflow-y-scroll space-y-2 font-medium">
          <p className="text-white">channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p>channel {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex flex-col flex-1">
        <div className="p-3 h-12 flex items-center shadow-sm">General</div>
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
    </>
  );
};

export default Server;
