define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns an instance of a class", function () {
            // Arrange
            var objectMaker = mocks.mockObjectMakr();

            function Penguin(){ new Function()}
            Penguin.prototype = new objectMaker.functions["Bird"]();
            Penguin.prototype.constructer = Penguin;
            Penguin.prototype["onMake"] = function(penguin){
                            penguin.name = penguin.name + " the Penguin"
                        };
            var peng = new Penguin();
            peng.name = "John the Penguin";
            peng.weight = 213;
            peng.age = 4;

            // Act
            var actualPenguin = objectMaker.make("Penguin", {"name": "John", "weight": 213, "age": 4});

            // Assert
            for(var type in actualPenguin){
                if(typeof actualPenguin[type] === "function"){
                    expect(JSON.stringify(actualPenguin[type])).to.deep.equal(JSON.stringify(peng[type]))
                } else{
                    expect(actualPenguin[type]).to.deep.equal(peng[type]);
                }
            }
        });
    };
});