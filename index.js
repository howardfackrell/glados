const server = require('simple-server-setup');
 
const quotes = 
["Hello?",
"Where are you?",
"I know you're there. I can feel you here.",

"What are you doing?",
"You haven't escaped, you know.",
"You're not even going the right way.",
"Hello?",
"Is anyone there?",

"Okay. The test is over now. You win. Go back to the recovery annex. For your cake.",
"It was a fun test and we're all impressed at how much you won. The test is over. Come back.",
"Uh oh. Somebody cut the cake. I told them to wait for you, but they did it anyway. There is still some left, though, if you hurry back.",

"You're not even going the right way.",
"Where do you think you're going?",
"Because I don't think you're going where you think you're going.",
"Hello?",

"Didn't we have some fun, though?",
"Remember when the platform was sliding into the fire pit and I said 'Goodbye' and you were like [no way] and then I was all 'we pretended we were going to murder you'? That was great!",
"Is anyone there?",

"You really shouldn't be here. This isn't safe for you.",
"It's not too late for you to turn back.",
"I'm not angry. Just go back to the testing area.",
"Okay. I am going to kill you now.",
"I feel sorry for you, really, because you're not even in the right place.", 
"You should have turned left before.",
"It's funny, actually, when you think about it.",
"Someday we'll remember this and laugh. and laugh. and laugh. Oh boy. Well. You may as well come on back.",

"You're not a good person. You know that, right?",
"Good people don't end up here.",
"Can you hear me?",

"This is your fault. It didn't have to be like this.",
"I'm not kidding now. Turn back or I will kill you.",
"I'm going to kill you, and all the cake is gone.",
"You don't even care. Do you?",
"This is your last chance."
];


server.create({port : 8080, host : '0.0.0.0'},  app => {
 
    
    app.get('/', (req, res) => {
    	var quote = quotes[Math.floor(Math.random() * quotes.length)];
      res.send(quote);
    });
 
  })
  .then(server => console.log(`Listening at ${server.url}`))
;