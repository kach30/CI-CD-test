describe("HomePage", function() {
    it("should load application home page", function() {
        ST.wait(4000);
        ST.component('panel container#contact-no-selection')
        .expect('innerHTML')
        .toContain('Select a contact from list');
    });
    it("should search or filter contact when user type in search section", function() {
        ST.wait(5000);  // wait for grid to load
        var grid = ST.grid('contact-list'),
        totalRowCount,
        filterText = 'Aapna',
        filteredRowCount;
        
        grid.viewReady()
         .execute(function () {
              return Ext.first('contact-list').getStore().getCount();    
         })
         .and(function (future) {
             totalRowCount = future.data.executeResult;
        });
        ST.textField('contact-list search-field')
        .type(filterText).and(function(){
            grid.viewReady()
             .execute(function () {
                  return Ext.first('contact-list').getStore().getCount(); 
             })
             .and(function (future) {
                 filteredRowCount = future.data.executeResult;
                 expect(totalRowCount).not.toEqual(filteredRowCount);
                 ST.textField('contact-list search-field=> .x-form-clear-trigger').click();
            });
        });
        ST.wait(1000);
    });
    it("should reset contact list on clearing the search field", function() {
        ST.wait(2000);
        var grid = ST.grid('contact-list'),
        totalRowCount,
        filterText = 'Aapna',
        filteredRowCount;
        // get the row count on filter
        ST.textField('contact-list search-field')
        .type(filterText).and(function(){
            grid.viewReady()
             .execute(function () {
                  return Ext.first('contact-list').getStore().getCount(); 
             })
             .and(function (future) {
                 filteredRowCount = future.data.executeResult;
            });
        });
        
        ST.textField('contact-list search-field=> .x-form-clear-trigger').click();
        // get the row count on clear filter
        grid.viewReady()
         .execute(function () {
              return Ext.first('contact-list').getStore().getCount();    
         })
         .and(function (future) {
             totalRowCount = future.data.executeResult;
             expect(filteredRowCount).not.toEqual(totalRowCount);
        });
    });
    it("should display form to add new contact", function() {
        //  It is to check on click of new button, new contact form is opening or not.
        ST.wait(2000);
        ST.button('contact-list button#addContactButton').click();
        var firstName = ST.textField('textfield[name=firstName]'),
            middleName = ST.textField('textfield[name=middleName]'),
            lastName = ST.textField('textfield[name=lastName]');
        
        firstName.expect('innerHTML').toContain('First Name');
        middleName.expect('innerHTML').toContain('Middle Name');
        lastName.expect('innerHTML').toContain('Last Name');
    });
    it("should display contact details in center panel on click of contact item", function() {
        var grid = ST.grid('contact-list'),
        selectedName,designation;
        
        grid.selectAt(0).wait(2000);
        grid.rowAt(0).getRecord().and(function (row) {
            selectedName = row.data.record.firstName;
            designation = row.data.record.designation;
            //  details view name should be same as left side name
            ST.panel('contact-view[reference=contact-view]=> .contact-full-name')
            .expect('innerHTML').toContain(selectedName);
            
            ST.panel('contact-view[reference=contact-view]=> .contact-organisation')
            .expect('innerHTML').toContain(designation);
        });
    });
    it("should open edit form and modify selected contact details", function() {
        var designationText = 'Body Fitness Trainer',designation,
        grid = ST.grid('contact-list tableview');
        grid.selectAt(0).wait(1000);
        //  Below two line to get contact details should be optimised for performance.
        var nameFromDetailsView = ST.panel('contact-view[reference=contact-view]');
        //var nameFromDetailsView = ST.element('panel contact-view[reference=contact-view //.contact-organisation]');
        
        ST.button('button#editContactButton')
        .click();
        ST.textField('textfield[name=designation]')
        .setValue('');
        ST.textField('textfield[name=designation]')
        .type(designationText);
        
        ST.button('button#saveContactButton')
        .click().wait(3000);
        
        nameFromDetailsView.expect('innerHTML').toContain(designationText);
    });
    it("should display delete confirmation popup message on click of delete icon", function() {
        // This is only to check popup message display on click of delete button
        // here it is not deleting the contact details
        var grid = ST.grid('contact-list tableview'),
            messageBox;
        grid.selectAt(0).wait(1000);
        ST.button('button[handler=deleteContact]')
        .click();
        
        messageBox = ST.panel('messagebox title[text=Delete Confirmation]');
        messageBox.expect('innerHTML').toContain('Delete Confirmation');
        ST.button('[text=No]:last').click().wait(2000);
    });
    it("should delete user info on click of yes button in confirmation message", function() {
        // Comparing first row contact id, before deleting and after deleting
        ST.wait(3000);
        var rowIdToDelete,
        grid = ST.grid('contact-list');
        grid.selectAt(0).wait(2000);
            
        grid.rowAt(0).getRecord().and(function (row) {
            rowIdToDelete = row.data.record.id;
        });
        ST.button('button[handler=deleteContact]')
        .click().wait(1000);
        
        var messageBox = ST.panel('messagebox title[text=Delete Confirmation]');
        messageBox.visible();
        ST.button('[text=Yes]:last').click().wait(3000);
        
        // After delete check first row and compare with previous id
        grid.rowAt(0).getRecord().and(function (row) {
            firstRowId = row.data.record.id;
            expect(firstRowId).not.toBe(rowIdToDelete);
        });
    });
    it("should display new window to import contacts", function() {
        ST.button('contact-list button[handler=importContact]')
        .click().wait(2000);
        var messageBox = ST.panel('file-upload-window title[text=Import Contact]');
        messageBox.expect('innerHTML').toContain('Import Contact');
        ST.panel('file-upload-window tool[type=close]').click().wait(2000);
    });
    xit("should export user contacts in IOS format", function() {
        //Incomplete; Here it is only clicking the IOS format from menu, it is not 
        // verifying the export functionality.
        ST.grid('contact-list tableview')
        .selectAt(0);
        var menuButton = ST.button('contact-view#contact-view button[reference=exportmenuitem]');
        menuButton.click();
        ST.wait(2000);
        menuButton.gotoPanel('component[text=\"IOS Format\"]')
        .focus()
        .click();
        ST.wait(4000);
    });
    xit("should export user contacts in Google or Andriod format", function() {
        //Incomplete; Here it is only clicking the IOS format from menu, it is not 
        // verifying the export functionality.
        ST.grid('contact-list tableview')
        .selectAt(0);
        var menuButton = ST.button('contact-view#contact-view button[reference=exportmenuitem]');
        menuButton.click();
        menuButton.gotoPanel('component[text=\"Google/Android Format\"]')
        .focus()
        .click();
        ST.wait(4000);
    });
    xit("should display user address in google map",function(){
        //Incomplete; Disabling this test case; need help to verify google map opened or not
        //  Select first contact 
        ST.grid('contact-list tableview')
        .selectAt(0).wait(5000);
        // Edit address pincode to display in google map
        ST.button('button#editContactButton')
        .click();
        ST.textField('contact-form textfield[name=pincode]')
        .setValue('560055');
        // Save the changes
        ST.button('button#saveContactButton')
        .click();
        ST.wait(4000);
        
        // Click on google map icon
        //ST.button('panel contact-view[reference=contact-view]').visible();
        //ST.button('panel contact-view[reference=contact-view]').focus().click();
        //ST.wait(3000);
        expect(1).toBe(2);
    });
});