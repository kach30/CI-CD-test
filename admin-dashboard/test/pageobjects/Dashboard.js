/**
* @class stpo.Dashboard
* @singleton
*/
ST.pageobject.define('Dashboard', {
    _locators: {
        /**
        * @method Dasboard
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */Dasboard: {
            locator: 'treelistitem[text="Dashboard"]',
            name: 'Dasboard',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method Email
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */Email: {
            locator: 'treelistitem[text="Email"]',
            name: 'Email',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method Profile
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */Profile: {
            locator: 'treelistitem[text="Profile"]',
            name: 'Profile',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method SearchResults
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */SearchResults: {
            locator: 'treelistitem[text="Search results"]',
            name: 'SearchResults',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method FAQ
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */FAQ: {
            locator: 'treelistitem[text="FAQ"]',
            name: 'FAQ',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method Pages
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */Pages: {
            locator: 'treelistitem[text="Pages"]',
            name: 'Pages',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method Widgets
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */Widgets: {
            locator: 'treelistitem[text="Widgets"]',
            name: 'Widgets',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method Forms
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */Forms: {
            locator: 'treelistitem[text="Forms"]',
            name: 'Forms',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method Charts
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */Charts: {
            locator: 'treelistitem[text="Charts"]',
            name: 'Charts',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method btnSearchIcon
        * @member stpo.Dashboard
        * @return {ST.future.Button}
        */btnSearchIcon: {
            locator: 'button[iconCls="fa-search"]',
            name: 'btnSearchIcon',
            type: 'button',
            className: 'ST.future.Button'
        },
        /**
        * @method btnEnveloeIcon
        * @member stpo.Dashboard
        * @return {ST.future.Button}
        */btnEnveloeIcon: {
            locator: 'button[iconCls="fa-envelope"]',
            name: 'btnEnveloeIcon',
            type: 'button',
            className: 'ST.future.Button'
        },
        /**
        * @method btnQuestionIcon
        * @member stpo.Dashboard
        * @return {ST.future.Button}
        */btnQuestionIcon: {
            locator: 'button[iconCls="fa-question"]',
            name: 'btnQuestionIcon',
            type: 'button',
            className: 'ST.future.Button'
        },
        /**
        * @method btnProfileIcon
        * @member stpo.Dashboard
        * @return {ST.future.Button}
        */btnProfileIcon: {
            locator: 'button[iconCls="fa-th-large"]',
            name: 'btnProfileIcon',
            type: 'button',
            className: 'ST.future.Button'
        },
        /**
        * @method network
        * @member stpo.Dashboard
        * @return {ST.future.Panel}
        */network: {
            locator: 'network',
            name: 'network',
            type: 'panel',
            className: 'ST.future.Panel'
        },
        /**
        * @method weather
        * @member stpo.Dashboard
        * @return {ST.future.Component}
        */weather: {
            locator: 'weather',
            name: 'weather',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method todo
        * @member stpo.Dashboard
        * @return {ST.future.Panel}
        */todo: {
            locator: 'todo',
            name: 'todo',
            type: 'panel',
            className: 'ST.future.Panel'
        },
        /**
        * @method services
        * @member stpo.Dashboard
        * @return {ST.future.Panel}
        */services: {
            locator: 'services',
            name: 'services',
            type: 'panel',
            className: 'ST.future.Panel'
        }
    }
});