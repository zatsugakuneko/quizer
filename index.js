const quiz = [{
    question: '「滑石方にして蛍燐長く、石黄鋼にして金色なり」という語呂合わせでも知られる、滑石を1、ダイヤモンドを10とした、鉱物の硬さの尺度といえば？',
    correct: 'もーすこうど'
},{
    question: 'エベレスト登山の際、「なぜ山に登るのか」と聞かれ「そこに山があるからだ」と答えた、イギリスの登山家は誰でしょう？',
    correct: 'じょーじ・まろりー'
},{
    question: '	ストックホルム大会開催55周年を記念する式典で「長い道のりでした。この間に嫁をめとり、6人の子どもと10人の孫に恵まれました」と述べた、54年8ヶ月6日5時間32分20秒3という記録でも知られる陸上選手は誰でしょう？',
    correct: 'かなくりしそう'
},{
    question: 'マカロニ、アデリー、イワトビ、ジェンツー、コウテイ、フンボルトなどの種類がある、食べない鳥は何でしょう？',
    correct: 'ぺんぎん'
},{
    question: 'ハワイや沖縄などでよく食べられる肉の缶詰の商品名で、インターネットにおいて大量にばらまかれる迷惑なメールなどを意味する言葉の由来となったものはなんでしょう？',
    correct: 'すぱむ'
},{
    question: '日本の都道府県のうち、県の数はいくつでしょう？',
    correct: '43'
},{
    question: '瓶入りのジュースなどを直接口をつけて飲むことを、ある楽器にたとえて何というでしょう？',
    correct: 'らっぱのみ'
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

let l = 0;

const setQuiz = (l) =>{
    $question.textContent = `第${l+1}問${quiz[l].question}`;
    splitCorrect = quiz[l].correct.split('');
}

setQuiz(l);

let k = 0;

const randomAnswer = (k) =>{
    for(let i= 0; i<4; i++ ){
        ran1 = Math.floor(Math.random()*hiraganaArray.length);
        $answer[i].textContent = hiraganaArray[ran1];
    }

    ran2 = Math.floor(Math.random()*4);
    $answer[ran2].textContent = splitCorrect[k];
}

randomAnswer(k);


for(let j=0; j<4; j++){
    $answer[j].addEventListener('click',()=>{
        if($answer[j].textContent === splitCorrect[k]){
            if(k >= splitCorrect.length-1){
                alert(`正解 ${quiz[l].correct}`);
                //初期化
                k=0;
                //次の問題へ
                if(l >= quiz.length-1){
                    l =0;
                }else{
                    l++;
                }
                setQuiz(l);
                //選択肢をセット
                randomAnswer(k);
            }else{
                k++;
                randomAnswer(k);
            }
        }else{
            alert(`不正解 ${quiz[l].correct}`);
            //初期化
            k=0;
            //次の問題へ
            if(l >= quiz.length-1){
                l =0;
            }else{
                l++;
            }
            setQuiz(l);
            //選択肢をセット
            randomAnswer(k);
        }
    });
}

