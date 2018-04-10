var express=require("express");
var app=express();
var bodyparser=require("body-parser");

var http=require('http').Server(app);
var io=require('socket.io')(http);

var data=0;
var data1=0,data2=0,data3=0,data4=0,data5=0;
var node_no="";
var ssid1="",ssid2="",ssid3="",ssid4="",ssid5="";
var vig1="",vig2="",vig3="",vig4="",vig5="",vig6="",vig7="";
var dude1="",dude2="",dude3="",dude4="",dude5="",dude6="",dude7="";
var r = 0;
var alpha = 0.5;

var thre = [];
thre.push([0.2,0.9]);
thre.push([0.4,0.7]);
thre.push([0.6,0.5]);
thre.push([0.8,0.3]);

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
        io.to("room01-nodeoptimizer").emit('node5',{'data':req.query.data,'ssid':req.query.via});
        var vignesh_wifi_len = req.query.vignesh;
        var dude_wifi_len = req.query.dude;
        vignesh_wifi_len /=100;
        dude_wifi_len /=100;
        var d1 = (((thre[0][0] - vignesh_wifi_len) * (thre[0][0] - vignesh_wifi_len)) +
            ((thre[1][0] - vignesh_wifi_len) * (thre[1][0] - vignesh_wifi_len)) +
            ((thre[2][0] - vignesh_wifi_len) * (thre[2][0] - vignesh_wifi_len)) +
            ((thre[3][0] - vignesh_wifi_len) * (thre[2][0] - vignesh_wifi_len))).toFixed(2);
        console.log(d1);

        var d2 = (((thre[0][1] - dude_wifi_len) * (thre[0][1] - dude_wifi_len)) +
            ((thre[1][1] - dude_wifi_len) * (thre[1][1] - dude_wifi_len)) +
            ((thre[2][1] - dude_wifi_len) * (thre[2][1] - dude_wifi_len)) +
            ((thre[3][1] - dude_wifi_len) * (thre[2][1] - dude_wifi_len))).toFixed(2);
        console.log(d2);
        var result='';
        if(d1<d2)
        {
            result='vignesh';
        }
        else
        {
            result='dude';
        }
        res.send(result);
    }
    else if(req.query.nodeno==='node2')
    {
        console.log("Sending data to socket for node 1");
        io.to("room01-nodeoptimizer").emit('node2',{'data':req.query.data,'ssid':req.query.via});
        var node_thre = [0,0,1,1];
        var d1 = ((thre[0][0] - node_thre[0]) * (thre[0][0] - node_thre[0])) +
            ((thre[1][0] - node_thre[1]) * (thre[1][0] - node_thre[1])) +
            ((thre[2][0] - node_thre[2]) * (thre[2][0] - node_thre[2])) +
            ((thre[3][0] - node_thre[3]) * (thre[2][0] - node_thre[3]));
        console.log(d1);

        var d2 = ((thre[0][1] - node_thre[0]) * (thre[0][1] - node_thre[0])) +
            ((thre[1][1] - node_thre[1]) * (thre[1][1] - node_thre[1])) +
            ((thre[2][1] - node_thre[2]) * (thre[2][1] - node_thre[2])) +
            ((thre[3][1] - node_thre[3]) * (thre[2][1] - node_thre[3]));
        console.log(d2);
        var result='';
        if(d1<d2)
        {
            result='vignesh';
            thre[0][0]=thre[0][1]+0.5*(node_thre[0] - thre[0][0]);
            thre[0][1]=thre[0][2]+0.5*(node_thre[1] - thre[0][1]);
            thre[0][2]=thre[0][3]+0.5*(node_thre[2] - thre[0][2]);
            thre[0][3]=thre[0][4]+0.5*(node_thre[3] - thre[0][3]);
        }
        else
        {
            result='dude';
            thre[1][0]=thre[1][1]+0.5*(node_thre[0] - thre[1][0]);
            thre[1][1]=thre[1][2]+0.5*(node_thre[1] - thre[1][1]);
            thre[1][2]=thre[1][3]+0.5*(node_thre[2] - thre[1][2]);
            thre[1][3]=thre[1][4]+0.5*(node_thre[3] - thre[1][3]);
        }
        res.send(result);
        res.send();
    }
    else if(req.query.nodeno==='node3')
    {
        console.log("Sending data to socket for node 1");
        io.to("room01-nodeoptimizer").emit('node3',{'data':req.query.data,'ssid':req.query.via});
        var node_thre = [1,0,0,0];
        var d1 = ((thre[0][0] - node_thre[0]) * (thre[0][0] - node_thre[0])) +
            ((thre[1][0] - node_thre[1]) * (thre[1][0] - node_thre[1])) +
            ((thre[2][0] - node_thre[2]) * (thre[2][0] - node_thre[2])) +
            ((thre[3][0] - node_thre[3]) * (thre[2][0] - node_thre[3]));
        console.log(d1);

        var d2 = ((thre[0][1] - node_thre[0]) * (thre[0][1] - node_thre[0])) +
            ((thre[1][1] - node_thre[1]) * (thre[1][1] - node_thre[1])) +
            ((thre[2][1] - node_thre[2]) * (thre[2][1] - node_thre[2])) +
            ((thre[3][1] - node_thre[3]) * (thre[2][1] - node_thre[3]));
        console.log(d2);
        var result='';
        if(d1<d2)
        {
            result='vignesh';
            thre[0][0]=thre[0][1]+0.5*(node_thre[0] - thre[0][0]);
            thre[0][1]=thre[0][2]+0.5*(node_thre[1] - thre[0][1]);
            thre[0][2]=thre[0][3]+0.5*(node_thre[2] - thre[0][2]);
            thre[0][3]=thre[0][4]+0.5*(node_thre[3] - thre[0][3]);
        }
        else
        {
            result='dude';
            thre[1][0]=thre[1][1]+0.5*(node_thre[0] - thre[1][0]);
            thre[1][1]=thre[1][2]+0.5*(node_thre[1] - thre[1][1]);
            thre[1][2]=thre[1][3]+0.5*(node_thre[2] - thre[1][2]);
            thre[1][3]=thre[1][4]+0.5*(node_thre[3] - thre[1][3]);
        }
        res.send(result);
    }
    else if(req.query.nodeno==='node4')
    {
        console.log("Sending data to socket for node 1");
        io.to("room01-nodeoptimizer").emit('node4',{'data':req.query.data,'ssid':req.query.via});
        var node_thre = [0,0,1,0];
        var d1 = ((thre[0][0] - node_thre[0]) * (thre[0][0] - node_thre[0])) +
            ((thre[1][0] - node_thre[1]) * (thre[1][0] - node_thre[1])) +
            ((thre[2][0] - node_thre[2]) * (thre[2][0] - node_thre[2])) +
            ((thre[3][0] - node_thre[3]) * (thre[2][0] - node_thre[3]));
        console.log(d1);

        var d2 = ((thre[0][1] - node_thre[0]) * (thre[0][1] - node_thre[0])) +
            ((thre[1][1] - node_thre[1]) * (thre[1][1] - node_thre[1])) +
            ((thre[2][1] - node_thre[2]) * (thre[2][1] - node_thre[2])) +
            ((thre[3][1] - node_thre[3]) * (thre[2][1] - node_thre[3]));
        console.log(d2);
        var result='';
        if(d1<d2)
        {
            result='vignesh';
            thre[0][0]=thre[0][1]+0.5*(node_thre[0] - thre[0][0]);
            thre[0][1]=thre[0][2]+0.5*(node_thre[1] - thre[0][1]);
            thre[0][2]=thre[0][3]+0.5*(node_thre[2] - thre[0][2]);
            thre[0][3]=thre[0][4]+0.5*(node_thre[3] - thre[0][3]);
        }
        else
        {
            result='dude';
            thre[1][0]=thre[1][1]+0.5*(node_thre[0] - thre[1][0]);
            thre[1][1]=thre[1][2]+0.5*(node_thre[1] - thre[1][1]);
            thre[1][2]=thre[1][3]+0.5*(node_thre[2] - thre[1][2]);
            thre[1][3]=thre[1][4]+0.5*(node_thre[3] - thre[1][3]);
        }
        res.send(result);
    }
    else if(req.query.nodeno==='node5')
    {
        console.log("Sending data to socket for node 1");
        io.to("room01-nodeoptimizer").emit('node5',{'data':req.query.data,'ssid':req.query.via});
        var node_thre = [0,0,0,1];
        var d1 = parseFloat((((thre[0][0] - node_thre[0]) * (thre[0][0] - node_thre[0])) +
            ((thre[1][0] - node_thre[1]) * (thre[1][0] - node_thre[1])) +
            ((thre[2][0] - node_thre[2]) * (thre[2][0] - node_thre[2])) +
            ((thre[3][0] - node_thre[3]) * (thre[2][0] - node_thre[3]))).toString()).toFixed(2);
        console.log(d1);

        var d2 = parseFloat((((thre[0][1] - node_thre[0]) * (thre[0][1] - node_thre[0])) +
            ((thre[1][1] - node_thre[1]) * (thre[1][1] - node_thre[1])) +
            ((thre[2][1] - node_thre[2]) * (thre[2][1] - node_thre[2])) +
            ((thre[3][1] - node_thre[3]) * (thre[2][1] - node_thre[3]))).toString()).toFixed(2);
        console.log(d2);
        var result='';
        if(d1<d2)
        {
            result='vignesh';
            thre[0][0]=parseFloat((thre[0][1]+0.5*(node_thre[0] - thre[0][0])).toString()).toFixed(2);
            thre[0][1]=parseFloat((thre[0][2]+0.5*(node_thre[1] - thre[0][1])).toString()).toFixed(2);
            thre[0][2]=parseFloat((thre[0][3]+0.5*(node_thre[2] - thre[0][2])).toString()).toFixed(2);
            thre[0][3]=parseFloat((thre[0][4]+0.5*(node_thre[3] - thre[0][3])).toString()).toFixed(2);
        }
        else
        {
            result='dude';
            thre[1][0]=parseFloat((thre[1][1]+0.5*(node_thre[0] - thre[1][0])).toString()).toFixed(2);
            thre[1][1]=parseFloat((thre[1][2]+0.5*(node_thre[1] - thre[1][1])).toString()).toFixed(2);
            thre[1][2]=parseFloat((thre[1][3]+0.5*(node_thre[2] - thre[1][2])).toString()).toFixed(2);
            thre[1][3]=parseFloat((thre[1][4]+0.5*(node_thre[3] - thre[1][3])).toString()).toFixed(2);
        }
        res.send(result);
    }
});

var server=http.listen(process.env.PORT || 5000,function(){
    console.log("server running in port "+(process.env.PORT || 5000));
});

