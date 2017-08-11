describe("Dashboard", function() {
    
    it("Should verify Dashboard Click", function() {
       if (stpo.Dashboard.Dashboard().expect('visibility').toBe('visible'))
       {
            stpo.Dashboard.Dasboard().click();
        }
        else
        {
            expect("Dashboard Content").toBe("Doesn't Match");
        }
    });    
    
    it("Should verify Email Click", function() {
        if (stpo.Dashboard.Email().expect('visibility').toBe('visible'))
        {
            stpo.Dashboard.Email().click();
        }
        else
        {
            expect("Email Content").toBe("Doesn't Match");
        }
        
    });    
    
    it("Should verify Profile Click", function() {
        
        if (stpo.Dashboard.Profile().expect('visibility').toBe('visible'))
        {
            stpo.Dashboard.Profile().click();
        }
        else
        {
            expect("Profile Content").toBe("Doesn't Match");
        }
        
    });    
    
    it("Should verify Search Results Click", function() {
        if (stpo.Dashboard.SearchResults().expect('visibility').toBe('visible'))
        {
            stpo.Dashboard.SearchResults().click();
        }
        else
        {
            expect("Search Result Content").toBe("Doesn't Match");
        }
        
    });    
    
    it("Should verify FAQ Click", function() {
        if (stpo.Dashboard.FAQ().expect('visibility').toBe('visible'))
        {
            stpo.Dashboard.FAQ().click();
        }
        else
        {
            expect("FAQ Content").toBe("Doesn't Match");
        }
    });    
  
  
  it("Should verify Pages Click", function() {
        if (stpo.Dashboard.Pages().expect('visibility').toBe('visible'))
        {
            stpo.Dashboard.Pages().click();
            expect(1).toBe(1);
        }
        else
        {
            expect("Pages Content").toBe("Doesn't Match");
        }
    });    
  
    
    it("Should verify Widgets Click", function() {
        if (stpo.Dashboard.Widgets().expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Widgets Content").toBe("Doesn't Match");
        }
    });    
  
    
    it("Should verify Forms Click", function() {
        if (stpo.Dashboard.Forms().expect('visibility').toBe('visible'))
        {
            stpo.Dashboard.Forms().click();
        }
        else
        {
            expect("Forms Content").toBe("Doesn't Match");
        }
    });    

    it("Should verify Charts Click", function() {
        if (stpo.Dashboard.Charts().expect('visibility').toBe('visible'))
        {
            stpo.Dashboard.Charts().click();
        }
        else
        {
            expect("Charts Content").toBe("Doesn't Match");
        }
    });    

    
  it("Should verify Search Button Icon", function() {
    
        if (ST.button('toolbar button[iconCls=x-fa fa-search]').expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Serach button icon").toBe("is not visible");
        }
    });


    it("Should verify Envelope Button Icon", function() {
    
        if (ST.button('toolbar button[iconCls=x-fa fa-envelope]').expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Envelope button icon").toBe("is not visible");
        }
    });


    it("Should verify Profile Button Icon", function() {
    
        if (ST.button('toolbar button[iconCls=x-fa fa-th-large]').expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Profile button icon").toBe("is not visible");
        }
    });

    
    it("Should verify Question Button Icon", function() {
    
        if (ST.button('toolbar button[iconCls=x-fa fa-question]').expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Question button icon").toBe("is not visible");
        }
    });
    
    
    it("Should verify network panel visibility", function() {
    
        stpo.Dashboard.Dasboard().click();
        if (stpo.Dashboard.network().expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Network Panel").toBe("is not visible");
        }
    });
    
    
    it("Should verify weather panel visibility", function() {
    
        if (stpo.Dashboard.weather().expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Weather Panel").toBe("is not visible");
        }
    });
    
    it("Should verify TODO List panel visibility", function() {
    
        if (stpo.Dashboard.todo().expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Todo List Panel").toBe("is not visible");
        }
    });
    
    it("Should verify Services  panel visibility", function() {
        if (stpo.Dashboard.services().expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Services Panel").toBe("is not visible");
        }
    });
    
    it("Should verify HDD Usage panel visibility", function() {
    
        if (ST.panel('admindashboard hddusage[iconCls=x-fa fa-database]').expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("HDD Panel").toBe("is not visible");
        }
    });
    
    
    
    it("Should verify Earnings panel visibility", function() {
    
        if (ST.panel('admindashboard earnings[iconCls=x-fa fa-dollar]').expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Earnings Panel").toBe("is not visible");
        }
    });

    
    it("Should verify Sales panel visibility", function() {
        
        if (ST.panel('admindashboard sales[iconCls=x-fa fa-briefcase]').expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Sales Panel").toBe("is not visible");
        }
    });


    
    it("Should verify Top Movies panel visibility", function() {
        
        if (ST.panel('admindashboard topmovies[iconCls=x-fa fa-video-camera]').expect('visibility').toBe('visible'))
        {
            expect(1).toBe(1);
        }
        else
        {
            expect("Movies Panel").toBe("is not visible");
        }
    });

});