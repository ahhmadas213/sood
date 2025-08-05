// In a new file, e.g., /hooks/useMediaQuery.ts

import { useState, useEffect } from 'react';

/**
 * A custom hook to check if a media query matches the current screen size.
 * It's SSR-safe and updates on window resize.
 * 
 * @param query - The media query string (e.g., '(max-width: 768px)').
 * @returns boolean - `true` if the query matches, `false` otherwise.
 */
function useMediaQuery(query: string): boolean {
  // On the server, we can't know the screen size, so we default to `false`.
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // This code only runs on the client, where `window` is available.
    const media = window.matchMedia(query);

    // Update state if the media query match status changes.
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Create a listener to update the state on resize.
    const listener = () => {
      setMatches(media.matches);
    };

    // Add the listener.
    window.addEventListener('resize', listener);

    // Cleanup function to remove the listener when the component unmounts.
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;