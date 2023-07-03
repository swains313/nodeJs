const http=require('http');


const server=http.createServer((request,response)=>{
    // console.log(request);
    if(request.url === '/'){
        // response.write();
        response.end('Welcome to Home page');
    }
    if(request.url === '/about'){
        response.end('Welcome to About page');
    }
    response.end(`
    <h1>oops!! 404</h1> <br/>
    <a href="/">Back Home</a>
    `)
});


server.listen(8000);