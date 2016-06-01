define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns an instance of a class", function () {
            // Arrange
            var obj = mocks.mockObjectMakr();

            function Penguin(){ new Function()}
            Penguin.prototype = new obj.functions["Bird"]();
            Penguin.prototype.constructer = Penguin;
            Penguin.prototype["onMake"] = function(penguin){
                            penguin.name = penguin.name + " the Penguin"
                        };
            var newObj = new Penguin();
            newObj.name = "John the Penguin";
            newObj.weight = 213;
            newObj.age = 4;

            // Act
            var madeObj = obj.make("Penguin", {"name": "John", "weight": 213, "age": 4});

            // Assert
            // expect(madeObj).to.deep.equal(newObj);
            for(var type in madeObj){
                if(typeof madeObj[type] === "function"){
                    expect(JSON.stringify(madeObj[type])).to.deep.equal(JSON.stringify(newObj[type]))
                } else{
                    expect(madeObj[type]).to.deep.equal(newObj[type]);
                }
            }
        });
    };
});