describe("NewContact", function() {
    it("should display new contact form", function() {
        ST.wait(10000);
        ST.button('contact-list button#addContactButton')
            .click();
        ST.textField('contact-form#contact-form textfield[name=firstName]').visible();
    });
    xit("should allow to upload image upload on click of profile image icon", function() {
        //  on hold, don't how to pick a file from specified location 
        //  using file upload in sencha test
        expect(1).toBe(1);
    });
    it("should save new contact information on save click", function() {
        ST.wait(5000);
        var fName = 'Aapna',
            mName = 'Vyas',
            lName = 'Patel',
            oldRowCount,
            newRowCount,
            grid = ST.grid('contact-list');
        // Count grid row before saving new contact item
        grid.viewReady()
         .execute(function () {
              return Ext.first('contact-list').getStore().getCount();    
         })
         .and(function (future) {
             oldRowCount = future.data.executeResult;
        });
        ST.button('contact-list button#addContactButton')
            .click()
            .wait(3000);
        ST.textField('textfield[name=firstName]').setValue(fName);
        ST.textField('textfield[name=middleName]').setValue(mName);
        ST.textField('textfield[name=lastName]').setValue(lName);
        ST.button('button#saveContactButton')
            .click().wait(5000);
        var nameFromDetailsView = ST.panel('contact-view[reference=contact-view]=> .contact-full-name');
        nameFromDetailsView.expect('innerHTML').toContain(fName);
        // Count grid row after saving new contact item
        grid.viewReady()
        .execute(function () {
            return Ext.first('contact-list').getStore().getCount();
        })
        .and(function (future) {
            newRowCount = future.data.executeResult;
            //  Compare grid row count before and after adding new contact
            expect(oldRowCount+1).toEqual(newRowCount);
        });
    });
    it("should not allow spacial chatacters in name", function() {
        var fName = '@@@',
            mName = '###',
            lName = '%%%',
            txtFirstName = ST.textField('textfield[name=firstName]'),
            txtMiddleName = ST.textField('textfield[name=middleName]'),
            txtLastName = ST.textField('textfield[name=lastName]');
        ST.button('contact-list button#addContactButton')
            .click()
            .wait(3000); 
        txtFirstName.setValue(fName)
        .get('id,value').and(function(){
            expect(this.future.data.value).not.toBe(fName);
        });
        txtMiddleName.setValue(mName)
        .get('id,value').and(function(){
            expect(this.future.data.value).not.toBe(mName);
        });
        txtLastName.setValue(lName)
        .get('id,value').and(function(){
            expect(this.future.data.value).not.toBe(lName);
        });
    });
    it("should not allow spacial chatacters in prefix", function() {
        var samplePrefix = '@@@',
            txtPrefix = ST.textField('textfield[name=prefix]');
        ST.button('contact-list button#addContactButton')
            .click()
            .wait(3000);
        txtPrefix.setValue(samplePrefix)
        .get('id,value').and(function(){
            expect(this.future.data.value).not.toBe(samplePrefix);
        });
    });
    it("should not allow chatacters in pincode", function() {
        ST.wait(5000);
        var grid = ST.grid('contact-list'),
            samplePincode = '@@@',
            txtPincode;
        grid.selectAt(0).wait(5000);
        ST.button('button#editContactButton')
        .click().wait(3000);
        
        txtPincode = ST.textField('textfield[name=pincode]');
        txtPincode.setValue(samplePincode).wait(4000)
        .get('id,value').and(function(){
            expect(this.future.data.value).not.toBe(samplePincode);
        });
    });
    xit("should add field for phone and fax", function() {
        expect(1).toBe(1);
    });
    xit("should delete phone and fax number", function() {
        expect(1).toBe(1);
    });
    xit("should add field for Email", function() {
        expect(1).toBe(1);
    });
    xit("should delete Email", function() {
        expect(1).toBe(1);
    });
    xit("should add field for web page", function() {
        expect(1).toBe(1);
    });
    xit("should delete web pages", function() {
        expect(1).toBe(1);
    });
    xit("should add field for important dates", function() {
        expect(1).toBe(1);
    });
    xit("should delete important dates", function() {
        expect(1).toBe(1);
    });
    xit("should not allow blank space in textfield as first character", function() {
        expect(1).toBe(1);
    });
    xit("should not allow invalid image format to upload", function() {
        expect(1).toBe(1);
    });
    xit("should allow to add webpage without http://www, https://www or www", function() {
        expect(1).toBe(1);
    });
});