import { render, cleanup } from "@testing-library/react";

import { TextAccent } from ".";

afterEach(cleanup);

it("renders", () => {
  const { container } = render(<TextAccent />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class="accent"
      />
    </div>
  `);
});
