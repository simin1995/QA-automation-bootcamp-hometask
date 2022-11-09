import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should properly output rectangle perimeter', () => {
    const outputPerimeter = getRectanglePerimeter(7, 5);
    expect(outputPerimeter).toBe(24);
});

test('should properly output rectangle area', () => {
    const outputArea = getRectangleArea(7, 5);
    expect(outputArea).toBe(35);
});

test('should properly output rectangle info', () => {
    console.log = jest.fn ();
    getRectangleInfo (7 , 5);
    expect(console.log.mock.calls[0][0]).toBe(`The perimeter of a rectangle is 24 and the area is 35`);

});
