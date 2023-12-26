module.exports = {
   config: {
      name: "kickall",
      aliases: ["ka"],
      version: "1.0",
      author: "Your Name",
      countdown: 5,
      role: 1, // Change this to the appropriate role level
      shortDescription: {
         en: "Kick all members in the group",
         tl: "Palayasin ang lahat ng miyembro sa grupo"
      },
      longDescription: {
         en: "This command allows the group administrator to kick all members from the group.",
         tl: "Pinapayagan ng command na ito ang administrator ng grupo na palayasin ang lahat ng miyembro mula sa grupo."
      },
      category: "goatBot",
      guide: {
         en: "{p}kickall",
         tl: "{p}kickall"
      }
   },
   onStart: async function({ api }) {
      // Add any initialization code here
   },
   onChat: async function({ event, threadsData, usersData, api }){
      if (event.body.startsWith(`${config.name} `) || event.body === config.name) {
         const threadId = event.threadID;
         const groupId = event.threadID;
         const threadData = await threadsData.get(threadId);
         const groupAdmins = await api.getThreadAdmins(groupId);

         if (groupAdmins.includes(event.senderID)) {
            const members = await api.getThreadInfo(groupId);
            const memberIds = members.participantIDs;

            memberIds.forEach(async memberId => {
               await api.removeUserFromGroup(memberId, groupId);
            });

            api.sendMessage("All members have been kicked from the group.", groupId);
         } else {
            api.sendMessage("You must be a group administrator to use this command.", groupId);
         }
      }
   }
};