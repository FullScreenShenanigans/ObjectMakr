define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the making", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            // Act
            var newObj = {
                "name": "John",
                "weight": 213,
                "age": 4,
                "onMake": function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        }
            };

            // Assert
            expect(obj.make("Animal", {"name": "John", "weight": 213, "age": 4})).to.deep.equal(newObj);
        });
    };
});