define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the full properties", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var fullProperties = {
                    "Animal": {
                        "name": "",
                        "weight": 0,
                        "age": 0
                    },
                    "Bird": {
                        "name": "",
                        "weight": 0,
                        "age": 0
                    },
                    "Penguin": {
                        "name": "",
                        "weight": 0,
                        "age": 0,
                        "onMake": function(penguin){
                            penguin.name = penguin.name + " the Penguin"
                        }
                    },
                    "Mammal": {
                        "name": "",
                        "weight": 0,
                        "age": 0
                    },
                    "Dog": {
                        "name": "",
                        "weight": 0,
                        "age": 0,
                        "onMake": function(dog){
                            dog.name = dog.name + " the Fluffy Dog"
                        }
                    }
                };

            // Act
            var actualProperties = objectMaker.getFullProperties();

            // Assert
            for(var type in actualProperties){
                for(var name in actualProperties[type]){
                    if(typeof actualProperties[type][name] === "function"){
                        expect(JSON.stringify(actualProperties[type][name])).to.deep.equal(JSON.stringify(fullProperties[type][name]))
                    } else{
                        expect(actualProperties[type][name]).to.deep.equal(fullProperties[type][name]);
                    }
                }
            }
        });
    };
});