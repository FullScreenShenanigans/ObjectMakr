define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the processed property array", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            var properties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": ["Sammy", 15, 3],
                "Rock": ["Tim", 22, 100]
            };

            var changedProperties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": {
                    "name": "Sammy",
                    "weight": 15,
                    "age": 3
                },
                "Rock": ["Tim", 22, 100]
            }

            //Act
            properties["Starfish"] = obj.processPropertyArray(properties["Starfish"]);

            // Assert
            expect(properties).to.deep.equal(changedProperties);
        });
    };
});