describe("when value to be validated is not a number", function () {
    var exception = null;
    try {
        var validator = Dolittle.validation.greaterThan.create({ options: { value: 3 } });
        validator.validate("Joe");
    } catch (e) {
        exception = e;
        
    }
    it("should throw an exception", function () {
        expect(exception instanceof Dolittle.validation.NotANumber).toBe(true);
    });
});