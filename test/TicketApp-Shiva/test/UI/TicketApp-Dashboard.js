describe("TicketApp-SDK", function() {
    var clickedTabId, recordIndex, assigneeName, rowCount = 0,  idArr = [];
    beforeAll(function(){
      //Login
      ST.textField("textfield[name=password]").type(" ",1000);
      ST.button("button[text=Login]").click();
    });
   
  
    it('row count in My Active Tickets grid', function () {
        ST.grid('[reference="activeTickets"]').viewReady()
          .execute(function () {
              return Ext.first('[reference="activeTickets"]').getStore().getCount();   
         })
           .and(function (future) {
             rowCount = future.data.executeResult;
             expect(rowCount).toBe(5);
         });
    });
      
      
    it("click each row on My Active Tab",function(){
        ST.grid("tabpanel grid[title=My Active Tickets]").rowAt(0).click().and(function(){
             for(var i=0;i<rowCount;i++){
                ST.grid("tabpanel grid[title=My Active Tickets]").rowAt(i).click();
                ST.grid('[reference="activeTickets"]').rowAt(i).getRecord()
                  .and(function (row) {
                    idArr.push(row.data.record.id);
                    recordIndex = row.data.recordIndex;
                    ST.play([{ type: "dblclick", target: "gridpanel[reference=\"activeTickets\"] => [data-recordindex=\"" + recordIndex + "\"]", detail: 2 }]);
                });
                if(i<rowCount - 1){
                    ST.component('tabpanel tab[text=Dashboard]').visible().click()
                }
            }
        });
           
           
          
    });
    
    
    it("close all tabs",function(){
          for(var i=rowCount - 1;i>=0;i--){
                ST.element('tabpanel tab[text=Ticket - ' + idArr[i] + ']=> .x-tab-close-btn').wait().click();
            }
    });


  it("Changed Active Ticket assignee to other user",function(){
        //Click on row 0
        ST.grid('[reference="activeTickets"]').rowWith('id', "177").getRecord()
            .and(function (row) {
                clickedTabId = row.data.record.id;
                recordIndex = row.data.recordIndex;
                ST.play([{ type: "dblclick", target: "gridpanel[reference=\"activeTickets\"] => [data-recordindex=\"" + recordIndex + "\"]", detail: 2 }]);
            });
       
        //Change assignee to Alex
        ST.comboBox('[fieldLabel=\"Assignee\"]').setValue().wait(500);
        ST.comboBox('[fieldLabel=\"Assignee\"]').type("Alex");
        ST.component("combobox[fieldLabel=\"Assignee\"] boundlist => [data-recordindex=\"1\"]").click();
        //Press save
        ST.button("button[text=Save]").click();
        ST.panel('toast[title=Save]').visible();
        ST.panel('toast[title=Save]').textLike('Ticket saved successfully');
  });
   
   
    it('Should close the opened My Activity Ticket tab ', function () {
        ST.wait(5000);
        ST.element('tabpanel tab[text=Ticket - ' + clickedTabId + ']=> .x-tab-close-btn').wait().click();
        ST.wait(5000);

    });
    
   
    it("check changed user id in assignee list / Filter Tickets by User",function(){
        ST.grid('grid[title=Projects]').wait(1000).rowWith('name','SDK').cellAt(1).click();
        // 7. Search by user "Alex"
        ST.comboBox('[fieldLabel=\"User\"]').setValue().wait(500);
        ST.comboBox('[fieldLabel=\"User\"]').type("Alex");
        ST.component("combobox[fieldLabel=\"User\"] boundlist => [data-recordindex=\"1\"]").click();
        ST.grid('tabpanel ticketsearch#project_1').wait(1000).rowWith('id',clickedTabId).cellAt(0).click();
        ST.grid('tabpanel ticketsearch#project_1').wait(1000).rowWith('id',clickedTabId).getRecord()
            .and(function (row) {
                expect(row.data.record.assignee.name).toBe("Alex");
                ST.element('tabpanel tab[text=Search - SDK]=> .x-tab-close-btn').wait().click();
            });
            
    });

});