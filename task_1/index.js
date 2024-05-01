import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)



// const mappedData = data.map (item => {
// const mappeditem ={};

let mappedData = encoded.reduce((acc, item) => {
let mappedItem= {};
for (let key in item){
if(translations [item[key]]) {
mappedItem[key] =translations[item[key]];
}else {
mappedItem[key]=item[key];
}
}
acc.push(mappedItem);
return acc;
},[]
);
console.log(mappedData)