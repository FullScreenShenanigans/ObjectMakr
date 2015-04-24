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

describe("make", function () {
    var ObjectMaker = new ObjectMakr({
        "inheritance": inheritance,
        "properties": properties
    });

    it("doesn't throw an error for known objects", function () {
        ObjectMaker.make("Shape");
        ObjectMaker.make("Rectangle");
        ObjectMaker.make("Square");
        ObjectMaker.make("UnitSquare");
    });

    it("throws an error for unknown objects", function () {
        chai.expect(function () {
            ObjectMaker.make("nope")
        }).to.throw("Unknown type given to ObjectMakr: nope");
    });

    it("creates basic objects", function () {
        var shape = ObjectMaker.make("Shape"),
            rectangle = ObjectMaker.make("Rectangle"),
            square = ObjectMaker.make("Square");

        chai.expect(shape.numSides).to.be.undefined;

        chai.expect(rectangle.numSides).to.be.equal(4);
        chai.expect(rectangle.equalSides).to.be.false;

        chai.expect(square.equalSides).to.be.true;
    });
});