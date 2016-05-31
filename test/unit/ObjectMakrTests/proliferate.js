define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the proliferated object", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var fullProperties = obj.proliferate();

            // Assert
            expect(obj.proliferate()).to.deep.equal(fullProperties);
        });
    };
});