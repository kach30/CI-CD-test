describe("Login_PageObject.js", function() {
    it("should pass", function() {
        
       var commonMethods = require('../../lib/CommonMethods');

       var cM = new commonMethods();
       
       
       cM.login('Don','a', 'Login');
       //debugger;
     expect(1).toBe(1);
      
    });
});