module.exports = {
  "*.{ts,tsx}": ["bash -c 'npx tsc'"],
  "*.{js,jsx,ts,tsx}": ["npm run lint:js", "jest --bail --findRelatedTests"],
};
