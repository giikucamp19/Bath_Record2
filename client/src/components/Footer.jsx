import { HomeIcon, CalendarIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-400 flex items-center justify-around px-4 py-2 fixed bottom-0 w-full z-10">
        <HomeIcon className="h-6 w-6 my-2 text-black-500" />
        <CalendarIcon className="h-6 w-6 my-2 text-black-500" />
      </footer>
    </div>
  );
};
