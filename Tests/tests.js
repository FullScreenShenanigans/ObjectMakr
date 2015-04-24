var ObjectMaker,
    inheritance = {
        "Shape": {
            "Rectangle": {
                "Square": {
                    "UnitSquare": {}
                }
            }
        }
    },
    properties = {
        "Rectangle": {
            "numSides": 4,
            "equalSides": false,
            "getArea": function () {
                return this.width * this.height
            }
        },
        "Square": {
            "equalSides": true
        }
    },
    indexMap = ["width", "height"];

describe("constructor", function () {
    it("throws an error when not given inheritance", function () {
        chai.expect(function () {
            new ObjectMakr({});
        }).to.throw("No inheritance mapping given to ObjectMakr.");
    });

    it("initializes inheritance", function () {
        chai.expect(new ObjectMakr({
            "inheritance": inheritance
        }).getInheritance()).to.be.deep.equal(inheritance);
    });

    it("initializes properties", function () {
        chai.expect(new ObjectMakr({
            "inheritance": inheritance,
            "properties": properties
        }).getProperties()).to.be.deep.equal(properties);
    });
});