import dynamic from "next/dynamic";

export const icons = {
  x: dynamic(() => import("react-icons/fi").then((mod) => mod.FiX)),
  send: dynamic(() => import("react-icons/fi").then((mod) => mod.FiSend)),
  github: dynamic(() => import("react-icons/fi").then((mod) => mod.FiGithub)),
  linkedin: dynamic(() =>
    import("react-icons/fi").then((mod) => mod.FiLinkedin),
  ),
  code: dynamic(() => import("react-icons/fi").then((mod) => mod.FiCode)),
  calendar: dynamic(() =>
    import("react-icons/fi").then((mod) => mod.FiCalendar),
  ),
  watch: dynamic(() => import("react-icons/fi").then((mod) => mod.FiWatch)),
  paperclip: dynamic(() =>
    import("react-icons/fi").then((mod) => mod.FiPaperclip),
  ),
};
