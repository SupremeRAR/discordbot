module.exports = (Client, message) => {
    const Prefix = '!';

    if (!message.content.startsWith(Prefix)) return;
    if (message.author.bot) return;

    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCaste();

    if (command === 'map') {
        Client.commands.get('map').execute(message);
    } else if (command === 'hi') {
        Client.commands.get('hi').execute(message);
    } else if (command === 'ping') {
        Client.commands.get('ping').execute(message);
    }
 }
