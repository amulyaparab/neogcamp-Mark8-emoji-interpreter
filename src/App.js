import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🗻": "Mount Fuji",
  "🎍": "Bamboo/Tanabata",
  "🚅": "Bullet Train",
  "😏": "Smirk",
  "🥴": "Drunk Face",
  "😵": "That's Unbelievable! Face",
  "🤯": "Mind Blown",
  "🥺": "Please",
  "🧐": "Inspect",
  "🧇": "Waffle",
  "🥨": "Pretzel",
  "🥐": "Crossaint",
  "🥜": "Peanuts",
  "🍱": "Bento/Japanese Tiffin",
  "🍜": "Ramen/ Noodles",
  "🦪": "Oyster",
  "🥢": "Chopsticks",
  "🍶": "Sake/Rice Wine",
  "🍥": "Fish-cake",
  "🥞": "Pancake",
  "🙉": "Hai Ramm",
  "🙊": "Baapre",
  "🙈": "Blush",
  "🦟": "Macchar",
  "🌙": "Chaand",
  "🍁": "Maple Leaf/ Canada",
  "🦠": "Microbe",
  "🌋": "Volcano",
  "🏖️": "Beach",
  "💢": "Anger",
  "♨️": "Onsen/Hot springs",
  "🎐": "Wind Chimes",
  "⚱️": "Funeral Urn",
  "🗿": "Stoic",
  "🎎": "Japanese Dolls",
  "🧿": "Nazar Amulet",
  "⚰️": "Coffin"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userEmojiInput = event.target.value;

    var meaning = emojiDictionary[userEmojiInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <body style={{ backgroundColor: "#ddd6fe", padding: "4rem" }}>
      <div className="App">
        <h1>Emoji Interpreter</h1>
        <input
          style={{ padding: "0.5rem 2rem", fontSize: "1rem", margin: "0.8rem" }}
          placeholder="Search your emoji here"
          onChange={emojiInputHandler}
        />

        <h2 style={{ color: "#4c1d95" }}> {meaning}</h2>

        {/* <h3></h3> */}
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              style={{
                fontSize: "2rem",
                padding: "0.5rem",
                cursor: "pointer",
                display: "inline-block"
              }}
              onClick={() => {
                emojiClickHandler(emoji);
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </body>
  );
}
