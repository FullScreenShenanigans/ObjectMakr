define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the function", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var func = function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        };

            // Assert
            expect(obj.getFunction("Animal")).to.deep.equal(func);
        });
    };
});