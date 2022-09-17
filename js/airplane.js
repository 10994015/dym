const chkBtn = document.getElementById('chkBtn');
const airplaneDiv = document.getElementById('airplaneDiv');
const air = airplaneDiv.getElementsByClassName('air');
console.log(air);
const diamondBtn = document.getElementById('diamondBox').getElementsByClassName('diamondBtn');
const airRnakList = document.getElementById('airRnakList');
const dollar = document.getElementById('dollar');
const doubleBtn = document.getElementById('doubleBtn');
const reBtn = document.getElementById('reBtn');
const myMoney = document.getElementById('myMoney');
const myId = document.getElementById('myId');
const balance = document.getElementById('balance');
const gameBtn = document.getElementsByClassName('gameBtn');
const playBoxBg = document.getElementById('playBoxBg');
const airplaneRankBox = document.getElementById('airplaneRankBox');
const hiddenRadioRank = document.getElementById('hiddenRadioRank');
let guessAir = 0;
let champion = 0;
let secondsArr = [
    [7.7,'1'],
    [8,'2'],
    [8.5,'3'],
    [8.7,'4'],
    [9,'5'],
    [9.3,'6'],
    [9.7,'7'],
    [10,'8'],
    [10.5,'9'],
    [11,'10']
]

let betMoney = 0;
let html = '';
shuffleArray(secondsArr);
// setInterval(()=>{
//     console.log('10s過去了');
//     shuffleArray(secondsArr);
// }, 10000);
function shuffleArray(secondsArr){
    secondsArr.sort(()=> Math.random() - 0.5);
    for(let c=1;c<=10;c++){
        if(secondsArr[c-1][1] == '1'){
            champion = c;
        }
    }
    console.log("答案:",champion);
}

var id =setInterval(function () {
    if (new Date().getSeconds()==0){   //myDate.getHours();    //獲取當前小時數(0-23) 
        console.log('當前是',new Date().getMinutes())
        airRnakList.style.opacity = 0;
        playBoxBg.classList.add('start');
        html = "";
        for(let j=1;j<=10;j++){
            html += `<p class='p${secondsArr[j-1][1]}'> ${j} </p>`;
        }
        for(let i = 0;i<=air.length;i++){
            // air[i].classList.add(`air${i+1}`);
            air[i].style.animation = `airNo1 ${secondsArr[i][0]}s linear`;
            // animation: airNo1 8.2s linear;
            setTimeout(()=>{
                air[i].style.opacity = 0;
                // air[i].style.zIndex = -999;
            },secondsArr[i][0]*1000)
        }
        // clearInterval(id)
    }
    if(new Date().getSeconds()==11){
        airRnakList.innerHTML = "";
        airRnakList.innerHTML = html;
        airRnakList.style.opacity = 1;
    }
    if(new Date().getSeconds()==12){
        betMoney = 0;
        dollar.innerHTML = betMoney;
        guessAir = 0;
        hiddenRadioRank.checked = false;
        for(let i=0;i<10;i++){
            airplaneRankBox.getElementsByClassName('medal')[i].style.opacity = 0;
        }
    }
    if(new Date().getSeconds()==15){
        // console.log('當前是',new Date().getMinutes())
        playBoxBg.classList.remove('start');
        shuffleArray(secondsArr);
        for(let i=0;i<=air.length;i++){
            air[i].style.opacity = 1;
            // air[i].style.zIndex = 1;
        }
       
    }
    if(new Date().getSeconds()==30){
        for(let i = 0;i<=air.length;i++){
            air[i].style.animation = '';
            air[i].style.opacity = 1;
        }
    }
    if(new Date().getSeconds() <=13 || new Date().getSeconds()==59){
        chkBtn.style.opacity = .5;
    }
    if(new Date().getSeconds() > 13){
        chkBtn.style.opacity = 1;
    }
},1000,id)
console.log(secondsArr);




chkBtn.addEventListener('click',()=>{
    if(betMoney<=0){
        alert('您的下注金額為0,請先下注!');
        return;
    }
    if(!hiddenRadioRank.checked){
        alert('您尚未選擇飛機');
        return;
    }
    
    let chk = confirm('確認下注?');
    
    if(chk){
        // playBoxBg.classList.add('start');
        // for(let j=1;j<=10;j++){
        //     html += `<p class='p${secondsArr[j-1][1]}'> ${j} </p>`;
        // }
        // setTimeout(()=>{
        //     airRnakList.innerHTML = html;
        //     airRnakList.style.opacity = 1;
        // },11000)
        
        let differ = (60 - new Date().getSeconds() + 11)*1000;
        console.log(differ);
        setTimeout(()=>{
            console.log('PK');
          if(champion == guessAir){
              console.log('贏錢');
            myMoney.value = Number(myMoney.value) + (Number(dollar.innerHTML) * 2);
            balance.innerHTML = myMoney.value;

            axios.get(`./updateMoney.php?id=${myId.value}&money=${myMoney.value}`).then((res)=>{
                console.log(res);
            })
          }else{
              console.log("輸錢");
              myMoney.value = balance.innerHTML;
              
              axios.get(`./updateMoney.php?id=${myId.value}&money=${myMoney.value}`).then((res)=>{
                console.log(res);
            })
          }
        },differ)
        // for(let i = 0;i<=air.length;i++){
        //     // air[i].classList.add(`air${i+1}`);
        //     air[i].style.animation = `airNo1 ${secondsArr[i][0]}s linear`;
        //     // animation: airNo1 8.2s linear;
        //     setTimeout(()=>{
        //         air[i].style.opacity = 0;
        //         air[i].style.zIndex = -999;
        //     },secondsArr[i][0]*1000)
        // }
        
        return;
    }
})

const diamondFn = (e)=>{
    if(myMoney.value<Number(e.target.alt)){
        alert('您的餘額為不足，請先儲值')
        return;
    }
    betMoney += Number(e.target.alt);
    myMoney.value = Number(myMoney.value) - Number(e.target.alt);
    balance.innerHTML = myMoney.value
    dollar.innerHTML = betMoney;
}

for(let i=0;i<diamondBtn.length;i++){
    diamondBtn[i].addEventListener('click',diamondFn);
}

doubleBtn.addEventListener('click',()=>{
    if(myMoney.value <=betMoney ){
        alert('您的餘額為不足，請先儲值')
        return;
    }
    myMoney.value = Number(myMoney.value - betMoney);
    betMoney = betMoney*2;
    balance.innerHTML = myMoney.value
    dollar.innerHTML = betMoney;
})
reBtn.addEventListener('click',()=>{
    myMoney.value = Number(myMoney.value) + betMoney;
    betMoney = 0;
    balance.innerHTML = myMoney.value
    dollar.innerHTML = betMoney;
})

for(let i=0;i<gameBtn.length;i++){
    gameBtn[i].addEventListener('click',toggleGameFn);
}
function toggleGameFn(){
    initGameDiv();
    console.log(this.id.split('gameBtn'));
    
    if(this.src.indexOf('btnchk')== -1){
        this.src = this.src.replace('btn','btnchk');
        document.getElementById(`game${this.id.split('gameBtn')[1]}`).style.display = "block"
    }else{
        this.src = this.src.replace('btnchk','btn');
        document.getElementById(`game${this.id.split('gameBtn')[1]}`).style.display = "block"
    }
}
function initGameDiv(){
    for(let i=1;i<=5;i++){
        document.getElementById(`game${i}`).style.display = "none";
        document.getElementById(`gameBtn${i}`).src = `../images/airplane/btn${i}.png`
    }
}

function airplaneRankFn(i){
    if(hiddenRadioRank.checked){
        if(guessAir!=0 && guessAir == i){
            hiddenRadioRank.checked = false;
            airplaneRankBox.getElementsByClassName('medal')[i-1].style.opacity = 0;
            guessAir = 0;
        }
        console.log(guessAir);
        return;
    }
    if(!hiddenRadioRank.checked){
        hiddenRadioRank.checked = true;
        airplaneRankBox.getElementsByClassName('medal')[i-1].style.opacity = 1;
        guessAir = i;
        console.log(guessAir);
        // e.target.getElementsByClassName('medal')[0].style.opacity = 1;
    }
}