import { Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver";
const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

class TodoPage {
  todoInput: By = By.className("new-todo")
  todos: By = By.xpath('//li[@class="todo"]');
  todoLabel: By = By.css('label');
  todoComplete: By = By.xpath('//input[@class="toggle"]');
  todoStar: By = By.css('.star');
  starBanner: By = By.css('.starred');
  todoCount: By = By.css('.todo-count');
  clearCompletedButton: By = By.css("button.clear-completed");

  driver: WebDriver;

  url: string = "https://devmountain.github.io/qa_todos/";
  
  constructor(driver: WebDriver) {
    this.driver = driver;
  }
}
const tp = new TodoPage(driver);

describe("the todo app", () => {
  beforeEach(async () => {
    await driver.get(tp.url);
  });
  afterAll(async () => {
    await driver.quit();
  });
  it("can add a todo", async () => {

    await driver.wait(until.elementLocated(tp.todoInput));
    await driver.findElement(tp.todoInput).sendKeys("Test To-Do\n");
    await driver.sleep(5000)
  });
  it("can remove a todo", async () => {});
  it("can mark a todo with a star", () => {});
  it("has the right number of todos listed", () => {});
})