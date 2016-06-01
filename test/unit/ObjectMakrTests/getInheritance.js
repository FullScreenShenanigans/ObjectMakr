define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the inheritance", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

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
            var newObj = obj.getInheritance();

            // Assert
            expect(newObj).to.deep.equal(inheritance);
        });
    };
});