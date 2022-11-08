const task1 = require("./task1");

test("Test case sum", () => {
    expect(task1.sum(2,2)).toBe(4);
});


test("Test case sub", () => {
    expect(task1.sub(2,1)).toBe(1);
});


test("Test case mul", ()=> {
    expect(task1.mul(2,2)).toBe(4);
});


test("Test case div", () => {
    expect(task1.div(4,2)).toBe(2);
});

test("Testing div", () => {
    expect(task1.div(2,0)).toBe(undefined);
});
