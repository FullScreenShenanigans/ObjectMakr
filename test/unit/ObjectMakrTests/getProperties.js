define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the properties", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var properties = {
                    "Animal": {
                        "name": "",
                        "weight": 0,
                        "age": 0,
                        "onMake": function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        }
                    }
                };

            // Assert
            expect(obj.getProperties()).to.deep.equal(properties);
        });
    };
});