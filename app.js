var express=require("express");
var app=express();
var bodyparser=require("body-parser");

var http=require('http').Server(app);
var io=require('socket.io')(http);

var data=0;
var data1=0,data2=0,data3=0,data4=0,data5=0,;
var node_no="";
var ssid1="",ssid2="",ssid3="",ssid4="",ssid5="",;

app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

app.get('/',function(req,res){
    res.send("Welcome to Node Optimizer");
});

app.get('/node',function(req,res){
    console.log(req.query.data);
    console.log(req.query.via);
    console.log(req.query.node_no);
    switch (node_no)
    {
        case "node1":
            data1=data;
            ssid1=via;
            break;
        case "node2":
            data2=data;
            ssid2=via;
            break;
        case "node3":
            data3=data;
            ssid3=via;
            break;
        case "node4":
            data4=data;
            ssid4=via;
            break;
        case "node5":
            data5=data;
            ssid5=via;
            break;
    }
    res.send("Data Received from "+req.query.data+" via"+req.query.via);
});

var server=http.listen(process.env.PORT || 5000,function(){
    console.log("server running in port "+(process.env.PORT || 5000));
});

