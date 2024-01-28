import React from "react";
import { FiMail, FiMoon, FiShoppingBag } from "react-icons/fi";
import { GoHome } from "react-icons/go";

type NavItemProps = {
  icon: React.ElementType;
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon, href, label }) => {
  const IconComponent = icon;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    // Get the target element's ID from the href attribute
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hover:bg-slate-200 transition duration-700 ease-in-out rounded-3xl h-11 w-11 flex items-center text-white justify-center hover:text-black">
      <a href={href} onClick={handleClick}>
        <IconComponent className="h-5 w-5" />
      </a>
    </div>
  );
};

const Nav = () => {
  const navItems = [
    { icon: GoHome, href: "#home", label: "Home" },
    { icon: FiShoppingBag, href: "#projects", label: "Projects" },
    { icon: FiMail, href: "#mail", label: "Mail" },
    { icon: FiMoon, href: "#moon", label: "Moon" },
  ];

  return (
    <div className="rounded-full bg-black p-1 fixed md:right-5 right-0 h-auto z-50">
      <div className="grid grid-rows-3 gap-5">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
