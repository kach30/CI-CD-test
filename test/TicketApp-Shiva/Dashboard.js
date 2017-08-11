describe("Dashboard.js", function () {
    var clickedTabId, recordIndex, rowCount;
    beforeAll(function () {
        ST.textField("textfield[name=password]").type(" ");
        ST.button("button[text=Login]").click();
    });

    afterAll(function () {
        ST.wait(5000);
    });

    xit("should click on a My Activity Ticket and get the Id of that", function () {
        ST.grid('[reference="activeTickets"]').rowWith('id', "147").getRecord()
            .and(function (row) {
                clickedTabId = row.data.record.id;
                recordIndex = row.data.recordIndex;
                ST.play([{ type: "dblclick", target: "gridpanel[reference=\"activeTickets\"] => [data-recordindex=\"" + recordIndex + "\"]", detail: 2 }]);
            });
    });

    xit('Should close the opened My Activity Ticket tab ', function () {
        ST.element('tabpanel tab[text=Ticket - ' + clickedTabId + ']=> .x-tab-close-btn').wait(500).click();
    });

    xit('should count rows in grid', function () {
        ST.grid('[reference="activeTickets"]').viewReady()
            .execute(function () {
                return Ext.first('[reference="activeTickets"]').getStore().getCount();
            })
            .and(function (future) {
                rowCount = future.data.executeResult;
                expect(rowCount).toBe(5);
            });
    });

    it('should ensure appropriate filter is applied', function () {
        ST.grid('viewport grid[reference=projects]').viewReady().rowWith('name', 'SDK').visible().and(function (row) {
            row.down('.search').click().wait(1000);
            ST.grid('ticketsearch').viewReady().and(function (grid) {
                grid.rowAt(3).visible().click().and(function (row) {
                //    row.cellAt(2).expect('innerText').toBe('open1');
                ST.wait(1000);
               // row.cellWith('status','open').visible();
                ST.screenshot('filterData');
                expect(1).toBe(2);
                  //  row.wait(3000).cellAt(1).click();
                });
            })
        })


    });
});