const http = require('http')
const port = 3000
const server = http.createServer(function(req,res){

})
 server.listen(port,function(error){
    if(error){
        console.log('oops',error)
    }
    else{
        console.log('Server is listening on port ' +port)
    }
 })