import { Given, Then, When } from '@cucumber/cucumber';
import MainPage from '../pages/AlertPage'
import MainData from '../components/MainData'

const mainPage = new MainPage()
const mainData = new MainData()

Given('User go to alert page', async (t) => {
    await t.navigateTo(mainData.url_alert)
})

When(/^User click js alert$/, async (t) => {
    await t.setNativeDialogHandler(() => true)
    await t.click(mainPage.jsAlert)
})

Then(/^User will see alert : You successfully clicked an alert$/, async (t) => {
    await t.expect(mainPage.alertValidated.exists).ok()
})

When(/^User click js confirm : OK$/, async (t) => {
    await t.setNativeDialogHandler(() => true)
    await t.click(mainPage.jsConfirm)
})

Then(/^User will see confirm : OK$/, async (t) => {
    await t.expect(mainPage.confirmOk.exists).ok()
})

When(/^User click js confirm : Cancel$/, async (t) => { 
    await t.setNativeDialogHandler(() => false)
    await t.click(mainPage.jsConfirm)
})

Then(/^User will see confirm : Cancel$/, async (t) => {
    await t.expect(mainPage.confirmCancel.exists).ok()
})

When(/^User click js prompt$/, async (t) => {
    await t.setNativeDialogHandler(() => 
    {return 'xixi'})
    await t.click(mainPage.jsPrompt)
})

Then(/^User will see confirm : input value$/, async (t) => {
    await t.expect(mainPage.promptvalidated.exists).ok()
})
