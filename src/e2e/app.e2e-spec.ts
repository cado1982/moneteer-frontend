import { MoneteerPage } from "./app.po";
import "jasmine";

describe("moneteer App", () => {
  let page: MoneteerPage;

  beforeEach(() => {
    page = new MoneteerPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to moneteer!!");
  });
});