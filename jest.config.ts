import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  roots: ["<rootDir>/src/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  moduleNameMapper: {},
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
export default config;
