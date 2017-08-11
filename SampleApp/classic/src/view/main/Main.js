/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SampleApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SampleApp.view.main.MainController',
        'SampleApp.view.main.MainModel',
        'SampleApp.view.main.List'
    ],
    activeTab: 3,
    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        /* bind: {
            html: '{loremIpsum}'
        } */
        scrollable:'y',
        layout: {
            type: 'vbox',
            pack:'streth',
            aligh: 'streth'
        },
        defaults:{
            width:300,
            xtype:'form'

        },
        items: [
            /* {
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'button',
                        text: 'Button1',
                        handler: 'firstButtonCLick'
                    },
                    {
                        xtype: 'button',
                        text: 'Button1',
                        handler: 'secondButtonCLick'
                    },
                    {
                        xtype: 'button',
                        text: 'Button1',
                        handler: 'thirdButtonCLick'
                    }
                ]
            }, */
            {
                
                title: 'panel1',
                html: 'Hey I am first panel',
                height: 500,
                items:[
                    {
                        xtype:'textfield',
                        reference:'textFld1'
                    }
                ]
            },
            {
                xtype:'panel',
                title: 'panel2',
                html: 'Hey I am second panel',
                height: 500,
                items:[
                    {
                        xtype:'textfield',
                        reference:'textFld2'
                    }
                ]
            },
            {
                title: 'panel3',
                html: 'Hey I am thrid panel',
                height: 500,
                items:[
                    {
                        xtype:'textfield',
                        reference:'textFld3'
                    }
                ]
            },
            {
                title: 'panel4',
                html: 'Hey I am fourth panel',
                height: 500,
                items:[
                    {
                        xtype:'textfield',
                        reference:'textFld4'
                    }
                ]
            }
        ]
    }]
});
