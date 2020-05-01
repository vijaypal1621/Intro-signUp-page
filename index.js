const input=document.querySelector("input");
const log=document.querySelector("#id");
input.addEventListener("invalid",logValue);

function logValue(e){
	log.textContent +=e.target.value;
}