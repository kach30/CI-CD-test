'use strict';
class CommonMethods {
    login(userNameValue, passwordValue, loginText) {
        var userName, password, userLocator, passwordLocator, text;

        console.log('//hey I am from global');
        if (typeof(userNameValue) === "object") {
            userName = userNameValue.userName;
            userNameLocator = userNameValue.userNameLocator;
            password = userNameValue.password;
            passwordLocator = passwordValue.passwordLocator;
            ST.textField(userNameLocator).type(userName);
            ST.textField(passwordLocator).type(password);
        }

        else if (typeof (userNameValue) === "string" && typeof (passwordValue) === "string") {
         //   ST.textField('[name="username"]').type(userName);
           // ST.textField('[name="password"]').type(password);
        }
        else {
            return "wrong parameters passed";
        }

        text = loginText ? loginText : 'Login';

        ST.button('[text="' + text + ']').click();
        return userNameValue;
    }

    selectCombo(locator, value) {
        return null;
    }

    typeTextField(locator, value) {
        return null;
    }

    buttonCLick(locator) {
        return null;
    }

    pickDate(locator, date) {
        return null;
    }

    checkBoxCheck(locator) {
        return null;
    }

    radioButtonSelect(locator, value) {
        return null;
    }

    gridSelectRow(gridLocator, rowKey, rowValue, exactMatch) {
        return null;
    }

    gridSelectCell(gridLocator, cellKey, cellValue, rowKey, rowValue, exactMatch) {
        return null;
    }

    gridSortOn(locator, field, direction) {
        return null;
    }

    tabClick(locator, header) {
        return null;
    }

    confirmMessage(locator, buttontext) {
        return null;
    }
}

module.exports = CommonMethods;