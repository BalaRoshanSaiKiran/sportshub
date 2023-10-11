import React from 'react'
import './CSS/Badminton.css'
const Badminton = () => {
  let pname1;
  let pname2;
  let gamepoint=21;
  let player1score=0;
  let player2score=0;
  function penaltyt1(){
      player1score=player1score-1;
      document.getElementById('badmintonscore1').innerHTML=player1score;
      document.getElementById('badmintonscore2').innerHTML=player2score;
  }
  function penaltyt2(){
      player2score=player2score-1;
      document.getElementById('badmintonscore1').innerHTML=player1score;
      document.getElementById('badmintonscore2').innerHTML=player2score;
  }
  function playersnames(){
      pname1=document.getElementById('team1').value;
      pname2=document.getElementById('team2').value;
      document.getElementById('1name').innerHTML=pname1;
      document.getElementById('2name').innerHTML=pname2;
  }
  function badmintonscorecard1(){
      if(player1score<gamepoint-2){
          player1score=player1score+1;
      }
      else if(player1score===19 && player2score===20){
          player2score=player2score-1;
      }
      else if(player1score<21 && player2score<19){
          player1score=player1score+1;
      }
      else if(player1score===19 && player2score===19){
          player1score=player1score+1;
      }
      else if(player1score===20 && player2score===19){
          player1score=player1score+1;
      }
      if(player1score===21){
          document.getElementById('badmintonresult').innerHTML=pname1+" Wins";
      }
      document.getElementById('badmintonscore1').innerHTML=player1score;
      document.getElementById('badmintonscore2').innerHTML=player2score;
  }
  function badmintonscorecard2(){
      if(player2score<gamepoint-2){
          player2score=player2score+1;
      }
      else if(player2score===19 && player1score===20){
          player1score=player1score-1;
      }
      else if(player2score<21 && player1score<19){
          player2score=player2score+1;
      }
      else if(player2score===19 && player1score===19){
          player2score=player2score+1;
      }
      else if(player2score===20 && player1score===19){
          player2score=player2score+1;
      }
      if(player2score===21){
          document.getElementById('badmintonresult').innerHTML=pname2+" Wins";
      }
      document.getElementById('badmintonscore1').innerHTML=player1score;
      document.getElementById('badmintonscore2').innerHTML=player2score;
  }
  return (
    <div id="Badminton-main-div">
      <div id="gamevarient1title">
        <h1>Badminton</h1>
      </div>
      <div id="entry">
          <table id="entrytable">
              <tr>
                  <td><i>Team1 Name</i></td>
              </tr>
              <tr>
                  <td><input type="text" id="team1"/></td>
              </tr>
              <tr>
                  <td>VS</td>
              </tr>
              <tr>
                  <td><i>Team2 Name</i></td>
              </tr>
              <tr>
                  <td><input type="text" id="team2" /></td>
              </tr>
              <tr>
                  <td><button onClick={playersnames}>Enter</button></td>
              </tr>
          </table>
        </div>
        <div id="badminton2scorediv">
        <i id="pointstype">21 Points Game</i>
        <table>
            <tr id="badmintonrows">
                <td id="badmintontabledata"><p class="p1name" id="1name">player1name</p></td>
                <td id="badmintontabledata"><i>VS</i></td>
                <td id="badmintontabledata"><p class="p2name" id="2name">player2name</p></td>
            </tr>
            <tr>

            </tr>
            <tr id="badmintonrows">
                <td id="badmintontabledata"><button id="badmintonscore1">0</button></td>
                <td id="badmintontabledata"></td>
                <td id="badmintontabledata"><button  id="badmintonscore2">0</button></td>
            </tr>
            <tr>

            </tr>
            <tr id="badmintonrows">
                <td><button id="p1p" onClick={badmintonscorecard1}>Point</button></td>
                <td></td>
                <td><button id="p2p" onClick={badmintonscorecard2}>Point</button></td>
            </tr>
            <tr>

            </tr>
            <tr id="badmintonrows">
                <td ><button id="p1p1" onClick={penaltyt1}>penaltyt1</button></td>
                <td></td>
                <td><button id="p2p2" onClick={penaltyt2}>penaltyt2</button></td>
            </tr>
            <tr>

            </tr>
            <tr id="badmintonrows">
                <td></td>
                <td><button id="result"><p id="badmintonresult">Game is going on</p></button></td>
                <td></td>
            </tr>
        </table>
        </div>
    </div>
  )
}

export default Badminton