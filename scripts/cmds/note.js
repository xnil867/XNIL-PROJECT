module.exports = {
  config: {
    name: "yournote",
    aliases: ["yournote"],
    version: "1.0",
    author: "Your Name",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "GoatBot - Create a note",
    },
    longDescription: {
      en: "GoatBot - Create a note and save it",
    },
    category: "goatBot",
    guide: {
      en: "{p}note <content>",
    },
  },
  
  onStart: async function ({ event, message, args, usersData }) {
    // Get the user's ID
    const userID = event.senderID;
    
    // Get the user's existing notes (if any)
    const userNotes = await usersData.get(userID).notes || [];
    
    // Get the note content from the command arguments
    const noteContent = args.join(" ");
    
    // Add the new note to the user's existing notes
    userNotes.push(noteContent);
    
    // Save the updated notes to the user's data
    await usersData.set(userID, {
      notes: userNotes,
    });
    
    // Send a confirmation message
    message.reply("Note created successfully!");
  },
};