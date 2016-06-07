define(["ObjectMakr"], function (ObjectMakrModule) {
    var ObjectMakr = ObjectMakrModule.ObjectMakr;
    var expect = require("chai").expect;

    var mocks = {
        /**
         * @returns instance of ObjectMakr.
         */
        mockObjectMakr: function (settings) {
            return new ObjectMakr(settings || {
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
                },
                "doPropertiesFull": true,
                "indexMap": ["name", "weight", "age"],
                "onMake": "onMake"
            })
        },       
        /**
         * Specific class name for tests to use.
         */
        mockClassName: "Penguin",
        /**
         * @returns an object with characteristic properties
         */
        mockObjectProperties: function () {
            return {
                name: "John",
                weight: 213,
                age: 4
            };
        },
        /**
         * @returns an inheritance outline 
         */
        mockInheritance: function () {
            return {
                Organism: {
                    Animal: {},
                    Plant: {}
                }
            };
        },
        /**
         * @returns an object of property arrays
         */
        mockPropertyArray: function () {
            return {
                Creature: ["Pete", 249, 5],
                Starfish: ["Sammy", 15, 3],
                Rock: ["Tim", 22, 100]
            };
        }
    };

    return mocks;
});
