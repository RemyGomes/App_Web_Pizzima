import request from "supertest";
import app, { server } from "../index";


describe("index route", () => {

  test("should respond with a 200 with no query parameters", () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200)
      .then(response => {
        expect(response.text).toMatch(/pizza/);
      });
  });
});

describe("pizza route", () => {

  test("should respond with a 200 with no query parameters", () => {
    return request(app)
      .get("/pizza")
      .expect("Content-Type", /html/)
      .expect(200)
      .then(response => {
        expect(response.text).toMatch(/pizza/);
      });
  });
});
// Marche pas
describe("add pizza", () => {
  afterAll(() => {
    server.close();
  });

  test("should respond with 200 and new pizza object", () => {
    var name = "TestgezrgezPizza";
    var sauce = "Sauce tofezfezmage";
    var viandes = ["Poulefezfat"];
    var fromages = ["Mozzarelfeazla"];
    var accompagnements = ["lardofezans fumés"];
    var piquante = false;
    var file = "/smthfezafeza.jpeg";
    console.log({name, sauce, viandes, fromages, accompagnements, piquante, file});
    return request(app).post("/add_pizza", {name, sauce, viandes, fromages, accompagnements, piquante, file})
    .expect(200);
  });
});

