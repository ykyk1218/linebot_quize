var Quize = function() {
  
}
Quize.prototype.start = function() {
  return "クイズを開始します。"
}
Quize.prototype.correctMessage = function() {
  return "おめでとうございます！正解です"
}
Quize.prototype.errorMessage = function() {
  return "残念、不正解です"
}
Quize.prototype.reply = function() {
  return "適当な返信"
}
Quize.prototype.isCorrect = function(postback) {
  answer = postback.split("-")
  if(answer[1] == 1) {
    return true
  }
  return false
}
Quize.prototype.randomQuestion = function() {
  //ランダムにクイズを取得
  questions = [
  {
    "question": {
      "title": "knock on wood",
      "choices": 
      [
        { type: "postback", label: "幸運を祈る", data: "1-1" },
        { type: "postback", label: "よろしく", data: "1-0"},
        { type: "postback", label: "おはよう", data: "1-0"},
        { type: "postback", label: "気が", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "all ears",
      "choices": 
      [
        { type: "postback", label: "全部聞こえる", data: "1-0" },
        { type: "postback", label: "聞かせて", data: "1-1"},
        { type: "postback", label: "よく聞こえる", data: "1-0"},
        { type: "postback", label: "よく聞こえない", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "change one's mind",
      "choices": 
      [
        { type: "postback", label: "気が変わった", data: "1-1" },
        { type: "postback", label: "よく考えたら", data: "1-0"},
        { type: "postback", label: "気にしない", data: "1-0"},
        { type: "postback", label: "よくわからない", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "keep in touch",
      "choices": 
      [
        { type: "postback", label: "一緒にいる", data: "1-0" },
        { type: "postback", label: "同じ状態にしておく", data: "1-0"},
        { type: "postback", label: "連絡を取り合う", data: "1-1"},
        { type: "postback", label: "握手をする", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "out of the blue",
      "choices": 
      [
        { type: "postback", label: "予想もしていなかった", data: "1-1" },
        { type: "postback", label: "国外", data: "1-0"},
        { type: "postback", label: "過ぎ去ったこと", data: "1-0"},
        { type: "postback", label: "気にしない", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "it's up to you",
      "choices": 
      [
        { type: "postback", label: "あなたの番", data: "1-0"},
        { type: "postback", label: "こんにちは", data: "1-0"},
        { type: "postback", label: "あなた次第", data: "1-1" },
        { type: "postback", label: "あなたがやって", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "it's not my day",
      "choices": 
      [
        { type: "postback", label: "自分ではどうしようもない", data: "1-0"},
        { type: "postback", label: "今日自分の出番はない", data: "1-0"},
        { type: "postback", label: "考えなしに", data: "1-0"},
        { type: "postback", label: "今日はついてない", data: "1-1" },
      ]
    }
  },
  {
    "question": {
      "title": "cats and dogs",
      "choices": 
      [
        { type: "postback", label: "楽しい", data: "1-0"},
        { type: "postback", label: "土砂降り", data: "1-1" },
        { type: "postback", label: "ごちゃごちゃしている", data: "1-0"},
        { type: "postback", label: "うるさい", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "sleep like a log",
      "choices": 
      [
        { type: "postback", label: "ぐっすり眠る", data: "1-1" },
        { type: "postback", label: "よく眠れない", data: "1-0"},
        { type: "postback", label: "すぐ寝る", data: "1-0"},
        { type: "postback", label: "二度寝", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "piece of cake",
      "choices": 
      [
        { type: "postback", label: "小さい", data: "1-0"},
        { type: "postback", label: "まあまあ", data: "1-0"},
        { type: "postback", label: "簡単", data: "1-1" },
        { type: "postback", label: "気にしない", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "get over it",
      "choices": 
      [
        { type: "postback", label: "あきらめる", data: "1-1" },
        { type: "postback", label: "手に入れる", data: "1-0"},
        { type: "postback", label: "予想外", data: "1-0"},
        { type: "postback", label: "すぐできる", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "see eye to eye",
      "choices": 
      [
        { type: "postback", label: "よく見てみる", data: "1-0"},
        { type: "postback", label: "よく考える", data: "1-0"},
        { type: "postback", label: "目が合う", data: "1-0"},
        { type: "postback", label: "意見が一致する", data: "1-1" },
      ]
    }
  },
  {
    "question": {
      "title": "by a hair",
      "choices": 
      [
        { type: "postback", label: "間一髪で", data: "1-1"},
        { type: "postback", label: "すぐできる", data: "1-0"},
        { type: "postback", label: "よくわからない", data: "1-0"},
        { type: "postback", label: "危ない", data: "1-0" },
      ]
    }
  },
  {
    "question": {
      "title": "split hairs",
      "choices": 
      [
        { type: "postback", label: "調子にのる", data: "1-0"},
        { type: "postback", label: "驚く", data: "1-0"},
        { type: "postback", label: "頭がいたい", data: "1-0"},
        { type: "postback", label: "ささいなことにこだわる", data: "1-1" },
      ]
    }
  },
  {
    "question": {
      "title": "head first",
      "choices": 
      [
        { type: "postback", label: "無謀なこと", data: "1-1"},
        { type: "postback", label: "熟考する", data: "1-0"},
        { type: "postback", label: "まず最初に", data: "1-0"},
        { type: "postback", label: "すばやく", data: "1-0" },
      ]
    }
  },
  {
    "question": {
      "title": "over the head of",
      "choices": 
      [
        { type: "postback", label: "プラスして", data: "1-0"},
        { type: "postback", label: "想定外", data: "1-0"},
        { type: "postback", label: "考えなしで", data: "1-0"},
        { type: "postback", label: "追い抜いて", data: "1-1" },
      ]
    }
  },
  {
    "question": {
      "title": "keep one's head",
      "choices": 
      [
        { type: "postback", label: "落ち着いてる", data: "1-1"},
        { type: "postback", label: "わかる", data: "1-0"},
        { type: "postback", label: "思った通り", data: "1-0"},
        { type: "postback", label: "熟考する", data: "1-0" },
      ]
    }
  },
  {
    "question": {
      "title": "have the face to",
      "choices": 
      [
        { type: "postback", label: "平常心で", data: "1-0"},
        { type: "postback", label: "堂々と", data: "1-0"},
        { type: "postback", label: "ずうずうしくも", data: "1-1" },
        { type: "postback", label: "緊張して", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "pull faces",
      "choices": 
      [
        { type: "postback", label: "姿を見せる", data: "1-0"},
        { type: "postback", label: "顔をしかめる", data: "1-1" },
        { type: "postback", label: "他へ行く", data: "1-0"},
        { type: "postback", label: "楽しい", data: "1-0"}
      ]
    }
  },
  {
    "question": {
      "title": "with an eye to〜",
      "choices": 
      [
        { type: "postback", label: "〜をよく見ながら", data: "1-0"},
        { type: "postback", label: "〜を横目に", data: "1-0"},
        { type: "postback", label: "〜と目が合う", data: "1-0"},
        { type: "postback", label: "〜の目的で", data: "1-1" },
      ]
    }
  },
  {
    "question": {
      "title": "nose dive",
      "choices": 
      [
        { type: "postback", label: "バカにする", data: "1-0"},
        { type: "postback", label: "興奮", data: "1-0"},
        { type: "postback", label: "急降下", data: "1-1" },
        { type: "postback", label: "まず最初に", data: "1-0"}
      ]
    }
  }
]
  var question = questions[Math.floor(Math.random() * questions.length)]
  return question["question"]
}
module.exports = Quize
