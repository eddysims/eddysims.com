import { Placement } from "@popperjs/core";
import clsx from "clsx";
import {
  useRef,
  useState,
  PropsWithChildren,
  useId,
  KeyboardEvent,
} from "react";
import { usePopper } from "react-popper";

type TooltipProps = {
  message: string;
  placement?: Placement;
};

export function Tooltip({
  children,
  message,
  placement = "top",
}: PropsWithChildren<TooltipProps>) {
  const id = useId();
  const [open, setOpen] = useState<boolean>();
  const [reference, setReference] = useState<HTMLDivElement | null>();
  const [popperEl, setPopperEl] = useState<HTMLDivElement | null>();

  const { styles, attributes, state } = usePopper(reference, popperEl, {
    placement,
    modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
  });

  const enterTimeout = useRef<NodeJS.Timeout>();
  const enterDelay = 100;
  const leaveTimeout = useRef<NodeJS.Timeout>();
  const leaveDelay = 250;

  const handleMouseEnter = () => {
    leaveTimeout.current && clearTimeout(leaveTimeout.current);
    enterTimeout.current = setTimeout(() => setOpen(true), enterDelay);
  };

  const handleMouseLeave = () => {
    enterTimeout.current && clearTimeout(enterTimeout.current);
    leaveTimeout.current = setTimeout(() => setOpen(false), leaveDelay);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      handleMouseLeave();
    }
  };

  return (
    <>
      <div
        ref={setReference}
        onMouseEnter={handleMouseEnter}
        onFocus={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onBlur={handleMouseLeave}
        onKeyDown={handleKeyDown}
        className="relative cursor-help"
        id={id}
        tabIndex={0}
      >
        {children}
      </div>

      <div
        {...attributes.popper}
        ref={setPopperEl}
        style={styles.popper}
        className={toolTipClass(open, state?.placement)}
        role="tooltip"
        aria-describedby={id}
        tabIndex={-1}
      >
        {message}
      </div>
    </>
  );
}

const toolTipClass = (open?: boolean, placement?: Placement) =>
  clsx(
    " text-center bg-white max-w-xs text-xs font-bold rounded border-border border transition-opacity p-3 shadow-lg leading-relaxed",
    open ? "visible opacity-100" : "invisible opacity-0",
    {
      "arrow-left": placement === "right",
      "arrow-bottom": placement === "top",
      "arrow-top": placement === "bottom",
      "arrow-right": placement === "left",
    }
  );
