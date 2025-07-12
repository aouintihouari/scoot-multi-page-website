import { NavLink } from "react-router";
import Button from "./UI/Button";

const Header = ({ openMenu, onOpenMenu }) => {
  return (
    <header
      className={`${openMenu && "fixed top-0 left-0 z-2 bg-white"} flex h-[4rem] w-full items-center p-8 sm:max-h-[96px] sm:justify-between sm:px-12 sm:py-10 md:px-[15%] md:py-10`}
    >
      <img
        className="mr-28 sm:hidden"
        onClick={onOpenMenu}
        src={
          openMenu ? "./assets/icons/close.svg" : "./assets/icons/hamburger.svg"
        }
        alt="menu icon"
      />
      <div className="mono flex items-center justify-start font-bold">
        <NavLink className="-mt-2" to="/">
          <img
            className="sm:mt-0 sm:min-h-[28.56px] sm:min-w-[107.82px] sm:px-0"
            src="./assets/logo.svg"
            alt="logo"
          />
        </NavLink>
        <ul className="hidden sm:ml-8 sm:flex">
          <li>
            <NavLink
              to="/about"
              className="ml-4 cursor-pointer text-[#939CAA] duration-300 hover:text-[#FCB72B] md:mr-6"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              className="ml-4 cursor-pointer text-[#939CAA] duration-300 hover:text-[#FCB72B] md:mr-6"
            >
              Location
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className="ml-4 cursor-pointer text-[#939CAA] duration-300 hover:text-[#FCB72B] md:mr-6"
            >
              Careers
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block">
        <Button content="Get Scootin" classes="" />
      </div>
    </header>
  );
};

export default Header;
