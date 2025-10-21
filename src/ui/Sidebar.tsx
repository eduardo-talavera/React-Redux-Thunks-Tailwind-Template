import { type AppDispatch, type RootState } from '@/store/index';
import { closeSideMenu } from '@/store/ui/ui';
import clsx from "clsx";
import { FaRegWindowClose } from "react-icons/fa";
import {
  IoPersonOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export const Sidebar = () => {
  const showSideMenu = useSelector((state: RootState) => state.ui.showSideMenu);
  const dispatch = useDispatch<AppDispatch>();


  return (
    <div>
      {showSideMenu && (
        <>
          {/* Background black */}
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
          {/** Blur */}
          <div
            onClick={() => dispatch(closeSideMenu())}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />
        </>
      )}

      {/* SideMenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[90vw] lg:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300s",
          {
            "translate-x-full": !showSideMenu,
          }
        )}
      >
        <FaRegWindowClose 
          size={25}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => dispatch(closeSideMenu())}
        />

        {/** Menú */}
        <Link
          to="/link-1"
          className="flex items-center mt-20 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={25} />
          <span className="ml-3 text-xl">Link 1</span>
        </Link>

        <Link
          to="/link-2"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={25} />
          <span className="ml-3 text-xl">Link 2</span>
        </Link>
      </nav>
    </div>
  );
};
