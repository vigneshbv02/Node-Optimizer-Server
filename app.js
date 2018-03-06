var express=require("express");
var app=express();
var bodyparser=require("body-parser");

var http=require('http').Server(app);
var io=require('socket.io')(http);

var data=0;
var data1=0,data2=0,data3=0,data4=0,data5=0;
var node_no="";
var ssid1="",ssid2="",ssid3="",ssid4="",ssid5="";

app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

io.on("connection",function(socket)
{
    console.log("A user connected:" + socket.id);
    socket.join("room01-nodeoptimizer");
    socket.emit("notify",{'message':"Welcome to Node_Optimizer"});
});


app.get('/',function(req,res){
    res.send("Welcome to Node Optimizer");
});

app.get('/node',function(req,res){
    console.log(req.query.data);
    console.log(req.query.via);
    console.log(req.query.nodeno);
    if(req.query.nodeno==='node1')
    {
        console.log("Sending data to socket for node 1");
        io.to("room01-nodeoptimizer").emit('node1',{'data':"Grocery level is LOW",'ssid':"nodeoptimizer"});
    }
    else if(req.query.nodeno==='node2')
    {
        console.log("Sending data to socket for node 1");
        io.to("room01-nodeoptimizer").emit('node2',{'data':"Grocery level is LOW",'ssid':"nodeoptimizer"});
    }
    res.send("Data Received from "+req.query.data+" via"+req.query.via);
});

var server=http.listen(process.env.PORT || 5000,function(){
    console.log("server running in port "+(process.env.PORT || 5000));
});

