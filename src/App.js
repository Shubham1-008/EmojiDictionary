import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "❤": "Green Heart",
  "💔": "Broken Heart",
  "❣": "Red dot cute Heart",
  "💕": "Couple Heart",
  "💞": "Couple Ring Heart",
  "💓": "Beating Heart",
  "💖": "Glittering Heart",
  "💘": "Romantic Arrow Heart",
  "💝": "Gifty Heart",
  "💟": "Heart Over a Letter"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    if (userInput in emojiDictionary) {
      var meaning = emojiDictionary[userInput];
      setMeaning(meaning);
    } else if (userInput === "") {
      setMeaning("You have not entered an emoji");
    } else {
      setMeaning("Sorry! we don't have this in our database");
    }

    // console.log(emojiDictionary[userInput]);
    // var meaning = emojiDictionary[userInput];
    // console.log(meaning);
    // setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div>Check the Heart Emoji </div>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning}</h2>
      <div>
        {emojisWeKnow.map(function (emoji) {
          return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
        })}
      </div>
    </div>
  );
}
