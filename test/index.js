var should = require("chai").should(),
  reactLocalStorage = require("../");


describe("check methods get and set", function () {
  it("boolean", function () {
    reactLocalStorage.set("var", true);
    reactLocalStorage.get("var").should.equal(true);
  });
  it("int", function () {
    reactLocalStorage.set("var", 1);
    reactLocalStorage.get("var").should.equal(1);
  });
  it("string", function () {
    reactLocalStorage.set("var", "test");
    reactLocalStorage.get("var").should.equal("test");
  });
  it("object", function () {
    reactLocalStorage.setObject("var", { test: "test" });
    reactLocalStorage.getObject("var").should.include({ test: "test" });
  });
});
