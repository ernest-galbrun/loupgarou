const http = require('http');

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!!!')
    .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "/";

client.login("NjY2MjQzMjM3MzEyNDYyODQ5.XjbzfQ.IReMd0aYDx7-97aswW0bpt0YDk4");

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "start"){
        message.channel.send(message.author.username + " a lancé une partie de loup garou");
        addplayer(message.author.username)
        main();
    }
})


var liste_joueurs = []
var liste_pseudos= []
var nb_joueurs = 0

function addplayer(pseud){
 let player = {
    pseudo:pseud,
    role : "",
    etat: null
}
liste_joueurs.push(player);
liste_pseudos.push(player.pseudo)
console.log(liste_joueurs)
nb_joueurs++
}


/*
function rolealea(){
    liste_roles = ["lg","villageois"];
    return liste_roles[Math.floor(Math.random() * 2)];
}

let role = message.guild.roles.find('name',"lg")
        message.member.addRole(role)
*/

function main(){
    client.on("message", message =>{
    if(message.content === prefix + "join" && message.author.username  in liste_pseudos === true ){
    addplayer(message.author.username)

    message.channel.send(message.author.username +  " a rejoint la partie");
    message.channel.send(nb_joueurs + " joueurs ont déja rejoint la partie");
    }})

}