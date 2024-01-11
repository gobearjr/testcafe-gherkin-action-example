import { Given, Then, When } from '@cucumber/cucumber';
import MainPage from '../pages/ComputerPage'
import MainData from '../components/MainData'

const mainPage = new MainPage()
const mainData = new MainData()


Given('User go to computer page', async (t) => {
    await t.navigateTo(mainData.url_computer)
})

When(/^User search for computer name "([^"]*)"$/, async (t, [compName]) => {
    await t.typeText(mainPage.search_box, compName,{ paste: true, replace: true })
    await t.click(mainPage.search_btn)
})

Then(/^User see searched computer name "([^"]*)" on the list$/, async (t, [validValue]) => {
    await t.expect(mainPage.table.innerText).contains(validValue)
})

Then(/^User didn't see searched computer on the list$/, async (t) => {
    await t.expect(mainPage.empty.exists).ok()
})