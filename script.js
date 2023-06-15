//*About Me*//
function showHide(){
	let paragraph=document.getElementById("more");	
	let link=document.getElementById("link");
	if(paragraph.classList.contains("hidden")){
	link.innerHTML="See Less";
	paragraph.classList.remove("hidden");
}else {paragraph.classList.add("hidden");
	link.innerHTML="See More";
}}


function showHide2(){
	let paragraph=document.getElementById("mores");	
	let link=document.getElementById("links");
	if(paragraph.classList.contains("hidden")){
	link.innerHTML="See Less";
	paragraph.classList.remove("hidden");
}else {paragraph.classList.add("hidden");
	link.innerHTML="See More";
}}
//*Quiz*//
function displayResults(){
    let resultsDiv=document.getElementById("results");
    resultsDiv.classList.remove("hidden");
    let questionOne=document.getElementById("q1").value.toLowerCase();
    let questionTwo=document.getElementById("q2").value.toLowerCase();
    let questionThree=document.getElementById("q3").value.toLowerCase();
    let questionFour=document.getElementById("q4").value.toLowerCase();
   
    //**let button=document.getElementById("Grade").click;**//
   
    score = 0;
    let a1=document.getElementById("a1");
    let a2=document.getElementById("a2");
    let a3=document.getElementById("a3");
    let a4=document.getElementById("a4");
   
    if (questionOne == "java script") {
        resultsDiv.innerHTML += "<p>" + "Question  1 - " + "Correct";
        score = score + 1;
    }
   
    else {
        resultsDiv.innerHTML += "<p>" + "Question  1 - " + "Incorrect";
    }
   
    if (questionTwo == "sir tim berners-lee") {
        resultsDiv.innerHTML += "<p>" + "Question  2 - " + "Correct";
        score = score + 1;
    }
   
    else {
        resultsDiv.innerHTML += "<p>" + "Question  2 - " + "Incorrect";
    }
   
    if (questionThree == "body section") {
        resultsDiv.innerHTML += "<p>" + "Question  3 - " + "Correct";
        score = score + 1;
    }
   
    else {
        resultsDiv.innerHTML += "<p>" + "Question  3 - " + "Incorrect";
    }
   
    if (questionFour == "hyperlink") {
        resultsDiv.innerHTML += "<p>" + "Question  4 - " + "Correct";
        score = score + 1;
    }
   
    else {
        resultsDiv.innerHTML += "<p>" + "Question  4 - " + "Incorrect";
    }
   
    resultsDiv.innerHTML += "Score: " + score + "/4;"
}
