"use client";
import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false); 

  useEffect(() => {
    if (typeof window === "undefined") return;

    const matchMedia = window.matchMedia(query);

    const handleChange = () => {
      setMatches(matchMedia.matches);
    };

    handleChange(); 
    matchMedia.addListener(handleChange);

    return () => {
      matchMedia.removeListener(handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;