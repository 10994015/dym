const chkBtn=document.getElementById("chkBtn"),airplaneDiv=document.getElementById("airplaneDiv"),air=airplaneDiv.getElementsByClassName("air"),betAir=document.getElementsByClassName("betAir"),diamondBtn=document.getElementById("diamondBox").getElementsByClassName("diamondBtn"),airRnakList=document.getElementById("airRnakList"),airTrend=document.getElementById("airTrend"),countdown=document.getElementById("countdown"),airTopThree=document.getElementById("airTopThree"),airTopTen=document.getElementById("airTopTen"),dollar=document.getElementById("dollar"),doubleBtn=document.getElementById("doubleBtn"),reBtn=document.getElementById("reBtn"),myMoney=document.getElementById("myMoney"),myId=document.getElementById("myId"),balance=document.getElementById("balance"),gameBtn=document.getElementsByClassName("gameBtn"),playBoxBg=document.getElementById("playBoxBg"),airplaneRankBox=document.getElementById("airplaneRankBox"),hiddenRadioRank=document.getElementById("hiddenRadioRank"),diamondBoxLeft=document.getElementById("diamondBoxLeft"),diamondBoxRight=document.getElementById("diamondBoxRight"),bar=document.getElementById("bar"),clickAudio=document.getElementsByClassName("clickAudio");let addMoney=0,minusMoney=0,totalMoney=0,guessAirArray={no1:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no2:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no3:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no4:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no5:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no6:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no7:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no8:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no9:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no10:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}}},chooseRanking=1;document.getElementById(`rankingImg${chooseRanking}`).src=`../images/airplane/no${chooseRanking}chk.png`;let guessAir=0,champion=0,countdownNumber=0,secondsArr=[[10,"1"],[10.1,"2"],[10.11,"3"],[10.12,"4"],[10.13,"5"],[10.14,"6"],[10.15,"7"],[10.16,"8"],[10.17,"9"],[10.18,"10"]],ansObj={no1:"",no2:"",no3:"",no4:"",no5:"",no6:"",no7:"",no8:"",no9:"",no10:""},beforeAnsObj={no1:"",no2:"",no3:"",no4:"",no5:"",no6:"",no7:"",no8:"",no9:"",no10:""},betMoney=0,totalBetMoney=0,html="",tenHtml="";function shuffleArray(e){e.sort(()=>Math.random()-.5);for(let n=1;n<=10;n++)"1"==e[n-1][1]&&(ansObj.no1=n,champion=n),"2"==e[n-1][1]&&(ansObj.no2=n),"3"==e[n-1][1]&&(ansObj.no3=n),"4"==e[n-1][1]&&(ansObj.no4=n),"5"==e[n-1][1]&&(ansObj.no5=n),"6"==e[n-1][1]&&(ansObj.no6=n),"7"==e[n-1][1]&&(ansObj.no7=n),"8"==e[n-1][1]&&(ansObj.no8=n),"9"==e[n-1][1]&&(ansObj.no9=n),"10"==e[n-1][1]&&(ansObj.no10=n);console.log("答案=>",ansObj),console.log("答案:",champion)}function initGuessAirArray(){guessAirArray={no1:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no2:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no3:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no4:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no5:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no6:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no7:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no8:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no9:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}},no10:{air1:{money:0},air2:{money:0},air3:{money:0},air4:{money:0},air5:{money:0},air6:{money:0},air7:{money:0},air8:{money:0},air9:{money:0},air10:{money:0}}}}function startMethod(){if(airTrend.innerHTML=html,(new Date).getSeconds()<11){airRnakList.style.opacity=0,airTopThree.style.opacity=0,airTopTen.style.opacity=0,playBoxBg.classList.add("start"),playBoxBg.style.animationDelay=`-${(new Date).getSeconds()}s`;for(let e=0;e<=air.length;e++)air[e].style.animation=`airNo1 ${secondsArr[e][0]}s linear`,air[e].style.animationDelay=`-${(new Date).getSeconds()}s`,setTimeout(()=>{air[e].style.opacity=0;var n=setInterval(timeMethod,1e3,n);playBoxBg.style.animationDelay="0s"},1e3*secondsArr[e][0]-1e3*(new Date).getSeconds())}else var e=setInterval(timeMethod,1e3,e)}function timeMethod(){if(countdownNumber=60-(new Date).getSeconds(),countdown.innerHTML=countdownNumber<10?"0"+countdownNumber:60==countdownNumber?"00":countdownNumber,0==(new Date).getSeconds()&&chkBtn.addEventListener("click",chkBtnFn),1==(new Date).getSeconds()){airRnakList.style.opacity=0,airTopThree.style.opacity=0,airTopTen.style.opacity=0,tenHtml="",betMoney=0,dollar.innerHTML=betMoney,playBoxBg.classList.add("start");for(let e=0;e<=air.length;e++)air[e].style.animation=`airNo1 ${secondsArr[e][0]}s linear`,setTimeout(()=>{air[e].style.opacity=0},1e3*secondsArr[e][0])}if(2==(new Date).getSeconds()&&shuffleArray(secondsArr),11==(new Date).getSeconds()&&(airRnakList.style.opacity=0,airTopThree.style.opacity=1,airTopTen.style.opacity=0,airTopThree.innerHTML=`<p>第一名:${beforeAnsObj.no1}</p><p>第二名:${beforeAnsObj.no2}</p><p>第三名:${beforeAnsObj.no3}</p>`),14==(new Date).getSeconds()){airRnakList.style.opacity=0,airTopThree.style.opacity=0,airTopTen.style.opacity=1;for(let e=1;e<=10;e++)tenHtml=tenHtml+beforeAnsObj["no"+e]+",";airTopTen.innerHTML=tenHtml}if(18==(new Date).getSeconds()&&(airTopThree.style.opacity=0,airTopTen.style.opacity=0,airTrend.innerHTML="",airTrend.innerHTML=tenHtml,airTopThree.style.opacity=0,airTopTen.style.opacity=0,airRnakList.style.opacity=1),19==(new Date).getSeconds()&&(hiddenRadioRank.checked=!1),20==(new Date).getSeconds()){playBoxBg.classList.remove("start");for(let e=0;e<=air.length;e++)air[e].style.opacity=1}if(30==(new Date).getSeconds())for(let e=0;e<=air.length;e++)air[e].style.animation="",air[e].style.opacity=1;if(55==(new Date).getSeconds())for(let e=1;e<=10;e++)"1"==secondsArr[e-1][1]&&(beforeAnsObj.no1=e),"2"==secondsArr[e-1][1]&&(beforeAnsObj.no2=e),"3"==secondsArr[e-1][1]&&(beforeAnsObj.no3=e),"4"==secondsArr[e-1][1]&&(beforeAnsObj.no4=e),"5"==secondsArr[e-1][1]&&(beforeAnsObj.no5=e),"6"==secondsArr[e-1][1]&&(beforeAnsObj.no6=e),"7"==secondsArr[e-1][1]&&(beforeAnsObj.no7=e),"8"==secondsArr[e-1][1]&&(beforeAnsObj.no8=e),"9"==secondsArr[e-1][1]&&(beforeAnsObj.no9=e),"10"==secondsArr[e-1][1]&&(beforeAnsObj.no10=e)}function chkBtnFn(){if(betMoney<=0)return void alert("您的下注金額為0,請先下注!");if(!hiddenRadioRank.checked)return void alert("您尚未下注");let e;if(confirm("確認下注?")){let e=1e3*(60-(new Date).getSeconds()+11);addMoney=0,console.log(e);for(let e=1;e<=10;e++)for(let n=1;n<=10;n++)guessAirArray["no"+e]["air"+n].money>0&&ansObj["no"+e]==n&&(addMoney+=guessAirArray["no"+e]["air"+n].money);return console.log("贏了=>",addMoney),console.log("總計=>",totalMoney),setTimeout(()=>{console.log("pk time"),myMoney.value=+myMoney.value+2*addMoney,balance.innerHTML=myMoney.value,axios.get(`./updateMoney.php?id=${myId.value}&money=${myMoney.value}`).then(e=>{console.log(e)})},e),initGuessAirArray(),void chkBtn.removeEventListener("click",chkBtnFn)}}shuffleArray(secondsArr),timeMethod(),startMethod(),chkBtn.addEventListener("click",chkBtnFn);const diamondFn=e=>{betMoney=+e.target.alt,dollar.innerHTML=betMoney};for(let e=0;e<diamondBtn.length;e++)diamondBtn[e].addEventListener("click",diamondFn);doubleBtn.addEventListener("click",()=>{if(myMoney.value<minusMoney)alert("餘額不足");else{for(let e=1;e<=10;e++)for(let n=1;n<=10;n++)guessAirArray["no"+e]["air"+n].money>0&&(guessAirArray["no"+e]["air"+n].money=2*guessAirArray["no"+e]["air"+n].money);myMoney.value=+(myMoney.value-minusMoney),balance.innerHTML=myMoney.value,minusMoney*=2,console.log(guessAirArray)}}),reBtn.addEventListener("click",()=>{for(let e=1;e<=10;e++)for(let n=1;n<=10;n++)guessAirArray["no"+e]["air"+n].money=0;myMoney.value=+myMoney.value+minusMoney,balance.innerHTML=myMoney.value,hiddenRadioRank.checked=!1,console.log(guessAirArray)});for(let e=0;e<gameBtn.length;e++)gameBtn[e].addEventListener("click",toggleGameFn);function toggleGameFn(){initGameDiv(),-1==this.src.indexOf("btnchk")?(this.src=this.src.replace("btn","btnchk"),document.getElementById(`game${this.id.split("gameBtn")[1]}`).style.display="block"):(this.src=this.src.replace("btnchk","btn"),document.getElementById(`game${this.id.split("gameBtn")[1]}`).style.display="block")}function initGameDiv(){for(let e=1;e<=5;e++)document.getElementById(`game${e}`).style.display="none",document.getElementById(`gameBtn${e}`).src=`../images/airplane/btn${e}.png`}for(let e=0;e<air.length;e++)air[e].addEventListener("click",betFn);function betFn(e){console.log(e.target)}function toggleRankingFn(e){initRankingFn(),console.log("目前名次=>",chooseRanking=e),document.getElementById(`rankingImg${e}`).src=`../images/airplane/no${e}chk.png`}function initRankingFn(){chooseRanking=0;for(let e=0;e<10;e++)document.getElementById("rankBtnBox").getElementsByClassName("rankingImg")[e].src=`../images/airplane/no${e+1}.png`}diamondBoxRight.addEventListener("click",()=>{for(let e=0;e<diamondBtn.length;e++)diamondBtn[e].style.transform="translateX(-300px)"}),diamondBoxLeft.addEventListener("click",()=>{for(let e=0;e<diamondBtn.length;e++)diamondBtn[e].style.transform="translateX(0px)"});for(let e=0;e<betAir.length;e++)betAir[e].addEventListener("click",betFn);function betFn(e){if(0==betMoney)return void alert("請選擇下注金額!");if(+myMoney.value<betMoney)return void alert("餘額不足!");minusMoney+=betMoney,myMoney.value=+myMoney.value-betMoney,balance.innerHTML=myMoney.value,hiddenRadioRank.checked=!0;let n=e.target.parentNode.getElementsByClassName("smallDiamond")[0];n.style.display="none",n.src=`../images/airplane/diamond${betMoney}.png`,n.style.display="block",setTimeout(()=>{n.style.display="none"},200);let o=e.target.alt;guessAirArray["no"+chooseRanking]["air"+o].money+=betMoney,console.log(guessAirArray["no"+chooseRanking]["air"+o].money)}bar.addEventListener("click",()=>{console.log(guessAirArray);let e=new URLSearchParams,n="yes";e.append("add",n),axios.post("../function/addAnswer.php",e).then(e=>{console.log(e)})});const audio=new Audio;audio.src="./click.mp3";for(let e=0;e<clickAudio.length;e++)clickAudio[e].addEventListener("click",()=>{audio.play()});