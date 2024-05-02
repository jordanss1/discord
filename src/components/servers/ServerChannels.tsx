import { ReactElement } from "react";
import { Link } from "react-router-dom";
import * as Icons from "../icons/icons";

type ServerChannelsPropsType = {
  label: string;
  channels: { id: number; label: string }[];
};

const ServerChannels = ({
  label,
  channels,
}: ServerChannelsPropsType): ReactElement => {
  return (
    <div className="px-0.5">
      {label && (
        <button className="flex items-center gap-0.5 tracking-wide text-xs font-title uppercase">
          <Icons.Arrow className="w-3 h-3" />
          {label}
        </button>
      )}

      <div className="space-y-0.5 mt-[5px]">
        {channels.map(({ id, label }) => (
          <Link to="" key={id}>
            <div className="flex group cursor-pointer select-none gap-1.5 rounded hover:bg-gray-550/[0.16] items-center py-1 px-2 mx-2  text-gray-300 hover:text-gray-100">
              <Icons.Hashtag className="w-5 h-5 text-gray-400" />
              {label}
              <Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServerChannels;
