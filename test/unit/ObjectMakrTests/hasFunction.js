define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the function", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var hasFunc = true;

            // Act
            var actualFunc = objectMaker.hasFunction("Mammal");

            // Assert
            expect(actualFunc).to.equal(hasFunc);
        });
    };
});