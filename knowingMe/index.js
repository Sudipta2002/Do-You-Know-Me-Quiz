var readlineSync = require('readline-sync');
var score=0;
var level=0;
var userName=readlineSync.question("What is your name ? ");

console.log("Welcome Mr. "+userName+" to DO YOU KNOW me quiz");

var question=[{quest:" Where do you live ?",ans:"Kolkata"},{quest:" What's your favourite food ? ",ans:"Biriyani"},{quest:" What do you prefer tea/coffee ?",ans:"Tea"},{quest:" Which platform do you code the most leetcode/gfg",ans:"leetcode"}];

for(var i=0;i<question.length;i++){

  var userAns=readlineSync.question(question[i].quest);
  if(userAns==question[i].ans){
    score=score+1;
    console.log("Right ans !! ");
  }else{
    score=score-1;
    console.log("Wrong ans !! ");
  }

}
if(score>2){
  level=level+2;
}else{
  level=level+1;
}
console.log("Your score is : "+score+" You have reached level "+level);

