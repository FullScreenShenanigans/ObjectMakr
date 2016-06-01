define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the index map", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var indexMap = ["name", "weight", "age"];

            // Act
            var actualMap = objectMaker.getIndexMap();

            // Assert
            expect(actualMap).to.deep.equal(indexMap);
        });
    };
});