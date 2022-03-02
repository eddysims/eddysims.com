import { render, cleanup } from "@testing-library/react";

import { Hero } from ".";

afterEach(cleanup);

it("renders the contents of a hero", () => {
  const { container } = render(<Hero>Foo</Hero>);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="hero"
      >
        Foo
      </div>
    </div>
  `);
});
