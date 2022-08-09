const wppconnect = require('@wppconnect-team/wppconnect');

var client = undefined;
async function create_client(config) {
    config['session'] = 'session';
    var created_client = await wppconnect.create(config)
        client = created_client
}

const authenticate = (async(req, res) => {
    console.log("authenticate called");
    var fs = require('fs');
fs.writeFile('qrcode.txt', '', function (err) {
  if (err) return console.log(err);
});
    await create_client({
        "logQR": true
    });
    res.send({
        "success": "authenticated"
    });
})

const send = (async(req, res) => {
    var to_mobileno = req.body.to_mobileno
        var message = req.body.message
        console.log(to_mobileno)
        console.log(message)
        if (client == undefined) {
            var fs = require('fs');
fs.writeFile('qrcode.txt', '', function (err) {
  if (err) return console.log(err);
});
            await create_client({
                "logQR": true
            })
        }
        var result = await client.sendText(to_mobileno, message);
    console.log(result)
    res.send({
        "success": "message send"
    });
})

module.exports = {
    authenticate,
    send
}
