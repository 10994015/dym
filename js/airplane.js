const chkBtn = document.getElementById('chkBtn');
const airplaneDiv = document.getElementById('airplaneDiv');
const air = airplaneDiv.getElementsByClassName('air');
const betAir = document.getElementsByClassName('betAir')
const diamondBtn = document.getElementById('diamondBox').getElementsByClassName('diamondBtn');
const airRnakList = document.getElementById('airRnakList');
const airTrend = document.getElementById('airTrend');
const countdown = document.getElementById('countdown');
const airTopThree = document.getElementById('airTopThree');
const airTopTen = document.getElementById('airTopTen');
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
const diamondBoxLeft = document.getElementById('diamondBoxLeft');
const diamondBoxRight = document.getElementById('diamondBoxRight');
const bar = document.getElementById('bar'); 
const clickAudio = document.getElementsByClassName('clickAudio')
let addMoney = 0;
let minusMoney = 0;
let totalMoney = 0;
let guessAirArray = {
    no1:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no2:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no3:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no4:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no5:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no6:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no7:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no8:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no9:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    no10:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
}
let trendArr = [];
let chooseRanking = 1;
document.getElementById(`rankingImg${chooseRanking}`).src = `../images/airplane/no${chooseRanking}chk.png`;
let guessAir = 0;
let champion = 0;
let countdownNumber = 0;
let secondsArr = [
    [10,'1'],
    [10.1,'2'],
    [10.11,'3'],
    [10.12,'4'],
    [10.13,'5'],
    [10.14,'6'],
    [10.15,'7'],
    [10.16,'8'],
    [10.17,'9'],
    [10.18,'10']
]
let ansObj = {
    no1:"",no2:"",no3:"",no4:"",no5:"",no6:"",no7:"",no8:"",no9:"",no10:""
}
let beforeAnsObj = {
    no1:"",no2:"",no3:"",no4:"",no5:"",no6:"",no7:"",no8:"",no9:"",no10:""
}
let betMoney = 0;
let totalBetMoney = 0;
let html = '';
let tenHtml = "";
let nowTime = "";
shuffleArray(secondsArr);
// setInterval(()=>{
//     console.log('10s過去了');
//     shuffleArray(secondsArr);
// }, 10000);
function shuffleArray(secondsArr){
    secondsArr.sort(()=> Math.random() - 0.5);
    for(let c=1;c<=10;c++){
        if(secondsArr[c-1][1] == '1'){ ansObj.no1 = c; champion = c;}
        if(secondsArr[c-1][1] == '2'){ ansObj.no2 = c; }
        if(secondsArr[c-1][1] == '3'){ ansObj.no3 = c; }
        if(secondsArr[c-1][1] == '4'){ ansObj.no4 = c; }
        if(secondsArr[c-1][1] == '5'){ ansObj.no5 = c; }
        if(secondsArr[c-1][1] == '6'){ ansObj.no6 = c; }
        if(secondsArr[c-1][1] == '7'){ ansObj.no7 = c; }
        if(secondsArr[c-1][1] == '8'){ ansObj.no8 = c; }
        if(secondsArr[c-1][1] == '9'){ ansObj.no9 = c; }
        if(secondsArr[c-1][1] == '10'){ ansObj.no10 = c; }
    }
    console.log("答案=>", ansObj);
    
    console.log("答案:",champion);
}
function initGuessAirArray(){
    guessAirArray = {
        no1:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no2:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no3:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no4:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no5:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no6:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no7:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no8:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no9:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
        no10:{ air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0},},
    }
}
timeMethod();
startMethod();
function startMethod(){
    // for(let j=1;j<=10;j++){
    //     html += `<p class='p${secondsArr[j-1][1]}'> ${j} </p>`;
    // }
    // axios.get('../function/selectAnswer.php').then(res=>{
    //     console.log("axios=>", res);
    // })
    airTrend.innerHTML = html;
    if(new Date().getSeconds() < 11){
        airRnakList.style.opacity = 0;
        airTopThree.style.opacity = 0;
        airTopTen.style.opacity = 0;
        playBoxBg.classList.add('start');
        
        playBoxBg.style.animationDelay =  `-${ new Date().getSeconds()}s`;
        
        for(let i = 0;i<=air.length;i++){
            air[i].style.animation = `airNo1 ${secondsArr[i][0]}s linear`;
            air[i].style.animationDelay = `-${ new Date().getSeconds()}s`;
            setTimeout(()=>{
                air[i].style.opacity = 0;
                var id =setInterval(timeMethod,1000,id);
                playBoxBg.style.animationDelay = '0s';
                // air[i].style.zIndex = -999;
            }, secondsArr[i][0]*1000 - (new Date().getSeconds() * 1000))
        }
    }else{
        var id =setInterval(timeMethod,1000,id);
    }
}
// var id =setInterval(timeMethod,1000,id);
function timeMethod(){
    
    countdownNumber = 60 - new Date().getSeconds();
    if(countdownNumber < 10){
        countdown.innerHTML = '0' + countdownNumber; 
    }else{
        if(countdownNumber == 60){
            countdown.innerHTML = '00'
        }else{
            countdown.innerHTML = countdownNumber;
        }
    }
    if(new Date().getSeconds()==0){
        axios.get('../function/selectAnswer.php?time=yes').then(res=>{
            console.log("axios=>", res);
        })
        chkBtn.addEventListener('click',chkBtnFn);
    }
    if (new Date().getSeconds()==1){ 
        //myDate.getHours();    //獲取當前小時數(0-23) 
        // console.log('當前是',new Date().getMinutes())
        airRnakList.style.opacity = 0;
        airTopThree.style.opacity = 0;
        airTopTen.style.opacity = 0;
        tenHtml = "";
        betMoney = 0;
        dollar.innerHTML = betMoney;
        playBoxBg.classList.add('start');
        // for(let j=1;j<=10;j++){
        //     html += `<p class='p${secondsArr[j-1][1]}'> ${j} </p>`;
        // }
        for(let i = 0;i<=air.length;i++){
            // air[i].classList.add(`air${i+1}`);
            air[i].style.animation = `airNo1 ${secondsArr[i][0]}s linear`;
            // animation: airNo1 8.2s linear;
            setTimeout(()=>{
                air[i].style.opacity = 0;
            },secondsArr[i][0]*1000)
        }
        // clearInterval(id)
    }
    if(new Date().getSeconds()==2){
        shuffleArray(secondsArr);
    }
    if(new Date().getSeconds()==11){
        airRnakList.style.opacity = 0;
        airTopThree.style.opacity = 1;
        airTopTen.style.opacity = 0;
        airTopThree.innerHTML = `<p>第一名:${beforeAnsObj.no1}</p><p>第二名:${beforeAnsObj.no2}</p><p>第三名:${beforeAnsObj.no3}</p>`
    }
    if(new Date().getSeconds()==14){
        airRnakList.style.opacity = 0;
        airTopThree.style.opacity = 0;
        airTopTen.style.opacity = 1;
        
        for(let i=1;i<=10;i++){
            tenHtml = tenHtml + beforeAnsObj['no'+i] + ',';
        }
        // console.log('tenHtml =>' , tenHtml);
        
        airTopTen.innerHTML = tenHtml ;
    }
    if(new Date().getSeconds()==18){
        airTopThree.style.opacity = 0;
        airTopTen.style.opacity = 0;
        airTrend.innerHTML = "";
        airTrend.innerHTML = tenHtml;

        airTopThree.style.opacity = 0;
        airTopTen.style.opacity = 0;
        airRnakList.style.opacity = 1;
    }
    if(new Date().getSeconds()==19){
        hiddenRadioRank.checked = false;
    }
    if(new Date().getSeconds()==20){
        // console.log('當前是',new Date().getMinutes())
        playBoxBg.classList.remove('start');
        // shuffleArray(secondsArr);
        for(let i=0;i<=air.length;i++){
            air[i].style.opacity = 1;
        }
    }
    if(new Date().getSeconds()==30){
        for(let i = 0;i<=air.length;i++){
            air[i].style.animation = '';
            air[i].style.opacity = 1;
        }
    }
    if(new Date().getSeconds()== 55){
        // beforeAnsObj
        for(let c=1;c<=10;c++){
            if(secondsArr[c-1][1] == '1'){ beforeAnsObj.no1 = c; }
            if(secondsArr[c-1][1] == '2'){ beforeAnsObj.no2 = c; }
            if(secondsArr[c-1][1] == '3'){ beforeAnsObj.no3 = c; }
            if(secondsArr[c-1][1] == '4'){ beforeAnsObj.no4 = c; }
            if(secondsArr[c-1][1] == '5'){ beforeAnsObj.no5 = c; }
            if(secondsArr[c-1][1] == '6'){ beforeAnsObj.no6 = c; }
            if(secondsArr[c-1][1] == '7'){ beforeAnsObj.no7 = c; }
            if(secondsArr[c-1][1] == '8'){ beforeAnsObj.no8 = c; }
            if(secondsArr[c-1][1] == '9'){ beforeAnsObj.no9 = c; }
            if(secondsArr[c-1][1] == '10'){ beforeAnsObj.no10 = c;}
        }
        
    }
}


chkBtn.addEventListener('click',chkBtnFn);
function chkBtnFn(){
    if(betMoney<=0){
        alert('您的下注金額為0,請先下注!');
        return;
    }
    if(!hiddenRadioRank.checked){
        alert('您尚未下注');
        return;
    }
    
    let chk = confirm('確認下注?');
    
    if(chk){
        let differ = (60 - new Date().getSeconds() + 11)*1000;
        addMoney = 0;
        
        console.log(differ);
        for(let i=1;i<=10;i++){
            for(let j=1;j<=10;j++){
                if(guessAirArray['no'+i]['air'+j].money > 0 ){
                    // 答案: ansObj['no'+i]
                     if(ansObj['no'+i] == j ){
                         addMoney += guessAirArray['no'+i]['air'+j].money ;
                     }
                     
                }
            }
        }
        
        console.log("贏了=>", addMoney);
        console.log("總計=>", totalMoney);
        setTimeout(()=>{
            console.log("pk time");
            myMoney.value = Number(myMoney.value) + Number(addMoney * 2) ; 
            balance.innerHTML = myMoney.value;
            axios.get(`./updateMoney.php?id=${myId.value}&money=${myMoney.value}`).then((res)=>{
                console.log(res);
            })
        }, differ)
        initGuessAirArray();
        chkBtn.removeEventListener('click',chkBtnFn);
        return;
    }
}
const diamondFn = (e)=>{
    betMoney =  Number(e.target.alt);
    dollar.innerHTML = betMoney;
}

for(let i=0;i<diamondBtn.length;i++){
    diamondBtn[i].addEventListener('click',diamondFn);
}

doubleBtn.addEventListener('click',()=>{
    if(myMoney.value < minusMoney){
        alert('餘額不足');
        return;
    }
    
    for(let i=1;i<=10;i++){
        for(let j=1;j<=10;j++){
            if(guessAirArray['no'+i]['air'+j].money > 0){
                guessAirArray['no'+i]['air'+j].money = guessAirArray['no'+i]['air'+j].money *2;
            }
        }
    }
    myMoney.value = Number(myMoney.value - minusMoney);
    balance.innerHTML = myMoney.value

    minusMoney = minusMoney * 2;
    console.log(guessAirArray);
   
})
reBtn.addEventListener('click',()=>{
    for(let i=1;i<=10;i++){
        for(let j=1;j<=10;j++){
            guessAirArray['no'+i]['air'+j].money = 0;
        }
    }
    myMoney.value = Number(myMoney.value) + minusMoney;
    balance.innerHTML = myMoney.value;
    hiddenRadioRank.checked = false;

    console.log(guessAirArray);
    

})

for(let i=0;i<gameBtn.length;i++){
    gameBtn[i].addEventListener('click',toggleGameFn);
}
function toggleGameFn(){
    initGameDiv();
    // console.log(this.id.split('gameBtn'));
    
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
for(let i=0;i<air.length;i++){
    air[i].addEventListener('click',betFn);
}
function betFn(e){
    console.log(e.target);
}

function toggleRankingFn(i){
    initRankingFn();
    chooseRanking = i;
    console.log("目前名次=>",chooseRanking);
    // this.src = `../images/airplane/no${i}chk.png`;
    document.getElementById(`rankingImg${i}`).src  = `../images/airplane/no${i}chk.png`;
    
}
function initRankingFn(){
    chooseRanking = 0;
    for(let i=0;i<10;i++){
        document.getElementById('rankBtnBox').getElementsByClassName('rankingImg')[i].src = `../images/airplane/no${i+1}.png`;
    }
}


diamondBoxRight.addEventListener('click',()=>{
    for(let i=0;i<diamondBtn.length;i++){
        diamondBtn[i].style.transform = 'translateX(-300px)';
    }
})
diamondBoxLeft.addEventListener('click',()=>{
    for(let i=0;i<diamondBtn.length;i++){
        diamondBtn[i].style.transform = 'translateX(0px)';
    }
})

for(let i=0;i<betAir.length;i++){
    betAir[i].addEventListener('click',betFn);
}

function betFn(e){
    // chooseRanking
    // betMoney
    // guessAirArray
    if(betMoney == 0){
        alert('請選擇下注金額!')
        return;
    }
    if(Number(myMoney.value) < betMoney){
        alert('餘額不足!');
        return;
    }
    minusMoney += betMoney;
    myMoney.value = Number(myMoney.value) - betMoney;
    balance.innerHTML = myMoney.value
    hiddenRadioRank.checked = true;
    
    

    let sd = e.target.parentNode.getElementsByClassName('smallDiamond')[0];
    sd.style.display = "none";
    sd.src = `../images/airplane/diamond${betMoney}.png`
    sd.style.display = "block";
    setTimeout(()=>{
        sd.style.display = "none";
    },200)

    let aitNumber = e.target.alt;
    guessAirArray['no'+chooseRanking]['air'+aitNumber].money += betMoney;
    console.log(guessAirArray['no'+chooseRanking]['air'+aitNumber].money);
    
}

bar.addEventListener('click',()=>{
    console.log(guessAirArray);
    let params = new URLSearchParams()
    let yes = 'yes';
    params.append('add',yes );
    axios.post('../function/addAnswer.php',params).then(res=>{
        console.log(res);
    })
})


