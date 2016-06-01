define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns the functions", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            /*function Animal(){};
            function Bird(){};
            function Penguin(){};
            function Mammal(){};
            function Dog(){};*/
            var functions = {
                "Animal": new Function(),
                "Bird": new Function(),
                "Penguin": new Function(),
                "Mammal": new Function(),
                "Dog": new Function()
                };
            functions["Animal"].prototype = new Object();
            functions["Animal"].prototype.constructer = functions["Animal"];
            functions["Animal"].prototype["name"] = "";
            functions["Animal"].prototype["weight"] = 0;
            functions["Animal"].prototype["age"] = 0;
            functions["Bird"].prototype = new functions["Animal"]();
            functions["Bird"].prototype.constructer = functions["Bird"];
            functions["Mammal"].prototype = new functions["Animal"]();
            functions["Mammal"].prototype.constructer = functions["Mammal"];
            functions["Penguin"].prototype = new functions["Bird"]();
            functions["Penguin"].prototype.constructer = functions["Penguin"];
            functions["Penguin"].prototype["onMake"] = function(penguin){
                            penguin.name = penguin.name + " the Penguin"
                        }
            functions["Dog"].prototype = new functions["Mammal"]();
            functions["Dog"].prototype.constructer = functions["Dog"];
            functions["Dog"].prototype["onMake"] = function(dog){
                            dog.name = dog.name + " the Fluffy Dog"
                        }

            // Act
            var newObj = obj.getFunctions();

            // Assert
            // expect(newObj).to.deep.equal(functions);
            for(var type in newObj){
                if(typeof newObj[type] === "function"){
                    expect(JSON.stringify(newObj[type])).to.deep.equal(JSON.stringify(functions[type]));
                } else{
                    expect(newObj[type]).to.deep.equal(functions[type]);   
                }
            }
        });
    };
});