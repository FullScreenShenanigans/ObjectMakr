define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the inheritance", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var inheritance = {
                    "Animal": {
                        "Bird":{
                            "Penguin": {}
                        },
                        "Mammal": {
                            "Dog": {}
                        }
                    }
                }

            // Act
            var actualInheritance = objectMaker.getInheritance();

            // Assert
            expect(actualInheritance).to.deep.equal(inheritance);
        });
    };
});