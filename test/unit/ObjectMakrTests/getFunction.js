define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the function", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            function func(){ new Function()}
            func.prototype = new obj.functions["Animal"]();
            func.prototype.constructor = func;

            // Act
            var animalFunc = obj.getFunction("Mammal");

            // Assert
            expect(JSON.stringify(animalFunc)).to.deep.equal(JSON.stringify(func));
        });
    };
});