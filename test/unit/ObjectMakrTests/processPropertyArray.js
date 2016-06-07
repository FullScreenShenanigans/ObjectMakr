define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("leaves Object types unchanged", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = mocks.mockPropertyArray();

            //Act
            properties.Starfish = objectMaker.processPropertyArray(properties.Starfish);

            // Assert
            expect(typeof properties.Creature).to.deep.equal("object");
        });

        it("changes the array to an object representation", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = mocks.mockPropertyArray();

            //Act
            properties.Starfish = objectMaker.processPropertyArray(properties.Starfish);

            // Assert
            expect(typeof properties.Starfish).to.deep.equal("object");
        });
    };
});