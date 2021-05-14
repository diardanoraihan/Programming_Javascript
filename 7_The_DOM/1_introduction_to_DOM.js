function showAlert(){
    window.alert("I'm alerting you to the fact that the body has been loaded")
}

console.log(document);
console.log("--------------------");
console.log(document.body)

// it will overwrite the content in the HTML body tag
// document.body.innerText = "Something Else";
// document.body.innerHTML = "<h1>Something Else</h1>"

const myTag = document.getElementsByTagName("p")
for (const p of myTag){
    console.log(p.innerHTML);
}