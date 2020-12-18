
const http = require('https')
const fetch = require('node-fetch');
const { SSL_OP_NETSCAPE_CA_DN_BUG } = require('constants');

const dogUrl = 'https://random.dog/woof.json'


const https = require('https');

function test() {
    https.get(dogUrl, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            return (JSON.parse(data).url);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}


async function getDogUrl() {
    const response = await fetch(dogUrl)
    const link = await response.json()
    return link
}



getDogUrl().then(link => {
    // const whatIwant = '.jpg'
    // let fileType = (link.url).slice(-3)
    // console.log(fileType)
    // if (fileType === whatIwant) {
    console.log(link.url)
    // } else {
    //    console.log('nope')
    // }

})

