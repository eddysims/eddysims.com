import * as nextRouter from "next/router";

// @ts-expect-error TODO: make this mock bettter. and global
nextRouter.useRouter = jest.fn();
// @ts-expect-error TODO: make this mock bettter. and global
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
