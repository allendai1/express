const express = require("express");
const app = express();
const ytdl = require("ytdl-core");
var cors = require('cors')
app.use(express.static("static"));
app.use(cors())

console.log("wok");

app.get("/audio", (req, res) => {
	const yt_link  = req.query.yt_link;
        ytdl(yt_link,{
		filter: 'audioonly'
	}).pipe(res);
	
});
app.get("/video", (req, res) => {
	const yt_link  = req.query.yt_link;
	 ytdl(yt_link,{
		filter: 'videoonly',
	}).pipe(res);


	
});
app.listen(80,()=>console.log("server is runnning"))

