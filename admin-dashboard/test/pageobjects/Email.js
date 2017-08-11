/**
* @class stpo.Email
* @singleton
*/
ST.pageobject.define('Email', {
    _locators: {
        /**
        * @method btnCompose
        * @member stpo.Email
        * @return {ST.future.Component}
        */btnCompose: {
            locator: 'menuitem[text="Compose"]',
            name: 'btnCompose',
            type: 'component',
            className: 'ST.future.Component'
        },
        /**
        * @method txtEmailTo
        * @member stpo.Email
        * @return {ST.future.TextField}
        */txtEmailTo: {
            locator: 'textfield[fieldLabel="To"]',
            name: 'txtEmailTo',
            type: 'textField',
            className: 'ST.future.TextField'
        },
        /**
        * @method txtEmailSubject
        * @member stpo.Email
        * @return {ST.future.TextField}
        */txtEmailSubject: {
            locator: 'textfield[fieldLabel="Subject"]',
            name: 'txtEmailSubject',
            type: 'textField',
            className: 'ST.future.TextField'
        },
        /**
        * @method btnEmailDiscard
        * @member stpo.Email
        * @return {ST.future.Button}
        */btnEmailDiscard: {
            locator: 'button[text="Discard"]',
            name: 'btnEmailDiscard',
            type: 'button',
            className: 'ST.future.Button'
        },
        /**
        * @method btnEmailSend
        * @member stpo.Email
        * @return {ST.future.Button}
        */btnEmailSend: {
            locator: 'button[text="Send"]',
            name: 'btnEmailSend',
            type: 'button',
            className: 'ST.future.Button'
        }
    }
});