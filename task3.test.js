const task3 = require("./task3");

test("Test case power", () => {
    expect(task3.power(2,2)).toBe(4);
});

test("Test case round", () => {
    expect(task3.round(2.7)).toBe(3);
});

test("Test case ceiling", () => {
    expect(task3.ceiling(2.3)).toBe(3);
});