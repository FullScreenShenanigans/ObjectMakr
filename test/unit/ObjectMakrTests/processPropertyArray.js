define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("leaves Creature is unchanged", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": ["Sammy", 15, 3],
                "Rock": ["Tim", 22, 100]
            };

            //Act
            properties["Starfish"] = objectMaker.processPropertyArray(properties["Starfish"]);

            // Assert
            expect(typeof properties.Creature).to.deep.equal(typeof {});
        });

        it("changes the array to an object representation", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": ["Sammy", 15, 3],
                "Rock": ["Tim", 22, 100]
            };

            //Act
            properties["Starfish"] = objectMaker.processPropertyArray(properties["Starfish"]);

            // Assert
            expect(typeof properties.Starfish).to.deep.equal(typeof {});
        });

        it("leaves Rock is unchanged", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": ["Sammy", 15, 3],
                "Rock": ["Tim", 22, 100]
            };

            //Act
            properties["Starfish"] = objectMaker.processPropertyArray(properties["Starfish"]);

            // Assert
            expect(typeof properties.Rock).to.deep.equal(typeof {});
        });
    };
});