const {elementPresent} = require("./task5");

test("Test case include", () => {
    expect(elementPresent(3)).toBe(true);
});

test("Test case not include", () => {
    expect(elementPresent(31)).toBe(true);
});