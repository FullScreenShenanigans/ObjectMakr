define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("Creature is of type object", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": ["Sammy", 15, 3],
                "Rock": ["Tim", 22, 100]
            };

            // Act
            objectMaker.processProperties(properties);

            // Assert
            expect(typeof properties.Creature).to.equal(typeof {});
        });

        it("Starfish is of type object", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": ["Sammy", 15, 3],
                "Rock": ["Tim", 22, 100]
            };

            // Act
            objectMaker.processProperties(properties);

            // Assert
            expect(typeof properties.Starfish).to.equal(typeof {});
        });

        it("Rock is of type object", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": ["Sammy", 15, 3],
                "Rock": ["Tim", 22, 100]
            };

            // Act
            objectMaker.processProperties(properties);

            // Assert
            expect(typeof properties.Rock).to.equal(typeof {});
        });
    };
});