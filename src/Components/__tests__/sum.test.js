import { Sum } from "../sum";
test("Should give sum of 2 numbers", () => {
    const result = Sum(3, 4);
    expect(result).toBe(5);
})