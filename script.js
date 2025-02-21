let text = document.querySelector("#text");
let delay = document.querySelector("#delay");
let submitBtn = document.querySelector("#btn");
let outputDiv = document.querySelector("#output");


submitBtn.addEventListener("click",fun2);

function fun1(){
	return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(text.value)
			},delay.value)
	})
}

async function fun2(){
	let delayedText = await fun1();
	outputDiv.innerText = delayedText;
}


// submitBtn.addEventListener('click',()=>{

// 	async function getDelayedInfo(){
// 		return new Promise((resolve,reject)=>{
// 			setTimeout(()=>{
// 				resolve(text.value)
// 			},delay.value)
// 		})
// 	}
	
// 	let delayedText = await getDelayedInfo();
// 	outputDiv.innerText = delayedText;
	
// })





