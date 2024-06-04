import { RefObject, useEffect } from "react";

const useInfiniteScroll = (ref: RefObject<HTMLDivElement>, length: number, increaseLimit: () => void) => {
  useEffect(() => {
    const node = ref.current;
    if (node) {
      const handleScroll = () => {
        const { scrollLeft, clientWidth, scrollWidth } = node;
        if (scrollWidth - scrollLeft === clientWidth) {
          increaseLimit();
        }
      };

      node.addEventListener('scroll', handleScroll);
      return () => node.removeEventListener('scroll', handleScroll);
    }
  }, [ref, length, increaseLimit]);
};

export default useInfiniteScroll;