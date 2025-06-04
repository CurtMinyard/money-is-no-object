// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user) {
    return user.userRole === 'ADMIN';
}
function getEmail(user) {
  return user.firstName[0].toLowerCase() + user.lastName.toLowerCase() + '.prsvr@gmail.com';
} 
function getPlaylistLength(playlist) {
    return playlist.songs.length;
}
function getHardestHomework(homeworks) {
    if (homeworks.length === 0) {
        return ''; 
    }
    let hardest = homeworks[0];
    for (let i = 1; i < homeworks.length; i++) {
        if (homeworks[i].averageScore < hardest.averageScore) {
            hardest = homeworks[i];
        }
    }
return hardest.name;
}
function createPhonebook(names, numbers) {
    if (names.length !== numbers.length) {
        return {};
    }
  const phonebook = {}; 
    for (let i = 0; i < names.length; i++) {
        phonebook[names[i]] = numbers[i];
    }
   return phonebook;
}





// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};