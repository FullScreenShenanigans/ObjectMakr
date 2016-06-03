define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("object's name is John the Penguin", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            // Act
            var madeObject = objectMaker.make(mocks.mockClassExample, {"name": "John", "weight": 213, "age": 4});

            // Assert
            expect(madeObject.name).to.equal("John the Penguin");
        });
        
        it("object's weight is 213", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            // Act
            var madeObject = objectMaker.make(mocks.mockClassExample, {"name": "John", "weight": 213, "age": 4});

            // Assert
            expect(madeObject.weight).to.equal(213);
        });
        
        it("object's age is 4", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            // Act
            var madeObject = objectMaker.make(mocks.mockClassExample, {"name": "John", "weight": 213, "age": 4});

            // Assert
            expect(madeObject.age).to.equal(4);
        });
    };
});