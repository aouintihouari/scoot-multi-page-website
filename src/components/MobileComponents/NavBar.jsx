import { NavLink } from "react-router";
import Button from "../UI/Button";

const NavBar = ({ onClose }) => {
  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <nav className="mono fixed top-16 left-0 z-10 flex h-[calc(100vh-4rem)] w-full max-w-screen flex-col bg-[rgba(0,0,0,.7)] sm:hidden">
      <ul className="flex h-full w-[70%] flex-col justify-between bg-[#333A44] pt-14 pb-10 pl-10 text-[18px] leading-[25px] font-bold tracking-[0px] text-[#E5ECF4]">
        <div>
          <li className="mb-10">
            <NavLink to="/about" onClick={handleLinkClick}>
              About
            </NavLink>
          </li>
          <li className="mb-10">
            <NavLink to="/locations" onClick={handleLinkClick}>
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" onClick={handleLinkClick}>
              Careers
            </NavLink>
          </li>
        </div>
        <Button content="Get Scootin" classes="" onClick={handleLinkClick} />
      </ul>
    </nav>
  );
};

export default NavBar;
