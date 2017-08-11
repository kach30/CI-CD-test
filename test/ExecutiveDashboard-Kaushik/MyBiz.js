describe("MyBiz Overall page", function () {
    beforeAll(function () {
        var width = window.screen.availWidth,height = window.screen.availHeight;
        ST.setViewportSize(width, height);
        ST.wait(500);
    });
    
   afterAll(function(){
   	ST.wait(5000);
   });
   // KPI page 
     it("should Click KPI Overview", function() {
     	
           ST.component('app-main#app-main-1001 tab[iconCls=exec-kpi-icon]').click().getUrl(function(url){
           expect(url).toContain('kpi');
         });
    });
         
    it("should Click KPI goalsmet", function() {
         ST.button('[reference=\"goalsmet\"]').visible().click().getUrl(function(url){
         expect(url).toContain('goalsmet');
         
         });
    });
        
    it("should Click KPI sales", function() {
        ST.button('[reference=\"sales\"]').visible().click().getUrl(function(url){
           expect(url).toContain('sales');
         
         });
    });
     it("should Click KPI redemption", function() {    
         ST.button('[reference=\"redemption\"]').visible().click().getUrl(function(url){
           expect(url).toContain('redemption');
         
         });
     });   
    it("should Click KPI Clicks", function() {   
         ST.button('[reference=\"clicks\"]').visible().click().getUrl(function(url){
           expect(url).toContain('clicks');
         });
    });
    
    // Performance page
   it("should Click Perf", function() {
   	       ST.component('app-main#app-main-1001 tab[iconCls=exec-quarterly-icon]').click().getUrl(function(url){
           expect(url).toContain('quarterly');
         
        });
    });
         //ST.button('cycle[text=\"AAPL\"]').visible().click();
         //ST.button('cycle[text=\"AAPL\"] menu > menucheckitem[text=\"GOOG\"]').visible().click();
         ST.options.timeout = 9000;
         



it("should Click Profit & Loss", function() {
       ST.component('app-main tab[iconCls=exec-pl-icon]').visible().click().getUrl(function(url){expect(url).toContain('profitloss');
       ST.wait(10000);
      });
    ST.options.timeout = 900;
});
    
        
// News Panel
it("should Click News default", function() {
         ST.component('app-main tab[iconCls=exec-news-icon]').click().getUrl(function(url){
           expect(url).toContain('news/all');
      
      });
});

//News Forum    
    it("should Click News-Forum", function() {
ST.button('cycle[reference=\"filterButton\"]').click(132, 16);
ST.button('cycle[reference=\"filterButton\"] menu > menucheckitem[text=\"Forum\"]')
         .click().getUrl(function(url){
            expect(url).toContain('news/forum');
            ST.wait(300);
         });
    });     


//News-news     
     it("should Click News-News", function() {
ST.button('cycle[reference=\"filterButton\"]').click(132, 16);
ST.button('cycle[reference=\"filterButton\"] menu > menucheckitem[text=\"News\"]')
         .click().getUrl(function(url){
            expect(url).toContain('news/news');
            ST.wait(300);
         });
    });
    

 //All posts   
 it("should Click News-All Posts", function() {
 ST.button('cycle[reference=\"filterButton\"]').click(132, 16);
 ST.button('cycle[reference=\"filterButton\"] menu > menucheckitem[text=\"All Posts\"]')
         .click().getUrl(function(url){
            expect(url).toContain('news/all');
            ST.wait(1000);
         });
    });
    
    //var count = ST.grid('news').getCount();
 
  it("should Expand 5 news panels", function() {  
  	 ST.wait(2000);
   // for (index = 0; index <= 5; index++)
    //{
    ST.grid('news').viewReady().visible().wait(2000).rowAt(0).visible();
    //ST.grid('news').viewReady().rowAt(0).visible().wait(2000).down('.expand').click();
    //}
   
   ST.wait(2000);
  });
  
  
  xit("should collapse 5 news panels", function() {   
    /*for (index = 0; index <= 5; index++)
    {
    ST.grid('news').viewReady().rowAt(index).down('.collapse').click();
    }*/
    
  ST.wait(2000);
  });
  
});   