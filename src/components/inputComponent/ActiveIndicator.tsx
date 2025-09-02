import React, { useRef, useEffect } from "react";
import BackButton from "./BackButton";

interface ActiveIndicatorProps {
  options: string[];
  activeOption: number;
  setActiveScreen: (option: number) => void;
}

const ActiveIndicator: React.FC<ActiveIndicatorProps> = ({
  options,
  activeOption,
  setActiveScreen,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Drag scroll logic
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Scroll active option into view whenever it changes
  useEffect(() => {
    const activeEl = optionRefs.current[activeOption];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        inline: "center", // center horizontally
        block: "nearest",
      });
    }
  }, [activeOption]);

  return (
    <div
      ref={containerRef}
      className="flex gap-8 !mb-4 overflow-x-auto cursor-grab active:cursor-grabbing hide-scrollbar no-select"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <BackButton className="!ml-1" />
      {options.map((option, index) => (
        <div
          key={option}
          className="flex-shrink-0 "
          ref={(el) => {
            optionRefs.current[index + 1] = el;
          }}
        >
          <button
            className={`
  !py-[clamp(4px,1.5vh,16px)] 
  !px-[clamp(25px,2vw,32px)]
  !rounded-[50px]
  !text-[clamp(14px,2vw,16px)]
  text-[var(--primary-color)]
  border border-[var(--primary-color)]
  hover:!bg-[#9BC9FF]
  !cursor-pointer
  !my-3 !mb-6
  box-hover
  !transition-all !duration-300
  ${index + 1 === activeOption ? "!bg-[#9BC9FF]" : "!bg-white"}
`}
            onClick={() => setActiveScreen(index + 1)}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActiveIndicator;
