var initialismArr = [
  "ADN",
  "A/W",
  "A3",
  "AAB",
  "AAF",
  "AAK",
  "AAMOF",
  "AAP",
  "AAR",
  "AAT",
  "AAWY",
  "ASL?",
  "ASLP?",
  "AWHFY?",
  "AYFKMWTS?",
  "AYFR?",
  "AYFT?",
  "AYKM?",
  "AYL?",
  "AYPI?",
  "AYS?",
  "AYSOS?",
  "AYT?",
  "BU2M?",
  "BWTHDIK?",
  "CIHY?",
  "CYBI?",
  "DAE?",
  "DIC?",
  "DIKU?",
  "DIKY?",
  "DILLIC?",
  "DILLIGAD?",
  "DITYID?",
  "DTMS?",
  "DUCWIC?",
  "DUCY?",
  "DULM?",
  "DYHWIH?",
  "DYJHIW?",
  "DYK?",
  "DYKWIM?",
  "DYLM?",
  "DYLM?",
  "DYM?",
];

var spellOutArr = [
  "Any day now",
  "Anyway",
  "Anytime, anywhere, anyplace",
  "Average at best",
  "Always and forever",
  "Alive and kicking",
  "As a matter of fact",
  "Always a pleasure",
  "At any rate",
  "All the times",
  "And also with you",
  "Age? Sex? Location?",
  "Age, sex, location, picture?",
  "Are we having fun yet?",
  "Are you fucking kidding me with this shit?",
  "Are you for real?",
  "Are you free today?",
  "Are you kidding me?",
  "Are you listening?",
  "And your point is?",
  "Are you serious?",
  "Are you stupid or something?",
  "Are you there?",
  "Been up to much?",
  "But what the heck do I know?",
  "Can I help you?",
  "Can you believe it?",
  "Does anybody else…?",
  "Do I care?",
  "Do I know you?",
  "Do I know you?",
  "Does it look like I care?",
  "Do I look like I give a darn?",
  "Did I tell you I’m depressed?",
  "Does that make sense?",
  "Do you see what I see?",
  "Do you see why?",
  "Do you love me?",
  "Do you hear what I hear?",
  "Don’t you just hate it when…?",
  "Did you know?",
  "Do you know what I mean?",
  "Do you love me?",
  "Do you like me?",
  "Do you mind?",
];

var totalQuestionNum = initialismArr.length;
var interrogationContainer = document.getElementById("interrogation-container");
var randomIndexArr = [];
var wifiStatus = "online";
console.log(wifiStatus);

// on load
function leftMsg() {
  var createLeftSpeechBubble = document.createElement("div");
  var leftMessageContainer = document.createElement("span");

  createLeftSpeechBubble.className = "left-speech-bubble";

  createLeftSpeechBubble.appendChild(leftMessageContainer);
  interrogationContainer.appendChild(createLeftSpeechBubble);

  var randomIndex = Math.floor(Math.random() * (totalQuestionNum - 1) + 1);
  if (wifiStatus == "offline") {
    leftMessageContainer.innerText = spellOutArr[[randomIndex]];
    leftMessageContainer.classList.add('speech-bubbles-offline');
    leftMessageContainer.style.backgroundColor = 'transparent';
    leftMessageContainer.style.color = 'black';
  } else if (wifiStatus == "online") {
    leftMessageContainer.innerText = initialismArr[[randomIndex]];
    leftMessageContainer.classList.remove('speech-bubbles-offline');
    leftMessageContainer.style.color = 'white';
  }
  randomIndexArr.push(randomIndex);

  console.log(randomIndexArr);

  interrogationContainer.scrollTop = interrogationContainer.scrollHeight;
}

function rightMsg() {
  var createRightSpeechBubble = document.createElement("div");
  var rightMessageContainer = document.createElement("span");

  createRightSpeechBubble.className = "right-speech-bubble";

  createRightSpeechBubble.appendChild(rightMessageContainer);
  interrogationContainer.appendChild(createRightSpeechBubble);

  var randomIndex = Math.floor(Math.random() * (totalQuestionNum - 1) + 1);
  if (wifiStatus == "offline") {
    rightMessageContainer.innerText = spellOutArr[[randomIndex]];
    rightMessageContainer.classList.add('speech-bubbles-offline');
    rightMessageContainer.style.backgroundColor = 'transparent';
    rightMessageContainer.style.color = 'black';
  } else if (wifiStatus == "online") {
    rightMessageContainer.innerText = initialismArr[[randomIndex]];
    rightMessageContainer.classList.remove('speech-bubbles-offline');
    rightMessageContainer.style.color = 'white';
  }
  randomIndexArr.push(randomIndex);

  console.log(randomIndexArr);

  interrogationContainer.scrollTop = interrogationContainer.scrollHeight;
}

const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
  let timeout;

  const runInterval = () => {
    const timeoutFunction = () => {
      intervalFunction();
      runInterval();
    };

    const delay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    timeout = setTimeout(timeoutFunction, delay);
  };

  runInterval();

  return {
    clear() {
      clearTimeout(timeout);
    },
  };
};

setRandomInterval(leftMsg, 100, 5000);
setRandomInterval(rightMsg, 100, 5000);

// const rightInternval = setRandomInterval(rightMsg, 10, 5000);
// rightInternval.clear();

// convert all message to initialisms or spell-outs
function translateToInitialisms() {
  // turn all messages into initialisms (online)
  var allMessageContainers = document.querySelectorAll(
    "#interrogation-container span"
  );
  for (var i = 0; i < allMessageContainers.length; i++) {
    allMessageContainers[i].innerText = initialismArr[randomIndexArr[i]];
    allMessageContainers[i].style.removeProperty('background-color');
    allMessageContainers[i].style.removeProperty('color');
    allMessageContainers[i].classList.remove('speech-bubbles-offline');
  }
}

function translateToSpellOuts() {
  // turn all messages into spell-outs (offline)
  var allMessageContainers = document.querySelectorAll(
    "#interrogation-container span"
  );
  for (var i = 0; i < allMessageContainers.length; i++) {
    allMessageContainers[i].innerText = spellOutArr[randomIndexArr[i]];
    allMessageContainers[i].style.backgroundColor = 'transparent';
    allMessageContainers[i].style.color = 'black';
    allMessageContainers[i].classList.add('speech-bubbles-offline');
  }
}

var wifiOffSignal = document.getElementById("wifi-off-signal");

function onlineOfflineToggle() {
  window.addEventListener("offline", (e) => {
    wifiStatus = "offline";
    console.log(wifiStatus);
    translateToSpellOuts();
    wifiOffSignal.style.bottom = '-20vh';
    interrogationContainer.style.height = '100vh';
    interrogationContainer.scrollTop = interrogationContainer.scrollHeight;
  });

  window.addEventListener("online", (e) => {
    wifiStatus = "online";
    console.log(wifiStatus);
    translateToInitialisms();
    wifiOffSignal.style.bottom = '0vh';
    interrogationContainer.style.height = '80vh';
    interrogationContainer.scrollTop = interrogationContainer.scrollHeight;
  });
}

onlineOfflineToggle();

var wtfResponseArr = [
  // "The FBI compiled an internal 83-page guide to internet slang and released it publicly under the Freedom of Information Act request.",
  // "Toggle your Wi-Fi to read translations of these internet slangs put together by the FBI.",
  // "The FBI put together a guide to internet slang",
  // "woooah",
  'The',
  'FBI',
  'put',
  'together',
  'a',
  'guide',
  'to',
  'internet',
  'slang.',
  'Turn',
  'off',
  'your',
  'WiFi',
  'to',
  'see',
  'what',
  'they',
  'mean'
];

// var queryContainer = document.getElementById('query-container');
// var queryArr = [
//   "WTF?",
//   "TMM",
//   "WDYM?",
// ];
var responseIndex = 0;

function wtf() {
  var sendButton = document.getElementById("wtf-button");
  // var randomQueryIndex = Math.floor((Math.random() * queryArr.length));  
  // queryContainer.innerText = queryArr[randomQueryIndex];

  sendButton.addEventListener("click", function () {
    var createRightSpeechBubble = document.createElement("div");
    var rightMessageContainer = document.createElement("p");

    createRightSpeechBubble.className = "right-speech-bubble";

    createRightSpeechBubble.appendChild(rightMessageContainer);
    interrogationContainer.appendChild(createRightSpeechBubble);

    rightMessageContainer.innerText = "WTF?";
    // randomQueryIndex = Math.floor((Math.random() * queryArr.length));  
    // queryContainer.innerText = queryArr[randomQueryIndex];
    // rightMessageContainer.innerText = queryArr[randomQueryIndex];  

    setTimeout(function () {
      var createLeftSpeechBubble = document.createElement("div");
      var leftMessageContainer = document.createElement("p");

      createLeftSpeechBubble.className = "left-speech-bubble";

      createLeftSpeechBubble.appendChild(leftMessageContainer);
      interrogationContainer.appendChild(createLeftSpeechBubble);

      // var randomResponseIndex = Math.floor((Math.random() * wtfResponseArr.length));
      // leftMessageContainer.innerText = wtfResponseArr[randomResponseIndex];  
      leftMessageContainer.innerText = wtfResponseArr[responseIndex];  
      responseIndex = responseIndex + 1;
      if (responseIndex == wtfResponseArr.length) {
        responseIndex = 0;
      }
      interrogationContainer.scrollTop = interrogationContainer.scrollHeight;
    }, 500);

    interrogationContainer.scrollTop = interrogationContainer.scrollHeight;
  });
}

wtf();
