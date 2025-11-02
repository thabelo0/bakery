document.body.style.backgroundColor = "steelblue";
const button = document.getElementById('puu');
const container = document.createElement('div');

const inputField = document.createElement('input');
inputField.style.backgroundColor = 'orange';
inputField.style.height = '26px'


 const title = document.createElement('h2');
 title.innerHTML = "yee"
 title.style.fontFamily = 'tahoma';
 title.style.fontSize = '20px';


 const bgButton = document.createElement('button');
 bgButton.style.backgroundColor = 'red';
 bgButton.style.height = '30px';
 bgButton.style.width = '60px';
 bgButton.innerHTML = 'action'


 bgButton.addEventListener("click",()=>{
    document.body.style.backgroundColor = 'pink'
 });

 const textButton = document.createElement('button');
 textButton.style.height = '30px';
 textButton.style.width = "60px";
 textButton.style.backgroundColor = 'pink'
 textButton.innerHTML = 'pink'

 textButton.addEventListener("click",()=>{
    document.body.style.backgroundColor = 'lightblue'
 })

document.body.append(container,inputField,bgButton,textButton,title);




    
