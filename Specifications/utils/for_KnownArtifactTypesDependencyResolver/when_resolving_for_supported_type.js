describe("when resolving for supported type", sinon.test(function () {

    var resolver,
        resolvedTypes,
        propertyToResolve,
        namespace,
        getExtendersIn = function (namespace) { return [Test.extender]; };

    beforeEach(function () {
        Dolittle.namespace("Test", { extender: Dolittle.Type.extend(function () { }) });
        namespace = Test.extender._namespace;

        Dolittle.commands.Command = { getExtendersIn: getExtendersIn };

        resolver = new Dolittle.KnownArtifactTypesDependencyResolver();
        propertyToResolve = "commandTypes";
        namespace = {};
        
        resolvedTypes = resolver.resolve(namespace, propertyToResolve);
    });

    it("should resolve types", function () {
        expect(resolvedTypes).toBeDefined();
    })

    it("should have the resolved extender", function () {
        expect(resolvedTypes.extender).toBe(Test.extender);
    })

}));