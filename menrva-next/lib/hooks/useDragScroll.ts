import { useRef, useState, useEffect, useCallback } from 'react';

function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const startDragging = useCallback(() => setIsDragging(true), []);
  const stopDragging = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = (e: MouseEvent) => {
      pos = {
        left: node.scrollLeft,
        top: node.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
      setIsDragging(false);
      setIsMoving(false);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      if (!isMoving && (dx > 10 && dy > 10)) {
        setIsDragging(true);
        setIsMoving(true);
      }

      node.scrollTop = pos.top - dy;
      node.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      if (isMoving) {
        setIsDragging(false);
        setIsMoving(false);
      }
    };

    node.addEventListener('mousedown', mouseDownHandler);

    return () => {
      node.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      setIsDragging(false);
      setIsMoving(false);
    };
  }, [startDragging, stopDragging]); // Ensure these functions don't change between renders

  return { ref, isDragging, isMoving };
}

export default useDragScroll;
