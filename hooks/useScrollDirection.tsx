import { useState, useEffect, useRef } from "react";

const useScrollDirection = () => {
  // Initialize the scroll direction state
  const [scrollDir, setScrollDir] = useState("up");
  // Use a ref to keep track of the last scroll position
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    // Debugging log to verify setup initiation
    console.log("Setting up scroll listener");

    const updateScrollDirection = () => {
      const scrollY = window.scrollY; // Get the current scroll position
      // Determine the scroll direction based on the previous and current scroll position
      const direction = scrollY > lastScrollY.current ? "down" : "up";
      // Log current scroll position and direction for debugging
      console.log(
        `Scroll Y: ${scrollY}, Last Scroll Y: ${lastScrollY.current}, Direction: ${direction}`
      );

      // Check if the scroll direction has changed and the scroll difference is significant (more than 10 pixels)
      if (
        direction !== scrollDir &&
        Math.abs(scrollY - lastScrollY.current) > 10
      ) {
        setScrollDir(direction); // Update the scroll direction state
        console.log(`Scroll Direction updated to ${direction}`); // Debugging log for direction update
      }
      lastScrollY.current = scrollY; // Update the last scroll position
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      console.log("Cleaning up scroll listener");
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDir]); // Depend on scrollDir to capture updates to state

  return scrollDir;
};

export default useScrollDirection;
