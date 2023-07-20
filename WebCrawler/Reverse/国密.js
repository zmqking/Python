const sm2 = require('sm-crypto').sm2;

const cipherMode = 1;

//获取密钥对
let keypair = sm2.generateKeyPairHex();
let publicKey = keypair.publicKey;
let privateKey = keypair.privateKey;

console.log(publicKey);
console.log(privateKey);

let msgString ="123456";

console.log(sm2);

//公钥加密，公钥放在前面
let encryptDate = sm2.doEncrypt(msgString,publicKey,privateKey);
console.log(encryptDate);
//私钥解密，放在前面
let decryptData = sm2.doDecrypt(encryptDate,privateKey,publicKey);
console.log(decryptData);