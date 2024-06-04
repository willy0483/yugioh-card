import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";


const handleMouseMove = document.getElementById("handleMouseMove");

const x = useMotionValue(0);
const y = useMotionValue(0);


handleMouseMove.addEventListener("mousemove", (e) => {
  const rect = e.target.getBoundingClientRect();



  const width = rect.width;
  const height = rect.height;

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const xPct = mouseX / width - 0.5;
  const yPct = mouseY / height - 0.5;

  console.log(xPct);
});
