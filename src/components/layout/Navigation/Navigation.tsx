export function Navigation() {
  return (
    <header className="bg-surface text-text">
      <nav id="main-navigation">
        <ul className="flex gap-8 p-8">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
