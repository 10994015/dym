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
const balance = document.getElementById('balance');
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
function shuffleArray(secondsArr){
    secondsArr.sort(()=> Math.random() - 0.5);
}
shuffleArray(secondsArr);

console.log(secondsArr);


chkBtn.addEventListener('click',()=>{
    if(betMoney<=0){
        alert('您的下注金額為0,請先下注!');
        return;
    }
    let chk = confirm('確認下注?');
    if(chk){
        for(let j=1;j<=10;j++){
            html += `<p class='p${secondsArr[j-1][1]}'> ${j} </p>`;
        }
        setTimeout(()=>{
            airRnakList.innerHTML = html;
        },11000)
        for(let i = 0;i<=air.length;i++){
            // air[i].classList.add(`air${i+1}`);
            air[i].style.animation = `airNo1 ${secondsArr[i][0]}s linear`
            // animation: airNo1 8.2s linear;
        }
        
        return;
    }
})

const diamondFn = (e)=>{
    if(myMoney.value<Number(e.target.alt)){
        alert('您的餘額為不足，請先儲值')
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