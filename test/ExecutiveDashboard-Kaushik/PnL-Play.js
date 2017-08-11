describe("PnL-Play", function() {
    it("should pass", function() {
    ST.play([
        { type: "tap", target: "tab[text=\"Profit & Loss\"]", x: 104, y: 40 },
        { type: "tap", target: "button[reference=\"quartersButton\"]", x: 130, y: 15 },
        { type: "click", target: "button[reference=\"quartersButton\"] menu > menucheckitem[text=\"Quarter 2, 2010\"]", detail: 1 },
        { type: "tap", target: "button[reference=\"regionsButton\"]", x: 135, y: 15 },
        { type: "tap", target: "button[text=\"Region\"]", x: 135, y: 15 },
        { type: "tap", target: "button[reference=\"regionsButton\"] menu > menucheckitem[text=\"Asia\"]", x: 78, y: 30 },
        { type: "tap", target: "app-main", x: 771, y: 24 },
        { type: "tap", target: "tab[iconCls=\"exec-pl-icon\"]", x: 100, y: 42 }
    ]);
   
        expect(1).toBe(1);
    });
});