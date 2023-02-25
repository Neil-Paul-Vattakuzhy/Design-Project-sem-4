const http=require('http')
const fs=require('fs')
const port=3000

const server=http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type' : 'text/html'})
  fs.readFile('index.html',function(error){
    if(error){
      res.writeHead(404)
    }
    else{
      res.write('hello')
    }
    res.end()
  })
  
})
server.listen(port,function(error){
  if(error){
    console.log('oops ')
  }
  else{
    console.log('Connected to '+port)
  }
})