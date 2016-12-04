var https = require("https")
var LineBot = function() {

}

LineBot.prototype.headers = {
  'Content-Type' : 'application/json; charset=UTF-8',
  'Authorization' : 'Bearer {}'
}

LineBot.prototype.message = function(message) {
  return {"type": "text", "text": message}
}
LineBot.prototype.templateMessage = function(replyToken, title, text, actions) {
       var message = 
           {
               "type": "template",
               "altText": "これはサンプルです",
               "template": {
                   "type": "buttons",
                   "title": title,
                   "text": text, 
                   "actions": actions
               }
           }
       
   return message
}
LineBot.prototype.replyMessage = function(replyToken, message) {
    var message = 
            {
                "type": "text",
                "text": message
            }
    return message
}

LineBot.prototype.requestReplyMessage = function(replyMessage) {
    var postData = JSON.stringify(replyMessage)
    console.log(postData)
    var headers = {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization' : `Bearer {${process.env.CHANNEL_ACCESS_TOKEN}}`
    }
    var options = {
        host: 'api.line.me',
        path: '/v2/bot/message/reply',
        headers: headers,
        method: 'POST'
    }

    // APIリクエスト
    var req = https.request(options, function(res){
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        res.on('request_body', function (chunk) {
            console.log(res.statusCode + chunk.toString());
        });
        req.on('error', function(err) {
          console.log('ERROR: ' + err.message);
        });
    });
    
    req.write(postData);
    req.end();
}
module.exports = LineBot
