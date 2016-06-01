define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the properties of a specific class", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                        "name": "",
                        "weight": 0,
                        "age": 0
                    };

            // Act
            var actualProperties = objectMaker.getPropertiesOf("Animal");

            // Assert
            expect(actualProperties).to.deep.equal(properties);
        });
        
        it("returns undefined", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                        "name": "",
                        "weight": 0,
                        "age": 0
                    };

            // Act
            var actualProperties = objectMaker.getPropertiesOf("Mammal");

            // Assert
            expect(actualProperties).to.deep.equal(undefined);
        });
    };
});