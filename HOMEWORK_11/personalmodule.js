import os from 'os';
let getInfo = function () {
    const userName = os.userInfo().username;
    let date = new Date().toUTCString();
    let hour = new Date().getHours();
    let greeting = '';
    if (hour >= 5 && hour < 11) {
        greeting = 'Good morning';
    } else if (hour >= 11 && hour < 17) {
        greeting = 'Good day';
    } else if (hour >= 17 && hour < 22) {
        greeting = 'Good evening';
    } else {
        greeting = 'Good night';
    }
    return `${userName}, ${date}, ${greeting}`
}
export default getInfo;