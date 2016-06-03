define(["ObjectMakr"], function (ObjectMakrModule) {
    var ObjectMakr = ObjectMakrModule.ObjectMakr;
    var expect = require("chai").expect;

    var mocks = {
        /**
         * Returns an instance of ObjectMakr.
         */
        mockObjectMakr: function (settings) {
            return new ObjectMakr(settings = {
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
        mockClassExample: "Penguin"
    };

    return mocks;
});
