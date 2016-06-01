define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the full properties", function () {
            // Arrange
            var obj = mocks.mockObjectMakr(/*settings*/);

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
            var prop = obj.getFullProperties();

            // Assert
            for(var type in Object.keys(prop)){
                for(var name in prop[type]){
                    if(typeof prop[type][name] === "function"){
                        expect(JSON.stringify(prop[type][name])).to.deep.equal(JSON.stringify(fullProperties[type][name]))
                    } else{
                        expect(prop[type][name]).to.deep.equal(fullProperties[type][name]);
                    }
                }
                //if(prop[name] && typeof prop[name] === "function"){
                //    prop[name] = prop[name].toString();
                //}
                //expect(prop[name]).to.deep.equal(fullProperties[name]);
            }

            //expect(prop).to.deep.equal(fullProperties);
            // expect([1,2,3]).to.deep.equal([1,2]);
            // expect([2,1]).to.deep.equal([1,2]);
            // expect({"car": "same", "cart":"samet"}).to.deep.equal({"cart":"samet", "car":"same"});
        });
    };
});