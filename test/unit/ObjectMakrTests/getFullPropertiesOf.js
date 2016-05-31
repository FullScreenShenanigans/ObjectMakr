define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the full properties of", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var fullProperties = {
                        "name": "",
                        "age": 0,
                        "weight": 0,
                        "onMake": function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        }
                    }

            // Assert
            expect(obj.getFullPropertiesOf("Bird")).to.deep.equal(fullProperties);
        });
    };
});