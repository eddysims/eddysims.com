import { render, cleanup } from "@testing-library/react";

import { HeartSpread } from ".";

afterEach(cleanup);

it("renders", () => {
  const { container } = render(<HeartSpread />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="spread"
      >
        {...
        <span
          class="accent"
        >
          ♥️
        </span>
        }
      </div>
    </div>
  `);
});
