describe("Dashboard", function() {
    beforeAll(function() {
        ST.textField("textfield[name=password]").type(" ");
        ST.button("button[text=Login]").click();
    });

    afterAll(function() {
        ST.wait(5000);
    });

    xit('should retrive user entered value in Username field', function() {
        ST.wait(1000);
        ST.field('textfield[name=username]').setValue('');
        ST.wait(1000);
        var uname = 'Don';
        var text1 = ST.field('textfield[name="username"]');
        text1.setValue('Don')
            .get('id,value').and(function() {
                //alert(this.future.data.id);
                // alert(this.future.data.value);
                expect(this.future.data.id).toBeDefined();
                expect(this.future.data.value).toBe('Don');

            });
    });

    xit('Should able to Login', function() {
        ST.field('textfield[name=username]').setValue('');
        ST.wait(1000);
        var uname = 'Don';
        var text1 = ST.field('textfield[name="username"]');
        text1.setValue('Don')
        ST.wait(10000);
        ST.textField("textfield[name=password]").type(" ");
        ST.wait(1000);
        ST.button("button[text=Login]").click();
        //  expect(title).toContain('Ticket');
    });




    it('Should able to search SDK Projects', function() {
        ST.grid('viewport grid[reference=projects]').viewReady().rowWith('name', 'SDK').down('.search').click().getTitle(function(title) {
            //ST.component("//td//div[text()='SDK']//following::td//div[@tabindex='-1']").visible().click().getTitle(function(title){
            expect(title).toContain('Ticket');

        });

    });

    xit('Should able to search Pending Status Tickets', function() {
        ST.comboBox('combobox[reference=statusField]').expand().element('boundlist => [data-recordindex="1"]')
            .click();
        ST.grid('ticketsearch').viewReady()
            .execute(function() {
                var rowcount = Ext.first('ticketsearch').getStore().getCount();
                return rowcount;
            }).and(function(future) {
                filteredRowCount = future.data.executeResult;
                var i;
                for (i = 0; i < filteredRowCount; i++) {
                    ST.grid('ticketsearch').rowAt(i).getRecord().and(function(rec) {
                        var status = rec.data.record.statusName;
                        expect(status).toBe("Pending");
                    });
                }
            });


    });


    it('Should able to search Pending Status Tickets for the User Phil', function() {
        ST.comboBox('[reference=assigneeField]').expand();
        ST.component("combobox[reference=assigneeField] boundlist => [data-recordindex=\"6\"]").click();
        ST.grid('ticketsearch').viewReady().wait(5000) //wait added to load grid data values
            .execute(function() {
                var rc = Ext.first('ticketsearch').getStore().getCount();
                return rc;
            }).and(function(future) {
                fRowCount = future.data.executeResult;
                var i;
                debugger;
                for (i = 0; i < fRowCount; i++) {
                    ST.grid('ticketsearch').rowAt(i).getRecord().and(function(rec) {
                        var name1 = rec.data.record.assignee.name;
                        expect(name1).toBe("Phil");

                    });
                }
            });

    });

    xit('should able to click edit page for first ticket', function() {
        ST.wait(1000);
        //  adding code for click edit button for each row
        ST.wait(1000);
        ST.grid('ticketsearch').viewReady()
            .execute(function() {
                var rowcount = Ext.first('ticketsearch').getStore().getCount();
                return rowcount;
            })
            .and(function(future) {
                filteredRowCount = future.data.executeResult;
                var i;
                for (i = 0; i < filteredRowCount; i++) {
                    ST.wait(1000);
                    ST.grid('ticketsearch').rowAt(i).down('.ticket').click();
                    ST.wait(3000);
                    ST.field('combobox[fieldLabel=Status]').visible().setValue('Closed');
                    ST.element("//li[text()='Closed']").visible().click();
                    ST.button("button[text=Save]").click();
                    ST.wait(3000);
                    ST.button("//span[text()=' Close Tab']").click();
                    ST.wait(3000);
                    // });
                }
            });
    });

    /*  it('should able to change the Assignee', function() {
          ST.wait(1000);
          ST.comboBox('[fieldLabel=\"Assignee\"]').setValue("Ben")
          ST.comboBox('[fieldLabel=\"Assignee\"]').setValue().wait(500);
          ST.comboBox('[fieldLabel=\"Assignee\"]').type("Ben");
          ST.component("combobox[fieldLabel=\"Assignee\"] boundlist => [data-recordindex=\"1\"]").click();
          ST.wait(1000);
          ST.button("button[text=Save]").click();
          ST.panel('toast[title=Save]').visible();
      });

      /* it("should change the status to closed ", function()
      {
       ST.wait(1000);
        ST.element("//li[text()='Closed']").visible().click();
       ST.button("button[text=Save]").click();
                      ST.panel('toast[title=Save]').visible();
                      ST.panel('toast[title=Save]').textLike('Ticket saved successfully');
                      ST.wait(5000);
      });
              */







});
