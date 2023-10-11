import React from 'react'
import './CSS/Kabaddi.css'
import { useState } from 'react';
const Kabaddi = () => {
  const[player1t1p1,setnamet1p1]=useState(0);
  const[player2t1p1,setnamet1p2]=useState(0)
  const[player3t1p1,setnamet1p3]=useState(0)
  const[player4t1p1,setnamet1p4]=useState(0)
  const[player5t1p1,setnamet1p5]=useState(0)
  const[player6t1p1,setnamet1p6]=useState(0)
  const[player7t1p1,setnamet1p7]=useState(0)
  const[player8t1p1,setnamet1p8]=useState(0)
  const[player9t1p1,setnamet1p9]=useState(0)
  const[player10t1p1,setnamet1p10]=useState(0)
  const[player1t2p1,setnamet2p1]=useState(0)
  const[player2t2p1,setnamet2p2]=useState(0)
  const[player3t2p1,setnamet2p3]=useState(0)
  const[player4t2p1,setnamet2p4]=useState(0)
  const[player5t2p1,setnamet2p5]=useState(0)
  const[player6t2p1,setnamet2p6]=useState(0)
  const[player7t2p1,setnamet2p7]=useState(0)
  const[player8t2p1,setnamet2p8]=useState(0)
  const[player9t2p1,setnamet2p9]=useState(0)
  const[player10t2p1,setnamet2p10]=useState(0)
  const[team1score,setnamet1s]=useState(0);
  const[team2score,setnamet2s]=useState(0);
  let team1name;
  let team2name;
  let player1t1;
  let player2t1;
  let player3t1;
  let player4t1;
  let player5t1;
  let player6t1;
  let player7t1;
  let player8t1;
  let player9t1;
  let player10t1;
  let player1t2;
  let player2t2;
  let player3t2;
  let player4t2;
  let player5t2;
  let player6t2;
  let player7t2;
  let player8t2;
  let player9t2;
  let player10t2;
  function penaltyt1(){
    setnamet1s(team1score-1);
  }
  function penaltyt2(){
      setnamet2s(team2score-1);
  }
  function onepointT1(){
    setnamet1s(team1score+1);
  }
  function twopointT1(){
    setnamet1s(team1score+2);
  }
  function threepointT1(){
    setnamet1s(team1score+3);
  }
  function fourpointT1(){
    setnamet1s(team1score+4);
  }
  function somepointT1(){
      let s=document.getElementById('somepointt1').value;
      setnamet1s(team1score+parseInt(s));
  }
  function onepointT2(){
    setnamet2s(team2score+1);
  }
  function twopointT2(){
    setnamet2s(team2score+2);
  }
  function threepointT2(){
    setnamet2s(team2score+3);
  }
  function fourpointT2(){
    setnamet2s(team2score+4);
  }
  function somepointT2(){
      let ss=document.getElementById('somepointt2').value;
      setnamet2s(team2score+parseInt(ss));
  }
  function scoreoneteamone(){
      let one=document.getElementById('t1p11').value;
      setnamet1p1(player1t1p1+parseInt(one));
      document.getElementById('t1p1').innerHTML=player1t1p1;
  }
  function scoretwoteamone(){
      let two=document.getElementById('t1p22').value;
      setnamet1p2(player2t1p1+parseInt(two));
      document.getElementById('t1p2').innerHTML=player2t1p1;
  }
  function scorethreeteamone(){
      let three=document.getElementById('t1p33').value;
      setnamet1p3(player3t1p1+parseInt(three));
      document.getElementById('t1p3').innerHTML=player3t1p1;
  }
  function scorefourteamone(){
      let four=document.getElementById('t1p44').value;
      setnamet1p4(player4t1p1+parseInt(four));
      document.getElementById('t1p4').innerHTML=player4t1p1;
  }
  function scorefiveteamone(){
      let five=document.getElementById('t1p55').value;
      setnamet1p5(player5t1p1+parseInt(five));
      document.getElementById('t1p5').innerHTML=player5t1p1;
  }
  function  scoresixteamone(){
      let six=document.getElementById('t1p66').value;
      setnamet1p6(player6t1p1+parseInt(six));
      document.getElementById('t1p6').innerHTML=player6t1p1;
  }
  function  scoreseventeamone(){
      let seven=document.getElementById('t1p77').value;
      setnamet1p7(player7t1p1+parseInt(seven));
      document.getElementById('t1p7').innerHTML=player7t1p1;
  }
  function  scoreeightteamone(){
      let eight=document.getElementById('t1p88').value;
      setnamet1p8(player8t1p1+parseInt(eight));
      document.getElementById('t1p8').innerHTML=player8t1p1;
  }
  function  scorenineteamone(){
      let nine=document.getElementById('t1p99').value;
      setnamet1p9(player9t1p1+parseInt(nine));
      document.getElementById('t1p9').innerHTML=player9t1p1;
  }
  function  scoretenteamone(){
      let ten=document.getElementById('t1p1010').value;
      setnamet1p10(player10t1p1+parseInt(ten));
      document.getElementById('t1p10').innerHTML=player10t1p1;
  }
  function scoreoneteamtwo(){
      let onetwo=document.getElementById('t2p11').value;
      setnamet2p1(player1t2p1+parseInt(onetwo));
      document.getElementById('t2p1').innerHTML=player1t2p1;
  }
  function scoretwoteamtwo(){
      let twotwo=document.getElementById('t2p22').value;
      setnamet2p2(player2t2p1+parseInt(twotwo));
      document.getElementById('t2p2').innerHTML=player2t2p1;
  }
  function scorethreeteamtwo(){
      let threetwo=document.getElementById('t2p33').value;
      setnamet2p3(player3t2p1+parseInt(threetwo));
      document.getElementById('t2p3').innerHTML=player3t2p1;
  }
  function scorefourteamtwo(){
      let fourtwo=document.getElementById('t2p44').value;
      setnamet2p4(player4t2p1+parseInt(fourtwo));
      document.getElementById('t2p4').innerHTML=player4t2p1;
  }
  function scorefiveteamtwo(){
      let fivetwo=document.getElementById('t2p55').value;
      setnamet2p5(player5t2p1+parseInt(fivetwo));
      document.getElementById('t2p5').innerHTML=player5t2p1;
  }
  function  scoresixteamtwo(){
      let sixtwo=document.getElementById('t2p66').value;
      setnamet2p6(player6t2p1+parseInt(sixtwo));
      document.getElementById('t2p6').innerHTML=player6t2p1;
  }
  function  scoreseventeamtwo(){
      let seventwo=document.getElementById('t2p77').value;
      setnamet2p7(player7t2p1+parseInt(seventwo));
      document.getElementById('t2p7').innerHTML=player7t2p1;
  }
  function  scoreeightteamtwo(){
      let eighttwo=document.getElementById('t2p88').value;
      setnamet2p8(player8t2p1+parseInt(eighttwo));
      document.getElementById('t2p8').innerHTML=player8t2p1;
  }
  function  scorenineteamtwo(){
      let ninetwo=document.getElementById('t2p99').value;
      setnamet2p9(player9t2p1+parseInt(ninetwo));
      document.getElementById('t2p9').innerHTML=player9t2p1;
  }
  function  scoretenteamtwo(){
      let tentwo=document.getElementById('t2p1010').value;
      setnamet2p10(player10t2p1+parseInt(tentwo));
      document.getElementById('t2p10').innerHTML=player10t2p1;
  }
  function submit(){
    changename()
  }
  function changename(){
      team1name=document.getElementById('team1').value;
      document.getElementById('defaultname1').innerHTML=team1name;
      team2name=document.getElementById('team2').value;
      document.getElementById('defaultname2').innerHTML=team2name;
  }
  function playersnames(){
    changeplayersnames()
  }
  function changeplayersnames(){
      player1t1=document.getElementById('p1t1').value;
      document.getElementById('p1t1n1').innerHTML=player1t1;
      player2t1=document.getElementById('p2t1').value;
      document.getElementById('p2t1n2').innerHTML=player2t1;
      player3t1=document.getElementById('p3t1').value;
      document.getElementById('p3t1n3').innerHTML=player3t1;
      player4t1=document.getElementById('p4t1').value;
      document.getElementById('p4t1n4').innerHTML=player4t1;
      player5t1=document.getElementById('p5t1').value;
      document.getElementById('p5t1n5').innerHTML=player5t1;
      player6t1=document.getElementById('p6t1').value;
      document.getElementById('p6t1n6').innerHTML=player6t1;
      player7t1=document.getElementById('p7t1').value;
      document.getElementById('p7t1n7').innerHTML=player7t1;
      player8t1=document.getElementById('p8t1').value;
      document.getElementById('p8t1n8').innerHTML=player8t1;
      player9t1=document.getElementById('p9t1').value;
      document.getElementById('p9t1n9').innerHTML=player9t1;
      player10t1=document.getElementById('p10t1').value;
      document.getElementById('p10t1n10').innerHTML=player10t1;
      player1t2=document.getElementById('p1t2').value;
      document.getElementById('p1t2n1').innerHTML=player1t2;
      player2t2=document.getElementById('p2t2').value;
      document.getElementById('p2t2n2').innerHTML=player2t2;
      player3t2=document.getElementById('p3t2').value;
      document.getElementById('p3t2n3').innerHTML=player3t2;
      player4t2=document.getElementById('p4t2').value;
      document.getElementById('p4t2n4').innerHTML=player4t2;
      player5t2=document.getElementById('p5t2').value;
      document.getElementById('p5t2n5').innerHTML=player5t2;
      player6t2=document.getElementById('p6t2').value;
      document.getElementById('p6t2n6').innerHTML=player6t2;
      player7t2=document.getElementById('p7t2').value;
      document.getElementById('p7t2n7').innerHTML=player7t2;
      player8t2=document.getElementById('p8t2').value;
      document.getElementById('p8t2n8').innerHTML=player8t2;
      player9t2=document.getElementById('p9t2').value;
      document.getElementById('p9t2n9').innerHTML=player9t2;
      player10t2=document.getElementById('p10t2').value;
      document.getElementById('p10t2n10').innerHTML=player10t2;
  }
  // let timerInterval
  // const[timeInSeconds,setnametimeInSeconds]=useState(1200); // 20 minutes
  // const timerDisplay = document.getElementById("timer");
  // const startButton = document.getElementById("start");
  // const pauseButton = document.getElementById("pause");
  // const resetButton = document.getElementById("reset");
  // function updateTimerDisplay() {
  //     const minutes = Math.floor(timeInSeconds / 60);
  //     const seconds = timeInSeconds % 60;
  //     timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  // }
  // function startTimer() {
  //     timerInterval = setInterval(() => {
  //         timelimit++;
  //         if(timelimit===30){
  //             timelimit=0;
  //         }
  //         if (timeInSeconds > 0) {
  //             timeInSeconds--;
  //             updateTimerDisplay();
  //             document.getElementById('team1score').innerHTML=team1score;
  //             document.getElementById('team2score').innerHTML=team2score;
  //             document.getElementById('riderlimit').innerHTML=timelimit;
  //         } else {
  //             clearInterval(timerInterval);
  //             if(team1score>team2score){
  //                 document.getElementById('result1').innerHTML=team1name.concat(" ","wins");
  //             }
  //             else{
  //                 document.getElementById('result1').innerHTML=team2name.concat(" ","wins");
  //             }
  //             alert("Game Over!"); // You can customize this message
  //         }
  //     }, 1000);
  // }
  // let timelimit;
  // startButton.addEventListener("click", ()=>{
  //     timelimit=0;
  //     startTimer();
  // });

  // pauseButton.addEventListener("click", () => {
  //     clearInterval(timerInterval);
  // });

  // resetButton.addEventListener("click", () => {
  //     clearInterval(timerInterval);
  //     timeInSeconds = 1200; // Reset to 20 minutes
  //     timelimit=0;
  //     setnamet1p1(0);
  //     setnamet1p2(0);
  //     setnamet1p3(0);
  //     setnamet1p4(0);;
  //     setnamet1p5(0);
  //     setnamet1p6(0);
  //     setnamet1p7(0);
  //     setnamet1p8(0);
  //     setnamet1p9(0);
  //     setnamet1p10(0);
  //     setnamet2p1(0);
  //     setnamet2p2(0);
  //     setnamet2p3(0);
  //     setnamet2p4(0);
  //     setnamet2p5(0);
  //     setnamet2p6(0);
  //     setnamet2p7(0);
  //     setnamet2p8(0);
  //     setnamet2p9(0);
  //     setnamet2p10(0);
  //     updateTimerDisplay();
  // });
  return (
    <div id="Kabaddi-main-div">
      <div id="Kabaddi-main-div2">
            <h2>Start a match</h2>
            <fieldset>
                <legend>Team Details</legend>
                    <h3>Enter Team1 name :</h3>
                    <input id="team1" type="text" placeholder="Team1 name" required/>
                    <h3>Enter team2 name :</h3>
                    <input id="team2" type="text" placeholder="Team2 name" required/>
                    <button onClick={submit}>Enter</button>
                    <div id="playersmainnamesdiv">
                        <div id="teamplayersdiv">
                            <div id="Team1-div">
                                <i>Team1 Players</i>
                                <input type="text" id="p1t1" placeholder="player1name"/>
                                <input type="text" id="p2t1" placeholder="player2name"/>
                                <input type="text" id="p3t1" placeholder="player3name"/>
                                <input type="text" id="p4t1" placeholder="player4name"/>
                                <input type="text" id="p5t1" placeholder="player5name"/>
                                <input type="text" id="p6t1" placeholder="player6name"/>
                                <input type="text" id="p7t1" placeholder="player7name"/>
                                <input type="text" id="p8t1" placeholder="player8name"/>
                                <input type="text" id="p9t1" placeholder="player9name"/>
                                <input type="text" id="p10t1" placeholder="player10name"/>
                            </div>
                            <div id="Team2-div">
                                <i>Team2 Players</i>
                                <input type="text" id="p1t2" placeholder="player1name"/>
                                <input type="text" id="p2t2" placeholder="player2name"/>
                                <input type="text" id="p3t2" placeholder="player3name"/>
                                <input type="text" id="p4t2" placeholder="player4name"/>
                                <input type="text" id="p5t2" placeholder="player5name"/>
                                <input type="text" id="p6t2" placeholder="player6name"/>
                                <input type="text" id="p7t2" placeholder="player7name"/>
                                <input type="text" id="p8t2" placeholder="player8name"/>
                                <input type="text" id="p9t2" placeholder="player9name"/>
                                <input type="text" id="p10t2" placeholder="player10name"/>
                            </div>
                        </div>
                        <div>
                            <button onClick={playersnames}>Submit</button>
                        </div>
                    </div>
            </fieldset>
        </div>
        <div>
          <div id="time">
            <div id="timer">00:00</div>
            <div id="timer-buttons">
              <button id="start">Start</button>
              <button id="pause">Pause</button>
              <button id="reset">Reset</button>
            </div>
          </div>
        </div>
        <div id="scorecarddiv">
            <table>
                <tr>
                    <td><button id="team1score">00</button><p id="defaultname1"><b>Team1 Name</b></p></td>
                    <td id="vs"><i id="i-vs">VS</i></td>
                    <td align="right"><button id="team2score">00</button><p id="defaultname2"><b>Team2 Name</b></p></td>
                </tr>
                <tr>
                    <td id="scorebuttondata"><button id="scorebutton" onClick={onepointT1}><b>1</b></button><button id="scorebutton" onClick={twopointT1}><b>2</b></button><button id="scorebutton" onClick={threepointT1}><b>3</b></button><button id="scorebutton" onClick={fourpointT1}><b>4</b></button></td>
                    <td id="riderlimit-td"><button id="riderlimit">00</button></td>
                    <td id="scorebuttondata1"><button id="scorebutton" onClick={onepointT2}><b>1</b></button><button id="scorebutton" onClick={twopointT2}><b>2</b></button><button id="scorebutton" onClick={threepointT2}><b>3</b></button><button id="scorebutton" onClick={fourpointT2}><b>4</b></button></td>
                </tr>
                <tr>
                    <td><input type="number" id="somepointt1"/><button id="somepointbutton1" onClick={somepointT1}>Enter</button></td>
                    <td></td>
                    <td id="somepointt2-td"><input type="number" id="somepointt2"/><button id="somepointbutton2" onClick={somepointT2}>Enter</button></td>
                </tr>
                <tr>
                    <td><button id="penaltybutton1" onClick={penaltyt1}>T1Penalty</button></td>
                    <td></td>
                    <td id="penaltybutton-td"><button id="penaltybutton2" onClick={penaltyt2}>T2Penalty</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td id="result"><button id="result1">Game is going on</button></td>
                    <td id="playerofmatch-td"><button id="mvp">Player Of The Match is ....</button></td>
                </tr>
            </table>
        </div>
        <div id="playersindividualscore">
            <div>
                <p class="pname" id="p1t1n1">player1team1 : </p><button class="individualscore" id="t1p1">0</button><input type="number" class="ip" id="t1p11"/><button onClick={scoreoneteamone} id="">Point</button>
                <p class="pname" id="p2t1n2">player2team1 : </p><button class="individualscore" id="t1p2">0</button><input type="number" class="ip" id="t1p22"/><button onClick={scoretwoteamone} id="">Point</button>
                <p class="pname" id="p3t1n3">player3team1 : </p><button class="individualscore" id="t1p3">0</button><input type="number" class="ip" id="t1p33"/><button onClick={scorethreeteamone} id="">Point</button>
                <p class="pname" id="p4t1n4">player4team1 : </p><button class="individualscore" id="t1p4">0</button><input type="number" class="ip" id="t1p44"/><button onClick={scorefourteamone} id="">Point</button>
                <p class="pname" id="p5t1n5">player5team1 : </p><button class="individualscore" id="t1p5">0</button><input type="number" class="ip" id="t1p55"/><button onClick={scorefiveteamone} id="">Point</button>
                <p class="pname" id="p6t1n6">player6team1 : </p><button class="individualscore" id="t1p6">0</button><input type="number" class="ip" id="t1p66"/><button onClick={scoresixteamone} id="">Point</button>
                <p class="pname" id="p7t1n7">player7team1 : </p><button class="individualscore" id="t1p7">0</button><input type="number" class="ip" id="t1p77"/><button onClick={scoreseventeamone} id="">Point</button>
                <p class="pname" id="p8t1n8">player8team1 : </p><button class="individualscore" id="t1p8">0</button><input type="number" class="ip" id="t1p88"/><button onClick={scoreeightteamone} id="">Point</button>
                <p class="pname" id="p9t1n9">player9team1 : </p><button class="individualscore" id="t1p9">0</button><input type="number" class="ip" id="t1p99"/><button onClick={scorenineteamone} id="">Point</button>
                <p class="pname" id="p10t1n10">player10team1 : </p><button class="individualscore" id="t1p10">0</button><input type="number" class="ip" id="t1p1010"/><button onClick={scoretenteamone} id="">Point</button>
            </div>
            <div>
                <p class="pname" id="p1t2n1">player1team2 : </p><button class="individualscore" id="t2p1">0</button><input type="number" class="ip" id="t2p11"/><button onClick={scoreoneteamtwo} id="">Point</button>
                <p class="pname" id="p2t2n2">player2team2 : </p><button class="individualscore" id="t2p2">0</button><input type="number" class="ip" id="t2p22"/><button onClick={scoretwoteamtwo} id="">Point</button>
                <p class="pname" id="p3t2n3">player3team2 : </p><button class="individualscore" id="t2p3">0</button><input type="number" class="ip" id="t2p33"/><button onClick={scorethreeteamtwo} id="">Point</button>
                <p class="pname" id="p4t2n4">player4team2 : </p><button class="individualscore" id="t2p4">0</button><input type="number" class="ip" id="t2p44"/><button onClick={scorefourteamtwo} id="">Point</button>
                <p class="pname" id="p5t2n5">player5team2 : </p><button class="individualscore" id="t2p5">0</button><input type="number" class="ip" id="t2p55"/><button onClick={scorefiveteamtwo} id="">Point</button>
                <p class="pname" id="p6t2n6">player6team2 : </p><button class="individualscore" id="t2p6">0</button><input type="number" class="ip" id="t2p66"/><button onClick={scoresixteamtwo} id="">Point</button>
                <p class="pname" id="p7t2n7">player7team2 : </p><button class="individualscore" id="t2p7">0</button><input type="number" class="ip" id="t2p77"/><button onClick={scoreseventeamtwo} id="">Point</button>
                <p class="pname" id="p8t2n8">player8team2 : </p><button class="individualscore" id="t2p8">0</button><input type="number" class="ip" id="t2p88"/><button onClick={scoreeightteamtwo} id="">Point</button>
                <p class="pname" id="p9t2n9">player9team2 : </p><button class="individualscore" id="t2p9">0</button><input type="number" class="ip" id="t2p99"/><button onClick={scorenineteamtwo} id="">Point</button>
                <p class="pname" id="p10t2n10">player10team2 : </p><button class="individualscore" id="t2p10">0</button><input type="number" class="ip" id="t2p1010"/><button onClick={scoretenteamtwo} id="">Point</button>
            </div>
        </div>
    </div>
  )
}

export default Kabaddi