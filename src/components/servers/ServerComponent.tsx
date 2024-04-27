import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

type ServerComponentPropsType = {
  route: string;
  children: React.ReactNode;
};

const ServerComponent = ({
  route,
  children,
}: ServerComponentPropsType): ReactElement => {
  const { pathname } = useLocation();

  return (
    <Link to={route}>
      <a className="relative block group">
        <div className="absolute flex -left-3 h-full items-center">
          <div
            className={` ${
              pathname === route
                ? "h-10 opacity-100"
                : "h-5 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
            } bg-white w-1 rounded-r opacity-0 transition-all duration-200  origin-left`}
          />
        </div>
        <div className="group-active:translate-y-px">
          <div
            className={`${
              pathname === route
                ? "rounded-2xl bg-brand text-white"
                : "text-gray-100 bg-gray-700 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white"
            }  transition-all rounded-3xl duration-200 w-12 h-12 flex items-center justify-center`}
          >
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ServerComponent;
