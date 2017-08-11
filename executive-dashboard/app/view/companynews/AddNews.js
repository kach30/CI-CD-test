Ext.define('ExecDashboard.view.companynews.AddNews',{
    extend: 'Ext.form.Panel',
    xtype: 'executive-dashboard-new-news',

    requires:[
        'ExecDashboard.view.companynews.NewsController'
    ],
    controller: 'news',
    viewModel: {
        data:{
            selectedRec: null
        }
    },

    layout: 'form',
    minWidth: 600,
    minHeight: 400,
    defaultFocus: 'textfield',
    defaults:{
        allowBlank: false
    },
    items:[{
        xtype: 'radiogroup',
        fieldLabel: 'Post Type',
        reference: 'newsType',
        items: [
            { boxLabel: 'News', name: 'rb', inputValue: 'news', checked: true },
            { boxLabel: 'Forum', name: 'rb', inputValue: 'forum'}
        ]
    },{
        xtype: 'textfield',
        reference: 'newsTitle',
        fieldLabel: 'Title'
    },{
        xtype: 'textarea',
        reference: 'newsDetails',
        fieldLabel: 'Details'
    }],
    buttons:[{
        text: 'Save',
        formBind: true,
        handler: 'onSaveClick'
    }]
});