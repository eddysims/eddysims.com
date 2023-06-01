import * as nextRouter from "next/router";
import "@testing-library/jest-dom";

// eslint-disable-next-line no-import-assign
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
