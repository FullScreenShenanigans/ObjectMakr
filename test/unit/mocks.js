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
            })
        }
    };

    return mocks;
});
