describe("when validating without options", function () {
    var someRule = null;

    beforeEach(function () {
        someRule = {
            _name: "someRule",
            create: sinon.mock().withArgs({ options: {} }).once().returns({})
        };
        doLittle.validation.Rule = {
            getExtenders: function () {
                return [someRule];
            }
        };

        doLittle.validation.Validator.create({ someRule: null });
    });

    it("should pass empty options rule creation", function () {
        expect(someRule.create.called).toBe(true);
    });
});