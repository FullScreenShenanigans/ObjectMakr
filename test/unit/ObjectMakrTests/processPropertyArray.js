define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the property array", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var fullProperties = obj.processPropertyArray();

            // Assert
            expect(obj.processPropertyArray()).to.deep.equal(fullProperties);
        });
    };
});