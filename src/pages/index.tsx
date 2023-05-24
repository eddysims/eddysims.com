import { Icon } from "@/components/shared/Icon";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen font-base">
      <div className="container">
        <div className="flex flex-col min-h-screen">
          <nav>
            <ul className="flex justify-end gap-lg py-lg">
              <li>
                <a href="https://www.linkedin.com/in/edeesims/" target="_blank">
                  <Icon name="linkedin" size="large" />
                </a>
              </li>
              <li>
                <a href="https://github.com/eddysims" target="_blank">
                  <Icon name="github" size="large" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/eddysims/eddysims.com"
                  target="_blank"
                >
                  <Icon name="code" size="large" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex-1 flex flex-col justify-center -mt-lg">
            <div className="text-6xl md:text-8xl lowercase font-extralight">Eddy Sims</div>
            <div className="mt-md text-lg md:text-xl">
              Edmonton based software developer with over 15 years of
              experience. Currently for hire. Looking to show off some work,
              experiment, and share my learnings.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
