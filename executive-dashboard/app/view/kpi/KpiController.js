Ext.define('ExecDashboard.view.kpi.KpiController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kpi',

    init: function (view) {
        // We provide the updater for the activeState config of our View.
        view.updateActiveState = this.updateActiveState.bind(this);
    },

    onToggleKpi: function(button) {
        if (button.pressed) {
            var view = this.getView();
            view.setActiveState(button.filter);
        }
    },

    updateActiveState: function (activeState) {
        var refs = this.getReferences();
        var viewModel = this.getViewModel();

        refs[activeState].setPressed(true);
        viewModel.set('kpiCategory', activeState);

        this.fireEvent('changeroute', this, 'kpi/' + activeState);
    },
    onClicksClick: function (btn) {
        var me = this,
            vm = me.getViewModel(),
            inStoreHtml = me.lookupReference('inStoreLabel'),
            onLineHtml = me.lookupReference('onLineLabel'),
            sampleData = [{
                description: 'Campaigns',
                statistic: 10
            },{
                description: 'Opportunities',
                statistic: '20,560'
            },{
                description: 'Closed Won',
                statistic: '10,000'
            },{
                description: 'Total Sales',
                statistic: '$90,200'
            },{
                description: 'Goals Met',
                statistic: '71%'
            }];
        vm.set({
            kpiData : sampleData
        });
        inStoreHtml.setHtml('<span>IN STORE</span><span>1,024</span>');
        onLineHtml.setHtml('<span>ONLI</span><span>00,678</span>');
    },
    onWonClicks: function (btn) {
        var me = this,
            vm = me.getViewModel(),
            inStoreHtml = me.lookupReference('inStoreLabel'),
            onLineHtml = me.lookupReference('onLineLabel'),
            sampleData = [{
                description: 'Campaigns',
                statistic: 30
            },{
                description: 'Opportunities',
                statistic: '10,560'
            },{
                description: 'Closed Won',
                statistic: '40,000'
            },{
                description: 'Total Sales',
                statistic: '$60,100'
            },{
                description: 'Goals Met',
                statistic: '11%'
            }];
        vm.set({
            kpiData : sampleData
        });
        inStoreHtml.setHtml('<span>IN STORE</span><span>2,250</span>');
        onLineHtml.setHtml('<span>ONLINE</span><span>40,348</span>');
    },
    onSalesClick: function (btn) {
        var me = this,
            vm = me.getViewModel(),
            inStoreHtml = me.lookupReference('inStoreLabel'),
            onLineHtml = me.lookupReference('onLineLabel'),
            sampleData = [{
                description: 'Campaigns',
                statistic: 68
            },{
                description: 'Opportunities',
                statistic: '34,5346'
            },{
                description: 'Closed Won',
                statistic: '768,034'
            },{
                description: 'Total Sales',
                statistic: '$345,100'
            },{
                description: 'Goals Met',
                statistic: '64%'
            }];
        vm.set({
            kpiData : sampleData
        });
        inStoreHtml.setHtml('<span>IN STORE</span><span>55,50</span>');
        onLineHtml.setHtml('<span>ONLINE</span><span>10,111</span>');
    },
    onGoalsMetClick: function (btn) {
        var me = this,
            vm = me.getViewModel(),
            inStoreHtml = me.lookupReference('inStoreLabel'),
            onLineHtml = me.lookupReference('onLineLabel'),
            sampleData = [{
                description: 'Campaigns',
                statistic: 50
            },{
                description: 'Opportunities',
                statistic: '10,420'
            },{
                description: 'Closed Won',
                statistic: '20,300'
            },{
                description: 'Total Sales',
                statistic: '$6,120'
            },{
                description: 'Goals Met',
                statistic: '91%'
            }];
        vm.set({
            kpiData : sampleData
        });
        inStoreHtml.setHtml('<span>IN STORE</span><span>9,450</span>');
        onLineHtml.setHtml('<span>ONLINE</span><span>66,998</span>');
    }
});
