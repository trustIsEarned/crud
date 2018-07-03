const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://martha:matilda15@ds125881.mlab.com:25881/quotes83", (err,client)=>{
	if (err) return console.log(err)
		db = client.db('quotes83') // whatever your database name is
		app.listen(3000, () => {
		console.log('listening on 3000')
		})
	
	});



app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
	res.sendFile(__dirname+"/index.html");
});

app.post('/quotes', (req, res) => {
db.collection('quotes').save(req.body, (err, result) => {
if (err) return console.log(err)

console.log('saved to database')
res.redirect('/')
})
})





