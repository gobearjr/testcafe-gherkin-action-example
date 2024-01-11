import {Selector, t} from 'testcafe'

class AlertPage{
    constructor(){
        this.jsAlert=Selector("#content button").withText('Click for JS Alert')
        this.jsConfirm=Selector("#content button").withText('Click for JS Confirm')
        this.jsPrompt=Selector("#content button").withText('Click for JS Prompt')
        this.alertValidated=Selector("#result").withText('You successfully clicked an alert')
        this.confirmOk=Selector("#result").withText('You clicked: Ok')
        this.confirmCancel=Selector("#result").withText('You clicked: Cancel')
        this.promptvalidated=Selector("#result").withText('You entered: xixi')
    }
}

export default AlertPage