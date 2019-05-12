var words=["GOOGLE","MICROSOFT","ADOBE","TWITTER","PAYMATRIX","AMAZON","SAMSUNG",
            "IBM","APPLE","SNAPCHAT","ORACLE","FACEBOOK"];
const game=new Vue({
  el:"#words",
  data:{
    words:words
  }
});
var letters=[ 'B','X','I','R','T','A','M','Y','A','P','X','K',
              'O','B','Z','E','M','U','B','A','X','L','C','W',
              'J','Y','H','B','P','V','C','G','P','F','D','Y',
              'T','S','I','B','I','O','B','Z','A','P','Y','U',
              'F','A','J','O','Q','D','D','C','T','V','L','H',
              'O','M','N','J','O','J','E','O','A','T','N','E',
              'S','S','N','M','H','B','R','R','H','W','E','L',
              'O','U','R','O','O','E','N','A','C','I','B','T',
              'R','N','H','O','Z','T','Z','C','P','T','O','V',
              'C','G','K','W','F','A','Q','L','A','T','D','R',
              'I','H','L','R','S','I','M','E','N','E','A','O',
              'M','E','L','G','O','O','G','A','S','R','T','E'];

const letter=new Vue({
  el:"#boxOfLetters",
  data:{
    char:letters,
    num:0
  },
  methods:{
    identity: function(index){
      index=index+1;
      return "l"+index.toString();
    },
    // dark: function(event){
    //   if(event.target.className=="boxes")
    //   {
    //     if(event.target.style.backgroundColor=="tomato")
    //       event.target.style.backgroundColor="#db0000";
    //     else
    //       event.target.style.backgroundColor="tomato";
    //   }
    //   else {
    //     if(event.target.parentNode.style.backgroundColor=="tomato")
    //       event.target.parentNode.style.backgroundColor="#db0000";
    //     else
    //       event.target.parentNode.style.backgroundColor="tomato";
    //   }
    // }
  }
});

var ids=[];
for(let i=1;i<=letters.length;i++)
{
  var str="l"+i.toString();
  ids[i-1]=document.getElementById(str);
}

ids[1].parentNode.addEventListener("click",()=>{
  // console.log(ids[2].parentNode.style.backgroundColor);
   if(ids[2].parentNode.style.backgroundColor=="#db0000")
   console.log("hello");
  // {
  //     con=true;
  // }
  // else
  // {
  //   con=false;
  // }
  // if(con==false)
  // {
    // for(let i=2;i<=10;i++)
    // {
      // ids[1].parentNode.style.backgroundColor="lightgreen";
      // ids[2].parentNode.style.backgroundColor="lightgreen";
    // }
  // }
});


const main=document.querySelector("#boxOfLetters")
main.addEventListener("click",(event)=>{
    if(event.target.className=="boxes")
   {
     if(event.target.style.backgroundColor=="tomato")
     {
       event.target.style.backgroundColor="mediumvioletred";
       check(event);
     }
     else
     {
       event.target.style.backgroundColor="tomato";
       check(event);
     }
   }
   if(event.target.parentNode.className=="boxes"){
     if(event.target.parentNode.style.backgroundColor=="tomato")
     {
       event.target.parentNode.style.backgroundColor="mediumvioletred";
       check(event);
     }
     else
     {
       event.target.parentNode.style.backgroundColor="tomato";
       check(event);
     }
   }
})


function check(event){
  var con=true;
  for(let i=2;i<=10;i++)
  {
    if(ids[i-1].parentNode.style.backgroundColor!="mediumvioletred")
    {
      con=false;
      break;
    }
  }
  // console.log(ids[1].parentNode.style.backgroundColor);
  if(con==true)
  {
    for(let i=2;i<=10;i++)
    {
      ids[i-1].parentNode.style.backgroundColor="lightgreen";
    }
  }
}
