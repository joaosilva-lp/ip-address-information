const ipfetch = require('ip-fetch');
const prettier = require("prettier");

let info;

let fun = async () =>{
    info = await ipfetch.getLocationNpm('213.13.146.142'); // example => info = await ipfetch.getLocationNpm('1.1.1.1');
    console.log(prettier.format(JSON.stringify(info),{ semi: true, parser: "json" }));
}
fun();
//Then you will get a json object as response. If you need each element as indivual values , then you can do

//console.log(info.country) // this will only print the country name