import { NavLink } from "react-router-dom";

const Navlinks = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Our projects" },
    // { to: "/news", text: "" },
    { to: "/staff", text: "Meet our staff" },
    { to: "/children", text: "Meet our children" },
    { to: "/contact", text: "Contact Us" },
  ];

  return (
    <div className="hidden items-center font-santoshi font-normal lg:flex">
      {navLinks.map((link) => (
        <NavLink
          key={crypto.randomUUID()}
          className={({ isActive }) =>
            [
              isActive
                ? "active text-nowrap rounded-2xl border border-primary-700 bg-primary-100 px-2 py-2 text-primary-1000 xl:px-4"
                : "text-nowrap px-4 py-2 text-neutral-500",
            ].join("")
          }
          to={link.to}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Navlinks;
