const task1 = require("./task1");
test("Testing Task1.sum", ()=>{
    expect(task1.sum(1,2)).toBe(3);
});
test("Testing Task1.subtract", ()=>{
    expect(task1.subtract(7,4)).toBe(3);
});
test("Testing Task1.multiply", ()=>{
    expect(task1.multiply(12,2)).toBe(24);
});
test("Testing Task1.divide", ()=>{
    expect(task1.divide(16,0)).toBe('Math Error');
});
test("Testing Task1.divide", ()=>{
    expect(task1.divide(16,4)).toBe(4);
});
