const event = require('events');

const readEvent = new event();


readEvent.on("loggedSuccessfully", (data) => {
    console.log("logged user details", data);
})


module.exports = readEvent;