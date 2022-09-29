const messages = [
  "Baby really hurt me, crying in the taxi",
  "He don't wanna know me",
  "Says he made the big mistake of dancing in my storm",
  "Says it was poison",
  "So I guess I'll go home",
  "Into the arms of the girl that I love",
  "The only love I haven't screwed up",
  "She's so hard to please, but she's a forest fire",
  "I do my best to meet her demands, play at romance, we slow dance",
  "In the living room, but all that a stranger would see",
  "Is one girl swaying alone, stroking her cheek",
  "They say, You are a little much for me",
  "You are a liability",
  "You are a little much for me",
  "So they pull back, make other plans",
  "I understand, I am a liability",
  "Get you wild  make you leave",
 " I am a little much for e-a-na-na-na, everyone",
];
const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
};
module.exports = {
    funnyCommit
}; 
