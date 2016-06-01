define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("makes a function mapping", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var inheritance = {
                "Organism": {
                    "Animal": {},
                    "Plant": {}
                }
            };
            functionsMapping = {
                "Organism": new Function(),
                "Animal": new Function(),
                "Plant": new Function()
            }
            functionsMapping["Organism"].prototype = new Object();
            functionsMapping["Organism"].prototype.constructer = functionsMapping["Organism"];
            functionsMapping["Plant"].prototype = new functionsMapping["Organism"];
            functionsMapping["Plant"].prototype.constructer = functionsMapping["Plant"];
            functionsMapping["Animal"].prototype = new functionsMapping["Organism"];
            functionsMapping["Animal"].prototype.constructer = functionsMapping["Animal"];

            // Act
            objectMaker.processFunctions(inheritance, Object, "Object");
            var actualMapping = objectMaker.functions;

            // Assert
            // expect(newObj).to.deep.equal(processedFunction);
            for(var type in actualMapping){
                if(typeof actualMapping[type] === "function"){
                    expect(JSON.stringify(actualMapping[type])).to.deep.equal(JSON.stringify(functionsMapping[type]));
                } else{
                    expect(actualMapping[type]).to.deep.equal(functionsMapping[type]);   
                }
            }
        });
    };
});