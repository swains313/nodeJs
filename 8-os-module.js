const os=require('os');

// console.log(os);

//info about current user
const user=os.userInfo()
console.log(user);



//method returns the system up time in seconds
console.log(`The System up time is ${os.uptime()} seconds`);

const currentOs ={
    name: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(currentOs);
console.log(currentOs.name);
console.log(currentOs.totalMemory);
console.log(currentOs.freeMemory);