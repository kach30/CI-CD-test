Ext.define('ExecDashboard.view.kpi.KpiModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.kpi',

    requires: [
        'ExecDashboard.model.Kpi',
        'ExecDashboard.store.Kpi'
    ],

    data: {
        // This property is placed in the ViewModel by routing
        // kpiCategory: null
        kpiData: [{
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
        }],
        redemptionPercentage1: '25%',
        redemptionPercentage2: '50%'
    },

    stores: {
        kpiMain: {
            type: 'kpi',
            autoLoad: true,
            filters: {
                property: 'category',
                value: '{kpiCategory}'
            }
        }
    }
});
