define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the processed properties", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            var properties = {
                "Creature": ["Pete", 249, 5],
                "Starfish": ["Sammy", 15, 3],
                "Rock": ["Tim", 22, 100]
            };

            var changedProperties = {
                "Creature": {
                    "name": "Pete",
                    "weight": 249,
                    "age": 5
                },
                "Starfish": {
                    "name": "Sammy",
                    "weight": 15,
                    "age": 3
                },
                "Rock": {
                    "name": "Tim",
                    "weight": 22,
                    "age": 100
                }
            }

            // Act
            obj.processProperties(properties);

            // Assert
            expect(properties).to.deep.equal(changedProperties);
        });
    };
});