"use client"; // Ensure this is at the top of the file

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility instead of class names

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD); // Toggle visibility based on scroll position
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll); // Passive option doesn't need to be included in cleanup
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`${DEFAULT_BTN_CLS} ${isVisible ? '' : 'hidden'}`} // Conditional class application
      onClick={onClickBtn}
      aria-label="Scroll to top" // Improve accessibility
      style={{ display: isVisible ? 'flex' : 'none' }} // Ensure the button doesn't take space when hidden
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;