describe("Inbox.js", function () {
    beforeAll(function () {
        Ext.application({
            name: 'Sencha Test',
            launch: function () {
                Ext.create('Admin.view.phone.email.Compose', {
                    fullscreen: true
                });
            }
        });
    });

    it("should pass", function () {
        expect(1).toBe(1);
    });

    afterAll(function () {
        ST.wait(50000);
    });
});