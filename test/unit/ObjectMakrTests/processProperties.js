define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the processed properties", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var properties = obj.processProperties();

            // Assert
            expect(obj.processProperties()).to.deep.equal(properties);
        });
    };
});