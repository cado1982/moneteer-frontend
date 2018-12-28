import { browser, by, element } from "protractor";

export class MoneteerPage {
  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return element(by.css("moneteer-root h1")).getText();
  }
}
