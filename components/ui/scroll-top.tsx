import { useEffect, useState, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleUp } from "react-icons/fa";

interface ScrollToTopProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollContainerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Check if `current` is not null before accessing `scrollTop`
    if (
      scrollContainerRef.current &&
      scrollContainerRef.current.scrollTop > 300
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Ensure `current` is not null before calling `scrollTo`
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    // Ensure `current` is not null before attaching the event listener
    const element = scrollContainerRef.current;
    if (element) {
      element.addEventListener("scroll", toggleVisibility);
      return () => {
        element.removeEventListener("scroll", toggleVisibility);
      };
    }
  }, [scrollContainerRef]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" cursor-pointer z-50"
        >
          <button
            onClick={scrollToTop}
            className="bg-primary dark:bg-dark-primary  text-white font-bold py-2 px-4 rounded-full shadow-lg"
            aria-label="Scroll to top"
          >
            <FaAngleUp className="h-6 w-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
