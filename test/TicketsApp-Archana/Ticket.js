describe("Ticket.js", function() {
     beforeAll(function(){
       ST.wait(1000);
      ST.textField("textfield[name=password]").type(" ",1000);
      ST.wait(1000);
      ST.button("button[text=Login]").click();
   });

    xit("Assign to different user", function() {
    ST.play([
        { type: "tap", target: "textfield[name=\"password\"]", x: 142, y: 10 },
        { type: "type", target: "textfield[name=\"password\"] => input", text: "a" },
        { type: "tap", target: "button[text=\"Login\"]", x: 23, y: 17 },
        { type: "tap", target: "button[text=\"Login\"]", x: 37, y: 10 },
        { type: "tap", target: "gridpanel[reference=\"activeTickets\"] => [data-recordindex=\"0\"]", x: 183, y: 11 },
        { type: "tap", target: "gridpanel[reference=\"activeTickets\"] => [data-recordindex=\"0\"]", x: 183, y: 11 },
        { type: "dblclick", target: "gridpanel[reference=\"activeTickets\"] => [data-recordindex=\"0\"]", detail: 2 },
        { type: "tap", target: "combobox[fieldLabel=\"Assignee\"]", x: 555, y: 11 },
        { type: "tap", target: "combobox[fieldLabel=\"Assignee\"] boundlist => [data-recordindex=\"1\"]", x: 341, y: 14 }
    ]);
    
    
        
    });
    
    it('user name should match',function(){
        ST.element('#app-header-username').click().and(function(){
            ST.textField('window textfield[fieldLabel=Name]').and(function(va){
              debugger;  
            });
            
        });
        
       /* and(function(value){
            debugger;
            console.log(value);
            ST.wait(2000);
        });
*/
    });
});