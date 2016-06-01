define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the full properties of a specific class", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var fullProperties = {
                        "name": "",
                        "age": 0,
                        "weight": 0
                    }

            // Act
            var actualProperties = objectMaker.getFullPropertiesOf("Bird");

            // Assert
            expect(actualProperties).to.deep.equal(fullProperties);
        });
    };
});