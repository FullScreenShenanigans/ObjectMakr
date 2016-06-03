define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("has three functions", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var inheritance = {
                Organism: {
                    Animal: {},
                    Plant: {}
                }
            };

            // Act
            objectMaker.functions = {};
            objectMaker.processFunctions(inheritance, Object, "Object");
            var actualMapping = objectMaker.functions;

            // Assert
            expect(Object.keys(actualMapping).length).to.equal(3);
        });
        
        it("first object is a function", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var inheritance = {
                Organism: {
                    Animal: {},
                    Plant: {}
                }
            };

            // Act
            objectMaker.functions = {};
            objectMaker.processFunctions(inheritance, Object, "Object");
            var actualMapping = objectMaker.functions;

            // Assert
            expect(typeof actualMapping[Object.keys(actualMapping)[0]]).to.equal(typeof function(){});
        });
        
        it("second object is a function", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var inheritance = {
                Organism: {
                    Animal: {},
                    Plant: {}
                }
            };

            // Act
            objectMaker.functions = {};
            objectMaker.processFunctions(inheritance, Object, "Object");
            var actualMapping = objectMaker.functions;

            // Assert
            expect(typeof actualMapping[Object.keys(actualMapping)[1]]).to.equal(typeof function(){});
        });
        
        it("third object is a function", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var inheritance = {
                Organism: {
                    Animal: {},
                    Plant: {}
                }
            };

            // Act
            objectMaker.functions = {};
            objectMaker.processFunctions(inheritance, Object, "Object");
            var actualMapping = objectMaker.functions;

            // Assert
            expect(typeof actualMapping[Object.keys(actualMapping)[2]]).to.equal(typeof function(){});
        });
    };
});