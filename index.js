const quiz = [
{
    question: '	ストックホルム大会開催55周年を記念する式典で「長い道のりでした。この間に嫁をめとり、6人の子どもと10人の孫に恵まれました」と述べた、54年8ヶ月6日5時間32分20秒3という記録でも知られる陸上選手は誰でしょう？',
    correct: 'かなくりしそう'
}, {
    question: 'マカロニ、アデリー、イワトビ、ジェンツー、コウテイ、フンボルトなどの種類がある、食べない鳥は何でしょう？',
    correct: 'ぺんぎん'
}, {
    question: 'ハワイや沖縄などでよく食べられる肉の缶詰の商品名で、インターネットにおいて大量にばらまかれる迷惑なメールなどを意味する言葉の由来となったものはなんでしょう？',
    correct: 'すぱむ'
}, {
    question: '日本の都道府県のうち、県の数はいくつでしょう？',
    correct: '43'
}, {
    question: '瓶入りのジュースなどを直接口をつけて飲むことを、ある楽器にたとえて何というでしょう？',
    correct: 'らっぱのみ'
}, {
    question: '国内シェアの約90％にあたるメガネフレームを生産している、福井県の市はどこでしょう？ 地理 要更新',
    correct: 'さばえ'
}, {
    question: 'ことわざで、商売は気長に続けるのが良いということを「商いは牛の何」というでしょう？',
    correct: 'よだれ'
}, {
    question: 'ものの見方や考え方が180°変わることを、ある天文学者の名を用いて「何的転回」という？',
    correct: 'こぺるにくす'
}, {
    question: '左右に分けられる漢字の左側を「へん」というのに対し、右側を何という？',
    correct: 'つくり'
}, {
    question: '瓶入りのジュースなどを直接口をつけて飲むことを、ある楽器にたとえて何というでしょう？',
    correct: 'らっぱのみ'
}, {
    question: '「おい、地獄さ行くんだで！」という書き出しで始まる、1929年に『戦旗』に発表された、小林多喜二のプロレタリア文学の代表作はなんでしょう？',
    correct: 'かにこうせん'
}, {
    question: '「グリコ」「カレーライス」などの派生もある、手を石、ハサミ、紙に見立てその相性により勝敗を決める遊びを一般に何というでしょう？',
    correct: 'じゃんけん'
}, {
    question: 'いわゆる五臓六腑の「五臓」とは、心臓、肝臓、腎臓、脾臓と何でしょう？',
    correct: 'はい'
}, {
    question: '「南十字星」に対して「北十字星」とも呼ばれるのは何座？',
    correct: 'はくちょう'
}, {
    question: '原産地であるメキシコの地名がその名の由来である，世界で最も小さいともいわれる犬の種類とは何でしょう？',
    correct: 'ちわわ'
}, {
    question: '「さよならはあなたから言った」という歌い出しの、作詞・作曲バルーンの曲は何でしょう?',
    correct: 'しゃるる'
}, {
    question: '「おいしさイナズマ級！」というキャッチコピーも有名な、有楽製菓が製造・販売を行なっているチョコレート菓子は何でしょう？',
    correct: 'ぶらっくさんだー'
}, {
    question: 'アフリカーンス語で「分離」を意味する、南アフリカ共和国で第二次世界大戦後に強化された、少数の白人による非白人に対する人種差別的政策を何というでしょう？',
    correct: 'あぱるとへいと'
}, {
    question: 'アクアマリンやブラッドストーンといえば、何月の誕生石でしょう？',
    correct: '3'
}, {
    question: '	これの刺身は「てっさ」、これの入った鍋は「てっちり」と呼ばれる、毒を持つことで知られる魚は何でしょう？',
    correct: 'ふぐ'
}, {
    question: 'チャイコフスキーの三大バレエ曲といえば、白鳥の湖、眠れる森の美女と何でしょう？',
    correct: 'くるみわりにんぎょう'
}, {
    question: '物理における力学的エネルギーといえば、位置エネルギーと何エネルギーの和とされるでしょう？',
    correct: 'うんどう'
}, {
    question: '「synthetic personality inventory（シンセティック・パーソナリティー・インベントリー）」の頭文字を取って名付けられた、能力面と性格面から評価する、就職活動によく使われる試験は何でしょう？',
    correct: 'SPI'
}, {
    question: '旧暦の8月1日頃から食べられるということから名前が付いた果物は何でしょう？ ',
    correct: 'はっさく'
}, {
    question: '和名を「ハダカカメガイ」という、その美しい姿から「流氷の天使」とも呼ばれる巻貝の一種は何でしょう？',
    correct: 'くりおね'
}];

let splitCorrect;

const hiraganaArray = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を', 'ん',
    'が', 'ぎ', 'ぐ', 'げ', 'ご',
    'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
    'だ', 'ぢ', 'づ', 'で', 'ど',
    'ば', 'び', 'ぶ', 'べ', 'ぼ',
    'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ',
    'ゃ', 'ゅ', 'ょ'
];

$question = document.getElementById("question");
$answer = document.getElementsByClassName("answer-item");
$counter = document.getElementById('counter');

let l = 0;
let k = 0;

let randomArchive = [];
let rank = ['S', 'A', 'B', 'C']
let correctCounts = 0;

let randomAnswer = (k) => {
    for (let i = 0; i < 4; i++) {
        ran1 = Math.floor(Math.random() * hiraganaArray.length);
        $answer[i].textContent = hiraganaArray[ran1];
    }
    ran2 = Math.floor(Math.random() * 4);
    $answer[ran2].textContent = splitCorrect[k];
}

let setQuiz = (l) => {

    correctCounts = 0;
    $question.textContent = `第${l + 1}問${quiz[l].question}`;
    splitCorrect = quiz[l].correct.split('');
    $counter.textContent = `${correctCounts}/${quiz.length}`

    randomAnswer(k);
}

let judgement = () =>{

    if(correctCounts >= quiz.length*90/100){
        alert(`${rank[0]}レベル`);
    }else if(correctCounts >= quiz.length*80/100){
        alert(`${rank[1]}レベル`);
    }else if(correctCounts >= quiz.length*70/100){
        alert(`${rank[2]}レベル`);
    }else{
        alert(`${rank[3]}レベル`);
    }
}

setQuiz(l);


for (let j = 0; j < 4; j++) {
    $answer[j].addEventListener('click', () => {
        if ($answer[j].textContent === splitCorrect[k]) {
            if (k >= splitCorrect.length - 1) {
                /*alert(`正解 ${quiz[ran3].correct}`);*/
                //初期化
                k = 0;
                //正解数をカウント
                correctCounts ++;
                $counter.textContent = `${correctCounts}/${quiz.length}`
                //次の問題へ
                if (l >= quiz.length - 1) {
                    l = 0;
                    judgement();
                } else {
                    l++;
                }
                //出題
                setQuiz(l);
                //選択肢をセット
                randomAnswer(k);
            } else {
                k++;
                randomAnswer(k);
            }
        } else {
            alert(`不正解 ${quiz[l].correct}`);
            //初期化
            k = 0;
            //次の問題へ
            if (l >= quiz.length - 1) {
                l = 0;
                judgement();
            } else {
                l++;
            }
            setQuiz(l);
            //選択肢をセット
            randomAnswer(k);
        }
    });
}

