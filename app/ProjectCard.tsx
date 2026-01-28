"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useRef } from "react";
import {motion, useMotionValue, animate, AnimatePresence} from "motion/react";

interface ProjectCardProps {
  title: string;
  image: StaticImageData;
  link?: string | null;
  logo?: StaticImageData | null;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  link,
  logo,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const cubicBezierEase = [0.4, 0, 0, 1] as const;

  const runAnimation = (
    nextX: number,
    nextY: number,
    nextScale: number,
    duration: number
  ) => {
    setIsAnimating(true);
    const controls = [
      animate(x, nextX, { duration, ease: cubicBezierEase }),
      animate(y, nextY, { duration, ease: cubicBezierEase }),
      animate(scale, nextScale, { duration, ease: cubicBezierEase }),
    ];
    Promise.all(controls.map((control) => control.finished)).finally(() => {
      setIsAnimating(false);
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isExpanded) {
      // Return to original position
      runAnimation(0, 0, 1, 0.25);
      setIsExpanded(false);
    } else {
      // Move to center
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = window.innerWidth / 2 - rect.left - rect.width / 2;
        const centerY = window.innerHeight / 2 - rect.top - rect.height / 2;
        
        runAnimation(centerX, centerY, 1.2, 0.25);
        setIsExpanded(true);
      }
    }
  };

  const handleBackdropClick = () => {
    if (isExpanded) {
      runAnimation(0, 0, 1, 0.5);
      setIsExpanded(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleBackdropClick}
          />
        )}
      </AnimatePresence>
      <motion.div
        ref={cardRef}
        className={`masonry-item w-full relative overflow-hidden mb-4 cursor-pointer group flex flex-col  ${className ?? ""}`}
        style={{
          x,
          y,
          scale,
          zIndex: isExpanded || isAnimating ? 50 : 1,
        }}
        onClick={handleClick}
        initial={false}
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-auto object-contain rounded-md"
          sizes=""
        />
        <div className={`flex text-neutral-500 tracking-tighter text-xs lg:text-sm gap-1 items-center font-medium mt-1 w-[fit-content] ${isExpanded ? "px-2 py-0.5 bg-neutral-50 rounded-sm border-[1px] border-neutral-400" : ""}`}>
          {logo && <Image src={logo} alt="shortLogo" width={12} height={12} />}
          <span className="">{title}</span>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
