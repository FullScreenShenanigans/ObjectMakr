define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the properties", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

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
            var newObj = obj.getProperties();

            // Assert
            // expect(newObj).to.deep.equal(properties);
            for(var type in Object.keys(newObj)){
                for(var name in newObj[type]){
                    if(typeof newObj[type][name] === "function"){
                        expect(JSON.stringify(newObj[type][name])).to.deep.equal(JSON.stringify(fullProperties[type][name]))
                    } else{
                        expect(newObj[type][name]).to.deep.equal(fullProperties[type][name]);
                    }
                }
            }
        });
    };
});