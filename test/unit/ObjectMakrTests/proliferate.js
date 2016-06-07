define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("copies into the recipient object", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var obj1 = {},
                obj2 = mocks.mockObjectProperties();

            // Act
            objectMaker.proliferate(obj1, obj2);                

            // Assert
            expect(obj1).to.deep.equal(obj2);
        });

        it("leaves properties already in the recipient unchanged", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var obj1 = {
                    height: 5.9
                },
                obj2 = mocks.mockObjectProperties();

            // Act
            objectMaker.proliferate(obj1, obj2);                

            // Assert
            expect(obj1.height).to.equal(5.9);
        });

        it("leaves donor unchanged", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var obj1 = {
                    height: 5.9
                },
                obj2 = mocks.mockObjectProperties();

            // Act
            objectMaker.proliferate(obj1, obj2);                

            // Assert
            expect(obj2).to.deep.equal(mocks.mockObjectProperties());
        });
    };
});