define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the inheritance", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
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

            // Assert
            expect(obj.getInheritance()).to.deep.equal(inheritance);
        });
    };
});