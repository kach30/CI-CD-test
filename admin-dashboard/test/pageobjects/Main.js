/**
* @class stpo.Main
* @singleton
*/
ST.pageobject.define('Main', {
    _locators: {
        /**
        * @method dashboardItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */dashboardItem: {
            locator: 'treelistitem[text="Dashboard"]',
            name: 'dashboardItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method emailItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */emailItem: {
            locator: 'treelistitem[text="Email"]',
            name: 'emailItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method profileItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */profileItem: {
            locator: 'treelistitem[text="Profile"]',
            name: 'profileItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method searchResultsItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */searchResultsItem: {
            locator: 'treelistitem[text="Search results"]',
            name: 'searchResultsItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method faqItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */faqItem: {
            locator: 'treelistitem[text="FAQ"]',
            name: 'faqItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method pagesItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */pagesItem: {
            locator: 'treelistitem[text="Pages"]',
            name: 'pagesItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method widgetsItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */widgetsItem: {
            locator: 'treelistitem[text="Widgets"]',
            name: 'widgetsItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method formsItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */formsItem: {
            locator: 'treelistitem[text="Forms"]',
            name: 'formsItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method chartsItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */chartsItem: {
            locator: 'treelistitem[text="Charts"]',
            name: 'chartsItem',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method composeItem
        * @member stpo.Main
        * @return {ST.future.Component}
        */composeItem: {
            locator: 'menuitem[text="Compose"]',
            name: 'composeItem',
            type: 'component',
            className: 'ST.future.Component'
        }
    }
});