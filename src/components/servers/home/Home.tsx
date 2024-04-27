import { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <>
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
    </>
  );
};

export default Home;
