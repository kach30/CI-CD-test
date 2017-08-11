// This is a sample test case for ticket details component.
describe("Login", function() {
    beforeAll(function(){
        var user = Ext.create('Ticket.model.User',{
            data: [{
                id:1,
                name:"Don",
                organizationId:1,
                projectId:1
            },{
                id:2,
                name:"Alex",
                organizationId:1,
                projectId:1
            }]
        });
        var project = Ext.create('Ticket.model.Project',{
            id:1,
            leadId:1,
            name:"SDK",
            organizationId:1,
            users: user
        });
        var rec = Ext.create('Ticket.model.Ticket',{
            assigneeId:1,
            created:"Wed May 17 2017 20:32:19 GMT+0530 (India Standard Time)",
            creatorId:6,
            description:"Dynamicus vel legentis quarta saepius facit in iis elit congue tempor dolore delenit commodo at fiant euismod feugiat enim illum vel non dignissim option enim anteposuerit liber. Est mazim dolore vel illum mutationem doming facilisis qui est vero sollemnes esse etiam dignissim clari eu aliquam feugait sequitur ad accumsan. Consuetudium illum Duis delenit quis in seacula nisl feugiat luptatum facilisis tation ut in dolore et per Eodem Ut decima notare parum.↵↵Nobis est accumsan facilisis luptatum id legunt notare dolor nisl eleifend aliquam. Nobis at eorum vel typi qui sollemnes nonummy feugiat autem quam Duis quis in in dolore claram ii elit gothica minim te in per vel dynamicus euismod clari nisl exerci delenit. Ea non decima Investigationes me sollemnes Eodem enim est in dignissim mazim vel delenit quarta nostrud in aliquam mutationem amet nobis luptatum euismod fiant ex. Feugait ipsum anteposuerit congue ipsum dolore typi ut fiant feugait te parum.",
            id:64,
            modified:"Fri May 19 2017 15:49:19 GMT+0530 (India Standard Time)",
            projectId:1,
            status:2,
            statusName:"Open",
            title:"Possim soluta nisl ex volutpat possim est legere.",
            project: project
        });
        var ticketVm = Ext.create('Ticket.view.ticket.DetailModel',{
                data: {
                    theTicket: rec,
                }
        });
        var ticket = Ext.create('Ticket.view.ticket.Detail',{
            viewModel: ticketVm,
            renderTo:Ext.getBody()
        });
    });
    afterAll(function(){
        ST.wait(10000);
    });
    
    it("should type in title textfield", function() {
        ST.textField('[fieldLabel=Title]').setValue('Hello');
    });
    it("should select Assignee from assignee combobox", function() {
        ST.comboBox('[fieldLabel=Assignee]').value('Alex');
    });
    xit("should select status from status combobox", function() {
        //ST.textField('[fieldLabel=Title]').setValue('Hello');
    });
    xit("should click on save button", function() {
        //ST.textField('[fieldLabel=Title]').setValue('Hello');
    });
});