define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the function", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            var hasFunc = true;

            // Act
            var newObj = obj.hasFunction("Mammal");

            // Assert
            expect(newObj).to.equal(hasFunc);
        });
    };
});