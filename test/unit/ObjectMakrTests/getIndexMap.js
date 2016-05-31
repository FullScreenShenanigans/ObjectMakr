define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the index map", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var indexMap = ["name", "weight", "age"];

            // Assert
            expect(obj.getIndexMap()).to.deep.equal(indexMap);
        });
    };
});