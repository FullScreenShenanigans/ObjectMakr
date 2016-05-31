define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the function", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var hasFunc = true;

            // Assert
            expect(obj.hasFunction("Animal")).to.equal(hasFunc);
        });
    };
});