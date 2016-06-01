define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the properties of", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            var properties = {
                        "name": "",
                        "weight": 0,
                        "age": 0
                    };

            // Act
            var newObj = obj.getPropertiesOf("Animal");

            // Assert
            expect(newObj).to.deep.equal(properties);
        });
    };
});