import {test} from '@playwright/test'
import Login from '../pages/Login';

test('demo login',async({page})=>{
    
    const login = new Login(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    await login.setUserName('Admin')
    await login.setPassword('admin123')
    await login.clickLoginbutton()
})