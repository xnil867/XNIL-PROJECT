 module.exports = {
	config: {
		name: "dybala",
		aliases: ["paulodybala"],
		version: "1.0",
		author: "langit| RIL",
		countDown: 10,
		role: 0,
		shortDescription: "Dybala pic",
		longDescription: "Paulo Dybala picture",
		category: "fun",
		guide: "{pn}"
	},
onStart: async function ({ message }) {
	 var link = ["https://i.imgur.com/ppU1SyD.jpg","https://i.imgur.com/G0LJxRD.jpg","https://i.imgur.com/aqlNNah.jpeg","https://i.imgur.com/3Jvclv4.jpg","https://i.imgur.com/VrdOpRR.jpg","https://i.imgur.com/MEwWymk.jpg","https://i.imgur.com/S3Y43qh.jpg"]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: 'Paulo Dybala🤍',attachment: await global.utils.getStreamFromURL(img)
})
}
     }