define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("proliferates the recipient object", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            var obj1 = {},
                obj2 = {
                    "color": "blue",
                    "length": 5,
                    "weight": 200,
                    "texture": "smooth"
                };

            // Act
            obj.proliferate(obj1, obj2);                

            // Assert
            expect(obj1).to.deep.equal(obj2);
        });
    };
});