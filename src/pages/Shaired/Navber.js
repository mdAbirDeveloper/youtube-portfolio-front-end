import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navber = () => {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);
  // Check if user data is present in local storage
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.reload(); // Reload the page using Next.js router
  };

  const toogleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="flex text-2xl justify-between text-gray-200 items-center px-6 max-w-[1300px] mx-auto h-24">
      <a href="">S.Jalal</a>

      <ul className="hidden md:flex gap-12 cursor-pointer">
        <li className="relative group">
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transfrom duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="portfolio" smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transfrom duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transfrom duration-300 ease-in-out"></span>
        </li>
        {/* Show "Login" if not logged in */}
        {!isLoggedIn && (
          <li className="relative group">
            <Link to="Login" smooth={true} offset={50} duration={500}>
              Login
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
        )}

        {/* Show "Dashboard" and "Sign Out" if logged in */}
        {isLoggedIn && (
          <>
            <li className="relative group">
              <Link to="/Dashboard" smooth={true} offset={50} duration={500}>
                Dashboard
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>

            <li className="relative group">
              <button
                onClick={handleSignOut}
                className="text-white focus:outline-none"
              >
                Sign Out
              </button>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          </>
        )}
      </ul>

      <div onClick={toogleNav} className="md:hidden z-30">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#41bca7]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          <li>
            <Link
              onClick={closeNav}
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              to="portfolio"
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              to="Login"
              smooth={true}
              offset={50}
              duration={500}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
