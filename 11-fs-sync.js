const { readFile,  writeFile } =require('fs');


console.log('start');
readFile('./content/first.txt','utf-8',(error,result)=>{
    if(error){
        console.log(error);
        return;
    }
    // console.log(result);
    const first=result;
    
    readFile('./content/second.txt','utf8',(error,result)=>{
        if(error){
            console.log(error);
            return;
        }
        const second =result;

        writeFile('./content/result-sync.txt',
         `Here the resullt ${ first}, ${second}`,(error,result)=>{
            if(error){
                console.log(error);
                return;
            }
            console.log(result);
            console.log("done with the task");

         });
    })
});
console.log("starting the next task");






