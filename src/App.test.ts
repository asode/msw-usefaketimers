import App from "./App.svelte";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { setupServer } from "msw/node";
import { rest } from "msw";

const returnData = [
  {
    id: "testproject1",
    name: "Test Project 1",
  },
];

let serverDelay = 0;
const server = setupServer(
  rest.get("http://localhost/api/projects", (req, res, ctx) => {
    return res(
      ctx.delay(serverDelay),
      ctx.json({
        result: returnData,
      })
    );
  })
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks(); // reset called count
});
afterAll(() => {
  server.close();
});

describe("<App />", () => {
  test("Should render projects", async () => {
    render(App);
    await screen.findByText("Test Project 1");
  });

  test("Should wait if the listing takes a while", async () => {
    serverDelay = 10000;
    jest.useFakeTimers();
    render(App);
    jest.advanceTimersByTime(10500);
    await screen.findByText("Test Project 1");
  });
});
