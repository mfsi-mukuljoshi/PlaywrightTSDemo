import {test} from '@playwright/test'
import Login from '../pages/Login';
import { decrypt, encrypt } from '../utils/CrytoUtil';

test('demo login',async({page})=>{
    
    const login = new Login(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    await login.setUserName('Admin')
    await login.setPassword('admin123')
    await login.clickLoginbutton()
})

test('sampel test env file',()=>{
    console.log(process.env.NODE_ENV)
    console.log(process.env.user)
    console.log(process.env.password)
    let a = "mukul";
    let x= encrypt(a)
    console.log(x)
    let y = decrypt(x)
    console.log( decrypt(x))
})