const crypto = require('crypto');


let main1 = ()=>{
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                    .update(JSON.stringify({}))
                    .digest('hex');
    console.log(hash);
}

let mainCiphier = ()=>{
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192', 'password');

    let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
    console.log(encrypted);

    encrypted += cipher.final('hex');
    console.log(encrypted);
}


let mainDecipher = ()=>{
    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', 'a password');

    const encrypted ='ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504';
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted);
}


let main = ()=>{

    // Generate Alice's keys...
    const alice = crypto.createECDH('secp521r1');
    const aliceKey = alice.generateKeys();

    // Generate Bob's keys...
    const bob = crypto.createECDH('secp521r1');
    const bobKey = bob.generateKeys();

    // Exchange and generate the secret...
    const aliceSecret = alice.computeSecret(bobKey);
    const bobSecret = bob.computeSecret(aliceKey);

    console.log(aliceSecret.toString('hex'), bobSecret.toString('hex'));
}

main();
