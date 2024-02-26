import dynamic from "next/dynamic";

export const icons = {
  x: dynamic(() => import("react-icons/fi").then((mod) => mod.FiX)),
  send: dynamic(() => import("react-icons/fi").then((mod) => mod.FiSend)),
};
