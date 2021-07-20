const express = require("express");
const app = express();
var sizeof = require('object-sizeof')
const fs = require("fs");
const ytdl = require("ytdl-core");
var cors = require('cors')

app.use(require('express-status-monitor')());
app.use(express.static("static"));
app.use(cors())


app.get("/audio", (req, res) => {
	const yt_link  = req.query.yt_link;
	let audio  = ytdl(yt_link,{
		filter: 'audioonly'
	}).pipe(res);
	console.log("audio request received");
	
});
app.get("/video", (req, res) => {
	const yt_link  = req.query.yt_link;
	let video  = ytdl(yt_link,{
		filter: 'videoonly',
		// quality: '134'
	}).pipe(res);
	// console.log("video request received");

	
});

app.listen(5000, () => console.log("server is running"));
