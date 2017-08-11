describe("Email_Compose.js", function() {
    it("Check if compose button opens", function() {
       stpo.Dashboard.Email().click();
       ST.component('emailmenu menuitem[iconCls=x-fa fa-edit]').click();
       
       if (ST.panel('emailwindow[title=Compose Message]').expect('visibility').toBe('visible'))
        {
            
            ST.component('emailwindow tool[type=close]');
            ST.wait(5000);
        }
        else
        {
            expect("Email Compose Window").toBe("Doesn't Match");
        }
       
    });
    
    it("should verify compose window components", function() {
    
    stpo.Email.btnCompose().click();
       
       if (ST.panel('emailwindow[title=Compose Message]').expect('visibility').toBe('visible'))
        {
            var vTotext = "test";
            ST.field('emailcompose textfield[name=textfield-1051-inputEl]').setValue(vTotext);
            ST.field('emailcompose textfield[name=textfield-1052-inputEl]').setValue('Manu');
            //stpo.Email.txtEmailSubject().setValue('Hello world');
            ST.wait(5000);
            stpo.Email.btnEmailDiscard().click();
            //stpo.Email.btnEmailSend();
               
        }
        else
        {
            expect("Email Compose Window").toBe("Doesn't Match");
        }
        
    });
    
   
});