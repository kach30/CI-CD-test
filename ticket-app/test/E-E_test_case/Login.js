describe("Login", function() {
    it("should login with correct credential", function() {
        var userName = 'Don',
            password = 'a';
        
        ST.textField('textfield[name=username]').setValue(userName);
        ST.textField('textfield[name=password]').setValue(password);
        
        ST.button('button[text=Login]').click().wait(3000)
        .and(function(){
            var userNameComponent = ST.component('component[id=app-header-username]');
            userNameComponent.expect('innerHTML').toContain(userName);
        });
    });
    it("Should select My active ticket 2nd row",function(){
        ST.wait(10000);
        //ST.grid('grid[reference=activeTickets]').selectAt(1);
        ST.grid('[title="My Active Tickets"]').selectAt(1);
        ST.wait(10000);
    })
});