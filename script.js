function addRecommendation(){

let name=document.getElementById("name").value;
let message=document.getElementById("message").value;

if(name=="" || message=="")
{
alert("Please fill all the fields.");
return;
}

let div=document.createElement("div");

div.className="recommendation";

div.innerHTML="<b>"+name+"</b><br><br>"+message;

document.getElementById("recommendation-list").appendChild(div);

alert("Thank you for leaving a recommendation!");

document.getElementById("name").value="";
document.getElementById("message").value="";

}