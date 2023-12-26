//Short code 🤣 works with uid only by Tokodori
 

 module.exports.config = {
  name: "unfriend",
 author: "TOKODORI",
  role: 2,
  category: "admin",
}

module.exports.onStart = async ({ event, api, args, message }) => {
  api.unfriend(args.join(" "));
}