const { readFileSync,writeFileSync } =require('fs');

// const fs=require('fs');
// fs.readFileSync()


console.log('start');


const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

// console.log(first);
// console.log(second);

//if the file is not present it will automatically craate the file
// writeFileSync('./content/result-sync.txt',
// `Here is the result ${first}, ${second}`);

//it will prevent the previous file data (only add new data)
writeFileSync('./content/result-sync.txt',
`Here is the result ${first}, ${second}`,{flag: 'a'});

//const result=readFileSync('./content/result-sync.txt','utf8');

// console.log(result);

console.log("done with the task");
console.log("starting the next task");





