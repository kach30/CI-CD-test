describe("check.js", function() {
   it("should pass", function() {
        
       //var commonMethods = require('../../lib/CommonMethods');
       var commonMethods = require('./../lib/CommonMethods');
       debugger;
       require('./lib/LibraryFuncitons');
       var cM = new commonMethods();
       
       
       cM.login('Don','a', 'Login');
       debugger;
     expect(1).toBe(1);
      
    });
    
    afterAll(function(){
        ST.wait(5000);
    });
});