import {updateOrAddItemToArray} from "../dist";

describe("updateOrAddItemToArray", () => {
    it("should add a new item to an empty array", () => {
        const originalArray = [];
        const newItem = {id: 1, name: "Test Item"};
        const expectedArray = [{id: 1, name: "Test Item"}];

        const result = updateOrAddItemToArray(originalArray, newItem);

        expect(result).toEqual(expectedArray);
    });

    it("should update an existing item in the array", () => {
        const originalArray = [{id: 1, name: "Test Item"}];
        const newItem = {id: 1, name: "Updated Item"};
        const expectedArray = [{id: 1, name: "Updated Item"}];

        const result = updateOrAddItemToArray(originalArray, newItem);

        expect(result).toEqual(expectedArray);
    });

    it("should add a new item to the array if it does not exist", () => {
        const originalArray = [{id: 1, name: "Test Item"}];
        const newItem = {id: 2, name: "New Item"};
        const expectedArray = [{id: 1, name: "Test Item"}, {id: 2, name: "New Item"}];

        const result = updateOrAddItemToArray(originalArray, newItem);

        expect(result).toEqual(expectedArray);
    });
});
