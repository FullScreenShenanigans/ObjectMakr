define(["ObjectMakr"], function (ObjectMakrModule) {
    var ObjectMakr = ObjectMakrModule.ObjectMakr;

    var mocks = {
        /**
         * 
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
                "onMake": "onMake"/*,
                "giveFunctionNames": true*/
            })
        }
    };

    return mocks;
});
