module.exports = {
	config: {
		name: "smalltxt",
		version: "1.0",
		author: "Samir", // Time to wait before executing command again (seconds)
		role: 0,
		category: "text",
		guide: {
			vi: "Not Available",
			en: "botsays + (texr or letter)"
		} 
	},

	onStart: async function ({ api, args, event }) {
	   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
  text = text.replace(/\./g, `░░░
░░░
░░░
░░░
██╗`)
  .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, `
▄▀█
█▀█\n\n`)
  .replace(/b/g, `
█▄▄
█▄█\n\n`)
  .replace(/c/g, `
█▀▀
█▄▄\n\n`)
  .replace(/d|đ/g, `
█▀▄
█▄▀\n\n`)
  .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, `
\n\n█▀▀
██▄\n\n`)
  .replace(/f/g, `
█▀▀
█▀░\n\n`)
  .replace(/g/g, `
█▀▀
█▄█\n\n`)
  .replace(/h/g, `
█░█
█▀█\n\n`)
  .replace(/i/g, `
█
█\n\n`)
  .replace(/ì|í|ị|ỉ|ĩ|i/g, `
░░█
█▄█\n\n`)
  .replace(/k/g, `
█▄▀
█░█\n\n`)
  .replace(/l/g, `
█░░
█▄▄\n\n`)
  .replace(/m/g, `
█▀▄▀█
█░▀░█\n\n`)
  .replace(/n/g, `
█▄░█
█░▀█\n\n`)
  .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, `
█▀█
█▄█\n\n`)
  .replace(/p/g, `
█▀█
█▀▀\n\n`)
  .replace(/q/g, `
█▀█
▀▀█\n\n`)
  .replace(/r/g, `
█▀█
█▀▄\n\n`)
  .replace(/s/g, `
█▀
▄█\n\n`)
  .replace(/t/g, `
▀█▀
░█░\n\n`)
  .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, `█░█
  █▄█\n\n`)
  .replace(/v/g, `
█░█
▀▄▀\n\n`)
  .replace(/w/g, `
█░█░█
▀▄▀▄▀\n\n` )
  .replace(/x/g, `
▀▄▀
█░█\n\n`)
  .replace(/y/g, `
█▄█
░█░\n\n`)
  .replace(/z/g, `
▀█
█▄\n\n`)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  var arr = text.replace("\n\n", "").split("\n\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+"\n\nSee the message on the browser to see more clearly THIS CODE COMMAND IS MADE BY HEIRO PROJECT V", event.threadID, event.messageID);
}
};