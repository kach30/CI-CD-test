describe("Contact.js", function() {
    var myVal = {
      name: 'Archana'  
    };
    xit("should pass", function() {
        ST.wait(5000);
    ST.play([
        { type: "tap", target: "contact-list[reference=\"contact-list\"] => [data-recordindex=\"0\"]", x: 186, y: 33 },
        { type: "tap", target: "button", x: 917, y: 23 },
        { type: "tap", target: "title[text=\"Delete Confirmation\"]", x: 127, y: 18 },
        { type: "tap", target: "#messagebox-1009-msg", x: 73, y: 13 },
        { type: "tap", target: "[stateId=\"messagebox-1009_header-title\"]", x: 506, y: 286 },
        { type: "mousedown", target: "#messagebox-1009-msg", x: 96, y: 2, buttons: 1, detail: 1 },
        { type: "mouseup", target: "[stateId=\"messagebox-1009_header-title\"]", x: 509, y: 316, detail: 1 },
        { type: "click", target: "[stateId=\"messagebox-1009_header-title\"]", detail: 1 },
        { type: "mousedown", target: "button[itemId=\"no\"]", x: 555, y: 413, buttons: 1, detail: 1 },
        { type: "mouseup", target: "title[text=\"Delete Confirmation\"]", x: 143, y: 14, detail: 1 },
        { type: "click", target: "[stateId=\"messagebox-1009_header-title\"]", detail: 1 }
    ]);
        
    ST.play([
        { type: "tap", target: "contact-list[reference=\"contact-list\"] => [data-recordindex=\"0\"]", x: 166, y: 34 },
        { type: "tap", target: "@button-1049", x: 14, y: 26 },
        { type: "tap", target: "button[text=\"No\"]", x: 42, y: 12 }
    ]);
        
    });
    
    it("should open delete and clcik no", function() {
        ST.wait(5000);
        
        ST.component('contact-list[reference=\"contact-list\"] => [data-recordindex=\"0\"]').click();
        ST.button('[handler=editContact]').click().and(function(){
            ST.textField('contact-form textfield[name=firstName]').expect('value').toBe(myVal.name);
        });
    
  
        
    });
});