/**
* @class stpo.ExDashboard
* @singleton
*/
ST.pageobject.define('ExDashboard', {
    _locators: {
        /**
        * @method tab
        * @member stpo.ExDashboard
        * @return {ST.future.Button}
        */tab: {
            locator: 'tab[iconCls="exec-news-icon"]',
            name: 'tab',
            type: 'button',
            className: 'ST.future.Button'
        },
        /**
        * @method cycle
        * @member stpo.ExDashboard
        * @return {ST.future.Button}
        */cycle: {
            locator: 'cycle[reference="filterButton"]',
            name: 'cycle',
            type: 'button',
            className: 'ST.future.Button'
        }
    }
});