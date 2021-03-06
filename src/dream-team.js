const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const teamName = [];

  members.forEach(member => {
    if (typeof member === 'string') {
      teamName.push(member.trim().split('')[0].toUpperCase());
    }
  });

  return teamName.sort().join('');
}
