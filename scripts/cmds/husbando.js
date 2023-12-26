    module.exports = {
    config: {
      name: "husbando",
      author:"Void",// Convert By Goatbot Ron Zedric Laurente
       role: 0,
      shortDescription: " ",
      longDescription: "Do You Know Who's Void is?",
      category: "Media 📸",
      guide: "{pn}"
    },

    onStart: async function ({ message }) {
  var link = [
"https://i.postimg.cc/c4g9gvH5/39b8e4fd-66f1-4e76-9999-c94f3f4647b7.jpg", "https://i.postimg.cc/Gh6cGTjB/86-Shin.jpg", "https://i.postimg.cc/KjddkByx/bc4f680d-371e-4dbc-8198-8782c2b419f8.jpg", 
"https://i.postimg.cc/Pq29bBk6/image.jpg", 
"https://i.postimg.cc/R0p9C3qV/Lovepoem.jpg",  "https://i.postimg.cc/BZw7nTqK/Icon.jpg",  "https://i.postimg.cc/pXRS7WX0/Fujimiya-Amane.jpg",  "https://i.postimg.cc/Wzj5Q8jD/Cid-Kagenou.jpg",  "https://i.postimg.cc/8z3t1NNg/Otosaka-yuu.jpg",  "https://i.postimg.cc/ZYcHWr4c/izumi-icon.jpg",  "https://i.postimg.cc/GmsvxYw6/Haruhiko-Ichijo.jpg",  "https://i.postimg.cc/4yShz48J/Avatars.jpg",  "https://i.postimg.cc/tTr1jCGh/92d30719-fd8d-4ab3-b494-0f057162f34d.jpg",  "https://i.postimg.cc/d1014PZD/image.jpg",  "https://i.postimg.cc/8c2zp7Kr/yuuta-hazl-x.jpg",
  ];
	 let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 Your Husband 」',attachment: await global.utils.getStreamFromURL(img)
})
}
    }