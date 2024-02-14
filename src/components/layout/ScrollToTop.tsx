import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  // Add your component's props here
}

const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
