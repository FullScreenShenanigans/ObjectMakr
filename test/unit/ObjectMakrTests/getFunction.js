define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the class function", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            function func(){ new Function()}
            func.prototype = new objectMaker.functions["Animal"]();
            func.prototype.constructor = func;

            // Act
            var MammalFunc = objectMaker.getFunction("Mammal");

            // Assert
            expect(JSON.stringify(MammalFunc)).to.deep.equal(JSON.stringify(func));
        });
    };
});