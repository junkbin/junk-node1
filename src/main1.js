const crypto = require('crypto');


let main = ()=>{
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                    .update(JSON.stringify({}))
                    .digest('hex');
    console.log(hash);
}


main();
