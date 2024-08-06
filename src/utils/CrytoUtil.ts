let cryptUtil =require('crypto-js')

const Salt = "defaultSalt";

export function encrypt(text: string )
{
    const siphettext = cryptUtil.AES.encrypt(text,Salt).toString()
    return siphettext
}

export function decrypt(ciphettext:string)
{
    const text = cryptUtil.AES.decrypt(ciphettext,Salt);
    const decryptText = text.toString(cryptUtil.enc.Utf8)
    return decryptText
}