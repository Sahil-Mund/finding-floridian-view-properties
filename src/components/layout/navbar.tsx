import { useEffect, useState } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";

import { navigationURLs, logoURL } from "../../assets/constansts";

import "../../styles/navbar.scss";
import { useAuth } from "hooks/useAuth";

const Navbar = () => {
  const [qnaRouteType, setQnaRouteType] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const { userData , isLoggedIn, setIsLoggedIn, setUserData} = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pathname.includes("qna")) {
      const type = search.split("=");
      setQnaRouteType(type[1] || "");
    } else {
      setQnaRouteType("");
    }
  }, [pathname, search]);

  const handleLogout = () => {
    
    setIsLoggedIn(false);
    setUserData(null);
    sessionStorage.removeItem('user_access_token');
    navigate('/login')
  }

  return (
    <div className={`header ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="logo">
       <Link to={'/'}> <img src={logoURL} alt="logo-img" /> </Link>
      </div>
      {isMobile && (
        <div className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
          {!mobileMenuOpen ? " " : " "}
        </div>
      )}
      <div className={`nav-items ${mobileMenuOpen ? "mobile-menu" : ""}`}>
        {((isMobile && mobileMenuOpen) || !isMobile) && (
          <ul>
            {navigationURLs.map((ele, index) => (
              <li key={index}>
                {ele.type === "same_page" ? (
                  <Link
                    to={ele.url}
                    className={
                      qnaRouteType === ele.displayName.toLowerCase()
                        ? "active"
                        : ""
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {ele.displayName}
                  </Link>
                ) : (
                  <NavLink
                    to={ele.url}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {ele.displayName}
                  </NavLink>
                )}
              </li>
            ))}

            {userData && isLoggedIn && (
             <>
              <li>
                Hi {userData.name}
              </li>
              <li className="pointer" onClick={handleLogout}>
              LogOut
              </li>
             </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
