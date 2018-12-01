var express=require(express)

var app=express();

app.get('/',function(req,res){
  res.send(`
  <html>
  <h1>hello</h1>
  </html>
  `);
});

var server=app.listen(3000);