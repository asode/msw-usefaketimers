module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // add the TypeScript parser
  plugins: ["svelte3", "@typescript-eslint", "testing-library"],
  overrides: [
    // this stays the same
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debug": "warn",
    "testing-library/no-dom-import": "off",
  },
  settings: {
    "svelte3/typescript": true, // load TypeScript as peer dependency
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
