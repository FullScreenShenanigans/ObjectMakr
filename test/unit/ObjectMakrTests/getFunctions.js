define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the functions", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var functions = obj.getFunctions();

            // Assert
            expect(obj.getFunctions()).to.deep.equal(functions);
        });
    };
});