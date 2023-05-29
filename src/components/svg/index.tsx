import * as svgs from "./svgs";

type SvgProps = {
  name: keyof typeof svgs;
  viewBox?: string;
};

export function Svg({ name, viewBox }: SvgProps) {
  const current = svgs[name];

  const width = viewBox?.split(" ")[2] ?? current.viewBox.split(" ")[2];

  return (
    <svg
      viewBox={viewBox ?? current?.viewBox}
      fill={current?.fill}
      width={width}
    >
      {current?.paths.map((path) => (
        <path key={path.d} {...path} />
      ))}
    </svg>
  );
}
