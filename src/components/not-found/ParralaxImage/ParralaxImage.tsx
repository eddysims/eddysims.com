"use client";

import { motion, useAnimation } from "framer-motion";
import { throttle } from "lodash";
import NextImage from "next/image";

export function ParralaxImage() {
  const animation = useAnimation();

  const update = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    const moveXPercent = (clientX / window.innerWidth - 0.5) * 2 * -1;
    const moveYPercent = (clientY / window.innerHeight - 0.5) * 2 * -1;

    const limitedMoveX = moveRange(-1, 1, moveXPercent);
    const limitedMoveY = moveRange(-1, 1, moveYPercent);

    const moveX = limitedMoveX * 10;
    const moveY = limitedMoveY * 5;

    animation.start({
      x: moveX,
      y: moveY,
    });
  };

  const handleMouseMove = throttle((e) => update(e), 100);

  function moveRange(min: number, max: number, value: number) {
    if (value < min) return min;
    if (value > max) return max;

    return value;
  }

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div className="-mt-72">
        <motion.div animate={animation} className="">
          <NextImage
            src="/images/not-found.svg"
            alt="Not found"
            width={208}
            height={324}
          />
        </motion.div>
        <div className="w-52 h-52 -mt-56 rounded-full bg-primary" />
      </div>
    </div>
  );
}
