describe("Email_Functional.js", function() {
    it("should verify if email window opens up", function() {
    
    
    stpo.Email.emailwindow();
        
         stpo.Dashboard.Email().click();
        if (stpo.Email.container().expect('visibility').toBe('visible'))
        {
         expect(1).toBe(1);
        }
         else
        {
            expect(1).toBe(2);
        }
        
        ST.wait(3000);
    });
    
    
    it("should verify compose window close button", function() {
    
    stpo.Email.menuitem().click();
    
    
         if (stpo.Email.emailwindow().expect('visibility').not.toBe('visible'))
        {
         expect(1).toBe(1);
        }
         else
        {
            expect(1).toBe(2);
        }
        
        ST.wait(3000);
    });
    
    
    
    
});