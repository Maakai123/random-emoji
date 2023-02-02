 const btnEL = document.getElementById("btn")
 const emojiNameEL = document.getElementById("emoji")


 const emoji = [];

 async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=421cecbfaeeb4a713c1cdcdd85426613727ae548")
     data = await response.json()
     for(let i=0; i< 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
        })
     }
}


getEmoji()

 btnEL.addEventListener("click", ()=> {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEL.innerText = emoji[randomNum].emojiName;
    emojiNameEL.innerText = emoji[randomNum].emojiCode;
 })

 //use emoji API for the above
