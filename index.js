let highScore = 0
let gamble = function(){
const l = ["=","$","7","&","?","!"]
let n = 6
let r = []
let s = "["
let money = 0
for(let i = 0;i<n;i++){
  k = l[Math.floor(Math.random()*l.length)]
  s += k
  if(i+1<n){
    s+="|"
  }
  r.push(k)
}
s+="]"
console.log(s)
let bBar = 0
let b7 = 0
let bCherry = 0
let bQ = 0
let bE = 0
for(i in r){
  switch(r[i]){
    case "=":
      bBar++
      money+=bBar*5
      console.log("BAR:" + bBar + " Money added:" + bBar*5)
    break;
    case "$":
      money+=10
      console.log("$$$. Money added:" + 10)
    break;
    case "7":
      b7++
      if(b7>=3){
        money+=15*b7
        console.log("777:" + b7 + " Money added:" + 15*b7)
      }else{
        console.log("777:" + b7 + " 7's needed:" + (3-b7))
      }
    break;
    case "?":
      bQ++
      money+=bE*8
      console.log("?:" + bQ + " !:" + bE + " Money added:" + bE*8)
    break;
    case "&":
      bCherry++
      money+=bCherry^3
      console.log("Cherry:" + bCherry + " Money added:" + (bCherry^3))
    break;
    case "!":
      bE++
      money+=bQ*8
      console.log("!:" + bE + " ?:" + bQ + " Money added:" + bQ*8)
    break;
  
  }
  console.log(money)
}
console.log("\n")
  if(highScore<money){
    highScore=money
    console.log("NEW HIGH SCORE!!!\n=======\n"+highScore+"\n=======")
  }else{
    console.log("High score: "+highScore+"\n")
  }
}
document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    gamble
  }
}
