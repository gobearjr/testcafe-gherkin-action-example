import {Selector, t} from 'testcafe'

class MainPage{
    constructor(){

        this.search_btn= Selector('#searchsubmit')
        this.search_box= Selector("input").withAttribute('placeholder','Filter by computer name...')
        this.empty=Selector(".well").withText('Nothing to display')
        this.table=Selector('.computers.zebra-striped')
    }

}

export default MainPage