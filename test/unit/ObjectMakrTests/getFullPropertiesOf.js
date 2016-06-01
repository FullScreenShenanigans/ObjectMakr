define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the full properties of", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            var fullProperties = {
                        "name": "",
                        "age": 0,
                        "weight": 0
                    }

            // Act
            var newObj = obj.getFullPropertiesOf("Bird");

            // Assert
            expect(newObj).to.deep.equal(fullProperties);
        });
    };
});