describe("LoginScreen", function() {
    it("should pass", function() {
        expect(1).toBe(1);
    });
    
   /*  it("Should Load with title Page Login-Ticket App", function() {
         ST.wait(10000);
         ST.navigate('http://examples.sencha.com/extjs/6.0.0/examples/classic/ticket-app/index.html')
     .getTitle(function (title) {
         expect(title).toContain('Ticket');
     });
     });
     
    it("should able Login to APP with valid registred Credentials",function()
     {
             ST.wait(1000);
             ST.field('textfield[name=username]').setValue('');
              ST.wait(10000);
             ST.field("textfield[name=username]").type("Mike",1000)
             
      ST.textField("textfield[name=password]").type(" ",1000);
      ST.wait(1000);
      ST.button("button[text=Login]").click();
     });*/
     
     it(" should navigate to default Account for non registered username",function(){
        ST.wait(1000);
        ST.field('textfield[name=username]').setValue('');
        ST.wait(1000);
       ST.field("textfield[name=username]").type("Lakshmi",10000)
          
      ST.textField("textfield[name=password]").type(" ",10000);
      ST.wait(10000);
      ST.button("button[text=Login]").click(); 
      ST.wait(10000);
      
    //  var Text1=ST.future.Element("//div[@id='app-header-username']").get().text();
     // ST.wait(10000);
      //     var Text1=ST.element("//div[@id='app-header-username']");
        //   ST.wait(10000);
          // var uname='Don';
          //expect(Text1).toBe(uname);
          
          
          
 





});


    
      
     
     
         
    
});