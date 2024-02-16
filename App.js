import logo from './logo.svg';
import { useState } from "react";
import './App.css';

const phrases = [
"No",
"Are you sure?",
"Really sure?",
"Really really sure?",
"Oh man, let's try this another time",
"Huh, still a no?!",
"Don't do this to me",
"I'm gonna cry... :(",
"You're breaking my heart",
"How many more times you want to reject??",
"HOI STOP AH",
"Enough is enough",
"Oki fine... let's just not be tgt then"
];


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 11;
  const [buttonPosition, setButtonPosition] = useState({x:0, y:0});

  function handleNoClick() {
    setNoCount(noCount + 1);

    const buttonWidth = 100; // Adjust this value based on your button size
    const buttonHeight = 40; // Adjust this value based on your button size
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;
  
    // Calculate random position within the container bounds
    const newX = Math.max(0, Math.min(maxX, Math.random() * maxX));
    const newY = Math.max(0, Math.min(maxY, Math.random() * maxY));
              
    setButtonPosition({
      x: newX,
      y: newY
    });
  }

  function getNoButtontext() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }


  return (
    <div className="CoolApp">
      <header className="CoolApp-header">
      {yesPressed ? (
        <>
          <img
            alt = "walking telegram baby"
            src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2h0OHBsaXU5Z3d4b2RyaDQxaXllb2Mza3hsemVuM3NxZXAwZW9waCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SxVXoh2OWM5O9mxxgk/source.gif"

          />
            <div className = "text">Congrats! Boomer boyfriend +1!! </div>
            <p className = "CoolApp-para"> Bad news... you've just gained another boomer in life hehe</p>
            <body className = "CoolApp-body"> 
            Jokes aside, this has been a vvv long time coming. It hasn't been easy for us, 
            but its easy to find joy & comfort in your presence. Most importantly, cos its you... 
            second to falling asleep before you every night HAHAHA </body>

            <p className = "CoolApp-para2"> No guarantees we won't have further disagreements, 
            but I'll value and work on our differences till they become our strengths as a couple. 
            Thank you for being a joy </p>
            <p className = "CoolApp-line"> Happy Valentine's Day again!! </p>
        </>
      ) : (
        <>
          <img
            alt = "asking with smile telegram sticker"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHdoaWtwbGkxdWxvYXo3bTNicXByajFtMnl4MjJ4N3p0YWpqaXZqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IyrnyTn9liIcX2PD5F/source.gif"
            className="App-logo"  
          />

          <div> 
            Do you want to be my girlfriend?
          </div>

          <div>
            <button
              className = "yesButton"
              style = {{fontSize: yesButtonSize, 
                        backgroundColor: 'aquamarine',
                        marginRight: 80
                      }}
              onClick = {() => setYesPressed(true)}
            > 
              Yes
            </button>

            <button onClick = {handleNoClick}
              className = "noButton"
              style = {{backgroundColor: 'pink',
                        transform:`translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
            }}
            >
              {getNoButtontext()}


            </button>
          </div>

      </>            

      )}
      </header>
    </div>


  );
}



export default App;
