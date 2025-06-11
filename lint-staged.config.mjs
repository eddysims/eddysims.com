const config = {
  "**/*.{ts,tsx}": (files) => `eslint ${files.join(" ")}`,
};

export default config;
