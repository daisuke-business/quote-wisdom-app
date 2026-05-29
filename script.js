const quotes = [
  {
    text: "未来を予測する最良の方法は、それを創り出すことだ。",
    author: "ピーター・ドラッカー",
  },
  {
    text: "困難の中に、機会がある。",
    author: "アルベルト・アインシュタイン",
  },
  {
    text: "失敗したことがない人は、新しいことに挑戦したことがない人だ。",
    author: "アルベルト・アインシュタイン",
  },
  {
    text: "速度を上げるばかりが、人生ではない。",
    author: "マハトマ・ガンジー",
  },
  {
    text: "明日死ぬかのように生きよ。永遠に生きるかのように学べ。",
    author: "マハトマ・ガンジー",
  },
  {
    text: "小さなことを重ねることが、とんでもないところへ行くただ一つの道だ。",
    author: "イチロー",
  },
  {
    text: "夢を見ることができれば、それは実現できる。",
    author: "ウォルト・ディズニー",
  },
  {
    text: "自分に打ち勝つことこそ、最も偉大な勝利である。",
    author: "プラトン",
  },
  {
    text: "始めることが、仕事の半分である。",
    author: "アリストテレス",
  },
  {
    text: "知識への投資は、常に最高の利息を生む。",
    author: "ベンジャミン・フランクリン",
  },
  {
    text: "今日できることを明日に延ばすな。",
    author: "ベンジャミン・フランクリン",
  },
  {
    text: "準備しておこう。チャンスはいつか訪れる。",
    author: "エイブラハム・リンカーン",
  },
  {
    text: "できると思えばできる。できないと思えばできない。",
    author: "ヘンリー・フォード",
  },
  {
    text: "成功とは、失敗を重ねても情熱を失わないことだ。",
    author: "ウィンストン・チャーチル",
  },
  {
    text: "私は失敗したのではない。うまくいかない方法を見つけただけだ。",
    author: "トーマス・エジソン",
  },
  {
    text: "天才とは、1パーセントのひらめきと99パーセントの努力である。",
    author: "トーマス・エジソン",
  },
  {
    text: "何事も、成し遂げるまではいつも不可能に見える。",
    author: "ネルソン・マンデラ",
  },
  {
    text: "人生で最も大切なのは、転ばないことではなく、転ぶたびに起き上がることだ。",
    author: "ネルソン・マンデラ",
  },
  {
    text: "あなたの時間は限られている。他人の人生を生きて無駄にしてはいけない。",
    author: "スティーブ・ジョブズ",
  },
  {
    text: "ハングリーであれ。愚かであれ。",
    author: "スティーブ・ジョブズ",
  },
  {
    text: "一歩を踏み出せば、景色は変わる。",
    author: "マザー・テレサ",
  },
  {
    text: "大きなことはできません。小さなことを大きな愛で行うだけです。",
    author: "マザー・テレサ",
  },
  {
    text: "下を向いていたら、虹を見つけることはできない。",
    author: "チャールズ・チャップリン",
  },
  {
    text: "人生に必要なものは、勇気と想像力と少しのお金だ。",
    author: "チャールズ・チャップリン",
  },
  {
    text: "学べば学ぶほど、自分が何も知らないことに気づく。",
    author: "ソクラテス",
  },
  {
    text: "最も強い者が生き残るのではない。変化できる者が生き残る。",
    author: "チャールズ・ダーウィン",
  },
  {
    text: "努力する人は希望を語り、怠ける人は不満を語る。",
    author: "井上靖",
  },
  {
    text: "夢なき者に成功なし。",
    author: "吉田松陰",
  },
  {
    text: "為せば成る、為さねば成らぬ何事も。",
    author: "上杉鷹山",
  },
  {
    text: "人間は考える葦である。",
    author: "ブレーズ・パスカル",
  },
];

const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const quoteButton = document.querySelector("#quote-button");

let lastQuoteIndex = -1;

function getRandomQuoteIndex() {
  let nextIndex = Math.floor(Math.random() * quotes.length);

  if (quotes.length > 1) {
    while (nextIndex === lastQuoteIndex) {
      nextIndex = Math.floor(Math.random() * quotes.length);
    }
  }

  lastQuoteIndex = nextIndex;
  return nextIndex;
}

function showRandomQuote() {
  const quote = quotes[getRandomQuoteIndex()];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `- ${quote.author}`;
}

quoteButton.addEventListener("click", showRandomQuote);
