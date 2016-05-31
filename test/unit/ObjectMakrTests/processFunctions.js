define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the processed function", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var fullProperties = obj.processFunctions();

            // Assert
            expect(obj.processFunctions()).to.deep.equal(fullProperties);
        });
    };
});