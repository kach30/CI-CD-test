describe("focus.js", function () {
    afterAll(function () {
        ST.wait(5000);
    });
    xit("should focus each textfield", function () {
        /*  ST.textField('[reference=textFld1]').type('hi111111').wait(500);
         ST.textField('[reference=textFld2]').type('hi22222').wait(500);
         ST.textField('[reference=textFld3]').type('hi333333').wait(500);
         ST.textField('[reference=textFld4]').type('hi44444').wait(500); */

    });
    it("should focus 1st panel", function () {
        //ST.panel('[title=panel1]').gotoTextField('[reference=textFld1]').type('hi');
        ST.panel('[title=panel1]').visible().execute(function (panel) {
            panel.up('panel').scrollBy(0, 100);
        });
    });

    it("should focus 2nd panel", function () {
        ST.panel('[title=panel2]').visible().execute(function (panel) {
            panel.up('panel').scrollBy(0, 50);
        });
    });

    it("should focus 3rd panel", function () {
        ST.panel('[title=panel3]').visible().execute(function (panel) {
            panel.focus();
        });
    });

    it("should focus 4th panel", function () {
        ST.panel('[title=panel4]').visible().execute(function (panel) {
           // debugger;
            panel.focus(true);
        });
    });
});