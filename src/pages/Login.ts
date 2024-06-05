import { Page } from "@playwright/test";

export default class Login{
    private readonly username ="//input[@name='username']"
    private readonly password =this.page.getByPlaceholder("Password")
    private readonly loginButton = this.page.getByRole('button',{name:"Login"})

    constructor(private page:Page)
    {
    }

    async setUserName(user:string)
    {
        
        await this.page.locator(this.username).fill(user)
    }

    async setPassword(password:string) 
    {
        await this.password.fill(password)
    }

    async clickLoginbutton()
    {
        await this.loginButton.click()
    }
}