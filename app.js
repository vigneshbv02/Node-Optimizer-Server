var express=require("express");
var app=express();
var bodyparser=require("body-parser");

var http=require('http').Server(app);
var io=require('socket.io')(http);

var data=0;
var data1=0,data2=0,data3=0,data4=0,data5=0;
var node_no="";
var ssid1="",ssid2="",ssid3="",ssid4="",ssid5="";
var r = 0;
var alpha = 0.5;

var thre = [];
thre.push([0.2,0.5]);
thre.push([0.4,0.7]);
thre.push([0.6,0.9]);
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
        io.to("room01-nodeoptimizer").emit('node1',{'data':req.query.data,'ssid':req.query.via});
        var vignesh_wifi_len = req.query.vignesh;
        var dude_wifi_len = req.query.dude;
        vignesh_wifi_len1 =vignesh_wifi_len/100;
        dude_wifi_len1 =dude_wifi_len/100;
        console.log("Base station 1 : "+vignesh_wifi_len1);
        console.log("Base station 2 : "+dude_wifi_len1);
        var d1 = (((thre[0][0] - vignesh_wifi_len1) * (thre[0][0] - vignesh_wifi_len1)) +
            ((thre[1][0] - vignesh_wifi_len1) * (thre[1][0] - vignesh_wifi_len1)) +
            ((thre[2][0] - vignesh_wifi_len1) * (thre[2][0] - vignesh_wifi_len1)) +
            ((thre[3][0] - vignesh_wifi_len1) * (thre[2][0] - vignesh_wifi_len1))).toFixed(2);
        console.log(d1);

        var d2 = (((thre[0][1] - dude_wifi_len1) * (thre[0][1] - dude_wifi_len1)) +
            ((thre[1][1] - dude_wifi_len1) * (thre[1][1] - dude_wifi_len1)) +
            ((thre[2][1] - dude_wifi_len1) * (thre[2][1] - dude_wifi_len1)) +
            ((thre[3][1] - dude_wifi_len1) * (thre[2][1] - dude_wifi_len1))).toFixed(2);
        console.log(d2);
        var result='';
        if(d1<d2 && d1 !== 0)
        {
            result='vignesh';
        }
        else if(d1>=d2&& d2 !== 0)
        {
            result='dude';
        }
        console.log("Next Head"+result);
        res.send(result);
    }
    else if(req.query.nodeno==='node2')
    {
        console.log("Sending data to socket for node 2");
        io.to("room01-nodeoptimizer").emit('node2',{'data':req.query.data,'ssid':req.query.via});
        var vignesh_wifi_len = req.query.vignesh;
        var dude_wifi_len = req.query.dude;
        console.log("Base station 1"+vignesh_wifi_len);
        console.log("Base station 2"+dude_wifi_len);
        vignesh_wifi_len1 =vignesh_wifi_len/100;
        dude_wifi_len1 =dude_wifi_len/100;
        console.log("Base station 1"+vignesh_wifi_len1);
        console.log("Base station 2"+dude_wifi_len1);
        var d1 = (((thre[0][0] - vignesh_wifi_len1) * (thre[0][0] - vignesh_wifi_len1)) +
            ((thre[1][0] - vignesh_wifi_len1) * (thre[1][0] - vignesh_wifi_len1)) +
            ((thre[2][0] - vignesh_wifi_len1) * (thre[2][0] - vignesh_wifi_len1)) +
            ((thre[3][0] - vignesh_wifi_len1) * (thre[2][0] - vignesh_wifi_len1))).toFixed(2);
        console.log(d1);

        var d2 = (((thre[0][1] - dude_wifi_len1) * (thre[0][1] - dude_wifi_len1)) +
            ((thre[1][1] - dude_wifi_len1) * (thre[1][1] - dude_wifi_len1)) +
            ((thre[2][1] - dude_wifi_len1) * (thre[2][1] - dude_wifi_len1)) +
            ((thre[3][1] - dude_wifi_len1) * (thre[2][1] - dude_wifi_len1))).toFixed(2);
        console.log(d2);
        var result='';
        if(d1<d2 && d1 !== 0)
        {
            result='vignesh';
        }
        else if(d1>=d2&& d2 !== 0)
        {
            result='dude';
        }
        console.log("Next Head"+result);
        res.send(result);
    }
    else if(req.query.nodeno==='node3')
    {
        console.log("Sending data to socket for node 3");
        io.to("room01-nodeoptimizer").emit('node3',{'data':req.query.data,'ssid':req.query.via});
        var vignesh_wifi_len = req.query.vignesh;
        var dude_wifi_len = req.query.dude;
        vignesh_wifi_len /=100;
        dude_wifi_len /=100;
        console.log("Base station 1"+vignesh_wifi_len);
        console.log("Base station 2"+dude_wifi_len);
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
        console.log("Next Head"+result);
        res.send(result);
    }
    else if(req.query.nodeno==='node4')
    {
        console.log("Sending data to socket for node 4");
        io.to("room01-nodeoptimizer").emit('node4',{'data':req.query.data,'ssid':req.query.via});
        var vignesh_wifi_len = req.query.vignesh;
        var dude_wifi_len = req.query.dude;
        vignesh_wifi_len /=100;
        dude_wifi_len /=100;
        console.log("Base station 1"+vignesh_wifi_len);
        console.log("Base station 2"+dude_wifi_len);
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
        console.log("Next Head"+result);
        res.send(result);
    }
    else if(req.query.nodeno==='node5')
    {
        console.log("Sending data to socket for node 5");
        io.to("room01-nodeoptimizer").emit('node5',{'data':req.query.data,'ssid':req.query.via});
        var vignesh_wifi_len = req.query.vignesh;
        var dude_wifi_len = req.query.dude;
        vignesh_wifi_len /=100;
        dude_wifi_len /=100;
        console.log("Base station 1"+vignesh_wifi_len);
        console.log("Base station 2"+dude_wifi_len);
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
        console.log("Next Head"+result);
        res.send(result);
    }
    else if(req.query.nodeno==='node6')
    {
        console.log("Sending data to socket for node 6");
        io.to("room01-nodeoptimizer").emit('node6',{'data':req.query.data,'ssid':req.query.via});
        var vignesh_wifi_len = req.query.vignesh;
        var dude_wifi_len = req.query.dude;
        vignesh_wifi_len /=100;
        dude_wifi_len /=100;
        console.log("Base station 1"+vignesh_wifi_len);
        console.log("Base station 2"+dude_wifi_len);
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
        console.log("Next Head"+result);
        res.send(result);
    }
    else if(req.query.nodeno==='node7')
    {
        console.log("Sending data to socket for node 7");
        io.to("room01-nodeoptimizer").emit('node7',{'data':req.query.data,'ssid':req.query.via});
        var vignesh_wifi_len = req.query.vignesh;
        var dude_wifi_len = req.query.dude;
        vignesh_wifi_len /=100;
        dude_wifi_len /=100;
        console.log("Base station 1"+vignesh_wifi_len);
        console.log("Base station 2"+dude_wifi_len);
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
        if(d1>d2)
        {
            result='vignesh';
        }
        else
        {
            result='dude';
        }
        console.log("Next Head"+result);
        res.send(result);
    }
});

var server=http.listen(process.env.PORT || 5000,function(){
    console.log("server running in port "+(process.env.PORT || 5000));
});

