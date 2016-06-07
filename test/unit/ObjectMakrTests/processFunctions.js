define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("processes the correct number of functions", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var inheritance = mocks.mockInheritance();

            // Act
            objectMaker.functions = {};
            objectMaker.processFunctions(inheritance, Object, "Object");
            var actualMapping = objectMaker.functions;

            // Assert
            expect(Object.keys(actualMapping).length).to.equal(3);
        });

        it("creates constructor type mappings", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            var inheritance = mocks.mockInheritance();

            // Act
            objectMaker.functions = {};
            objectMaker.processFunctions(inheritance, Object, "Object");
            var actualMapping = objectMaker.functions;

            // Assert
            expect(typeof actualMapping[Object.keys(actualMapping)[0]]).to.equal("function");
        });
    };
});