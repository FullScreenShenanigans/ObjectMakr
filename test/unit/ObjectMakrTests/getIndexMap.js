define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the index map", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            var indexMap = ["name", "weight", "age"];

            // Act
            var newObj = obj.getIndexMap();

            // Assert
            expect(newObj).to.deep.equal(indexMap);
        });
    };
});