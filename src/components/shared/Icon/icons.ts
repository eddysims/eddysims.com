import { IconContext } from "@react-icons/all-files";
import dynamic from "next/dynamic";

export const icons = {
  linkedin: dynamic<IconContext>(() =>
    import("@react-icons/all-files/ri/RiLinkedinLine").then((mod) => mod.RiLinkedinLine)
  ),
  github: dynamic<IconContext>(() =>
    import("@react-icons/all-files/ri/RiGithubLine").then((mod) => mod.RiGithubLine)
  ),
  code: dynamic<IconContext>(() =>
    import("@react-icons/all-files/ri/RiCodeSSlashLine").then((mod) => mod.RiCodeSSlashLine)
  ),
};
