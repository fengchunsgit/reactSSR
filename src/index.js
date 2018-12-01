const express=require('express')
const app=express();
const Home=require('./containers/Home')

app.get('/',function(req,res){
  res.send(`
  <html>
  <h1>hello</h1>
  </html>`
  );
});

var server=app.listen(3000);