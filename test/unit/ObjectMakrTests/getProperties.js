define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the properties", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var properties = {
                    "Animal": {
                        "name": "",
                        "weight": 0,
                        "age": 0
                    },
                    "Penguin": {
                        "onMake": function(penguin){
                            penguin.name = penguin.name + " the Penguin"
                        }
                    },
                    "Dog": {
                        "onMake": function(dog){
                            dog.name = dog.name + " the Fluffy Dog"
                        }
                    }
                };

            // Act
            var actualProperties = objectMaker.getProperties();

            // Assert
            for(var type in actualProperties){
                for(var name in actualProperties[type]){
                    if(typeof actualProperties[type][name] === "function"){
                        expect(JSON.stringify(actualProperties[type][name])).to.deep.equal(JSON.stringify(properties[type][name]))
                    } else{
                        expect(actualProperties[type][name]).to.deep.equal(properties[type][name]);
                    }
                }
            }
        });
    };
});