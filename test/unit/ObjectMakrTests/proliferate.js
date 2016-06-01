define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("copies into the recipient object", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var obj1 = {},
                obj2 = {
                    "color": "blue",
                    "length": 5,
                    "weight": 200,
                    "texture": "smooth"
                };

            // Act
            objectMaker.proliferate(obj1, obj2);                

            // Assert
            expect(obj1).to.deep.equal(obj2);
        });
    };
});