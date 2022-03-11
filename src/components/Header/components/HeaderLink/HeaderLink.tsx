import styles from "./HeaderLink.module.css";

type HeaderLinkProps = {
  title: string;
  onClick?(): void;
};

export function HeaderLink({ title, onClick }: HeaderLinkProps) {
  return (
    <button className={styles.link} onClick={handleClick}>
      {title}
    </button>
  );

  function handleClick() {
    onClick && onClick();
  }
}
