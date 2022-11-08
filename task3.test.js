const task3 = require("./task3");
test("Testing Task3.power", () => {
    expect(task3.pow(2,5)).toBe(32);
});
test("Testing task3.round", () => {
    expect(task3.round(4.3)).toBe(4);
});
test("Testing Task3.ceiling", () => {
    expect(task3.ceiling(3.4)).toBe(4);
});