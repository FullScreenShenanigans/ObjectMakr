define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("copies a string", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            // Act
            var madeObject = objectMaker.make(mocks.mockClassName, mocks.mockObjectProperties());

            // Assert
            expect(typeof madeObject.name).to.equal("string");
        });

        it("implements an onMake function", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            // Act
            var madeObject = objectMaker.make(mocks.mockClassName, mocks.mockObjectProperties());

            // Assert
            expect(madeObject.name).to.equal("John the Penguin");
        });

        it("copies a number", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            // Act
            var madeObject = objectMaker.make(mocks.mockClassName, mocks.mockObjectProperties());

            // Assert
            expect(typeof madeObject.weight).to.equal("number");
        });
    };
});