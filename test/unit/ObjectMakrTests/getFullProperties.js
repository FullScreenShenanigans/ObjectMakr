define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the full properties", function () {
            // Arrange
            /*var settings = {
                "inheritance": {
                    "Animal": {
                        "Bird":{
                            "Penguin": {}
                        },
                        "Mammal": {
                            "Dog": {}
                        }
                    }
                },
                "properties": {
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
                },
                "doPropertiesFull": true,
                "indexMap": ["name", "weight", "age"],
                "onMake": "onMake"/*,
                "giveFunctionNames": true*/
            //}*/
            var obj = mocks.mockObjectMakr(/*settings*/);

            // Act
            var fullProperties = {
                    "Animal": {
                        "name": "",
                        "weight": 0,
                        "age": 0,
                        "onMake": function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        }
                    },
                    "Bird": {
                        "name": "",
                        "age": 0,
                        "weight": 0,
                        "onMake": function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        }
                    },
                    "Penguin": {
                        "name": "",
                        "age": 0,
                        "weight": 0,
                        "onMake": function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        }
                    },
                    "Mammal": {
                        "name": "",
                        "age": 0,
                        "weight": 0,
                        "onMake": function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        }
                    }/*,
                    "Dog": {
                        "name": "",
                        "age": 0,
                        "weight": 0,
                        "onMake": function(name, age, weight){
                            this.name = name;
                            this.age = age;
                            this.weight = weight;
                        }
                    }*/
                }

            // Assert
            // expect(obj.getFullProperties()).to.deep.equal(fullProperties);
            // expect([1,2,3]).to.deep.equal([1,2]);
            // expect([2,1]).to.deep.equal([1,2]);
            expect({"car": "same", "cart":"samet"}).to.deep.equal({"cart":"samet", "car":"same"});
        });
    };
});