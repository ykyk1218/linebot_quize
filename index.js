var https = require('https');
var Quize = require('./quize')
var LineBot = require('./lineBot')

exports.handler = (event, context, callback) => {
    console.log('EVENT:', JSON.stringify(event, null, 2));
    var questionCounter = 0
    var replyToken = event["events"][0]["replyToken"]

    var quize = new Quize()
    var linebot = new LineBot()

    // lineから送られてきたメッセージを取得する
    // メッセージタイプがテキストの場合はそのメッセージ
    if (event["events"][0]["type"] == "message") {
      var send_message = event["events"][0]["message"]["text"];
      if(send_message == "スタート") {
        startMessage = quize.start()
        console.log("スタートメッセージ", startMessage)

        var replyMessages = []
        replyMessages.push(linebot.replyMessage(replyToken, startMessage))

        //postbackにクイズIDとボタンの番号
        var question = quize.randomQuestion()
        var replyQuize = linebot.templateMessage(replyToken, question["title"], "選択してください", question["choices"])
        replyMessages.push(replyQuize)

        replyJson = {"replyToken": replyToken, "messages": replyMessages}
        linebot.requestReplyMessage(replyJson)
        
      }else{
        replyMessage = reply
      
      }

    }else if (event["events"][0]["type"] == "postback") {
      console.log("postback")
      var replyMessages = []
      // 終了フラグがたっていれば開始してくださいメッセージを投げる

      //postbackデータに正解か不正解かの判定用dataがある
      if(quize.isCorrect(event["events"][0]["postback"]["data"])) {
        //正解
        replyMessages.push(linebot.replyMessage(replyToken, quize.correctMessage()))

      }else{
        //不正解
        replyMessages.push(linebot.replyMessage(replyToken, quize.errorMessage()))
      }

      //postbackにクイズIDとボタンの番号
      var question = quize.randomQuestion()
      var replyQuize = linebot.templateMessage(replyToken, question["title"], "選択してください", question["choices"])
      replyMessages.push(replyQuize)
      replyJson = {"replyToken": replyToken, "messages": replyMessages}
      linebot.requestReplyMessage(replyJson)
      //回答と正解を投げて判定
      //
      //今10問目であれば、終了メッセージを投げる
      //結果を出す
      //終了フラグを立てる
      //
      //postback_message = postback(event["events"][0]["postback"]["data"]);
    }
}
