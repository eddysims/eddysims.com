type SignatureProps = {
  className?: string;
};

export function Signature({ className }: SignatureProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 109"
      fill="none"
      className={className}
    >
      <title>Eddy Sims</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.5.5h6c.25 2.82-.25 5.486-1.5 8C108.91 34.583 83.41 50.416 51.5 56a287.632 287.632 0 0 1-36 43 52.976 52.976 0 0 1-14 9.5c-1.02-.502-1.19-1.168-.5-2A770.415 770.415 0 0 0 42.5 55C28.51 51.546 23.35 42.713 27 28.5c4.46-13.64 13.63-21.64 27.5-24 3.68-.441 6.85.559 9.5 3 1.54 6.249 1.87 12.583 1 19-1.84 6.979-4.17 13.646-7 20 26.73-8.594 48.56-23.928 65.5-46Zm-71 11c6-.043 8.17 2.957 6.5 9-2.31 9.261-5.97 17.927-11 26-5.26 1.13-9.6-.537-13-5-1.48-3.202-1.82-6.536-1-10 3.97-8.798 10.14-15.465 18.5-20Z"
      />
    </svg>
  );
}
