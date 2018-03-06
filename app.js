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
    switch (node_no)
    {
        case "node1":
            data1=data;
            ssid1=via;
            io.to("room01-nodeoptimizer").emit("node1",{'data':"Welcome to Node_Optimizer"});
            break;
        case "node2":
            data2=data;
            ssid2=via;
            io.to("room01-nodeoptimizer").emit('node2',{'data':"data2",'ssid':"ssid2"});
            break;
        case "node3":
            data3=data;
            ssid3=via;
            io.to("room01-nodeoptimizer").emit('node3',{'data':data3,'ssid':ssid3});
            break;
        case "node4":
            data4=data;
            ssid4=via;
            io.to("room01-nodeoptimizer").emit('node4',{'data':data4,'ssid':ssid4});
            break;
        case "node5":
            data5=data;
            ssid5=via;
            io.to("room01-nodeoptimizer").emit('node5',{'data':data5,'ssid':ssid5});
            break;
    }
    res.send("Data Received from "+req.query.data+" via"+req.query.via);
});

var server=http.listen(process.env.PORT || 5000,function(){
    console.log("server running in port "+(process.env.PORT || 5000));
});

