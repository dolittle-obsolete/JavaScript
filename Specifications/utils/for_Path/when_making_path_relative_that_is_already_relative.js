describe("when making path relative that is already relative", function () {
    var relative = Dolittle.Path.makeRelative("absolute/path.js");

    it("should not do anything", function () {
        expect(relative).toBe("absolute/path.js");
    });
});