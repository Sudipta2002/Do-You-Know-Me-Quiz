var readlineSync = require('readline-sync');
var score=0;
var level=0;

var userName=readlineSync.question("What is your name ? ");

console.log("Welcome Mr. "+userName+" to DO YOU KNOW Me quiz");

var question=[{quest:"Where do I live ?\n 1.Siliguri\n2.Kolkata\n3.Bengalore",ans:"Kolkata"},{quest:" What's my favourite food ?\n1.Biriyani\n2.ChiliChicken\n3.Momo ",ans:"Biriyani"},{quest:" What I prefer most tea/coffee ? ",ans:"Tea"},{quest:" Which platform do I code the most Leetcode/GFG? ",ans:"Leetcode"}];

function guess(question,ans){
  var userAns=readlineSync.question(question);
  if(userAns==ans){
    score=score+1;
    console.log("Right ans !! ");
  }else{
    score=score-1;
    console.log("Wrong ans !! ");
  }
  console.log("Current score "+score);
  console.log("------------------------");
}

for(var i=0;i<question.length;i++){
  guess(question[i].quest,question[i].ans);
}

if(score>2){
  level=level+2;
}else{
  level=level+1;
}
console.log("Your score is : "+score+"\n You have reached level "+level);

