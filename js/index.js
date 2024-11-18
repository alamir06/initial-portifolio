

document.querySelector(".about").addEventListener("click",function ()
{
  var names=prompt("what is your name?");
  if(names===""||names===null)
  {
    alert("you are robot");
  }
  else{
    about();
  }
});

function about()
{
    alert("Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        "Lorem Ipsum has been the industry's standard dummy tex")
   
}