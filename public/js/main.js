// 1
let un = "Antoine";
let tabExo = ["Charles", un, 3, -15, true];
console.log(tabExo);

//2
console.log(tabExo.length);

//3
tabExo.pop();
console.log(tabExo);

//4
tabExo.shift();
console.log(tabExo);

//5
tabExo.splice(1,0,"ceci","cela");
console.log(tabExo);

//6
tabExo.unshift("un", "deux", "trois");
console.log(tabExo);

//7
let elias = [];
choix1 = prompt("que veux tu mettres dans ta boite?");
elias.push(choix1);
choix2 = prompt("que veux tu mettres d'autre dans ta boite?");
elias.push(choix2);
alert(`trop cool, tu as ${choix1} et ${choix2} dans ton coffre !`);
choix3 = prompt("tu peux encore rajouter un bail, tu veux quoi?");
elias.unshift(choix3);
alert(`trop cool, tu as ${choix1} et ${choix2} et ${choix3} dans ton coffre !`);
alert("tu vas pouvoir rajouter encore troix object de ton choix... wow quelle chance! Ecrit les un par un stp");
choix4 = prompt("premier choix?");
choix5 = prompt("deuxieme choix?");
choix6 = prompt("toisième choix?");
elias.push(choix4, choix5, choix6);
alert(`bon tu as bcp d'object là, voilà ce que tu as dans ton coffre: ${choix1}, ${choix2}, ${choix3}, ${choix4}, ${choix5}, et ${choix6}`);
choix7 = prompt("si je comprend bien tu veux enlever les trois premier element? ok choisi un autre alors:")
elias.unshift(choix7);
elias.splice(0, 3);
let taille = elias.length
alert(`tu as ${taille} elements dans ton coffre.`)
prompt("bon on va bouger les deux dernier si j'ai bien compris?")
elias.splice(2, 2);
console.log(elias);
prompt("quoi? tu veux aussi enlever les deux premier?");
elias.splice(0,2);
console.log(elias);
let nouvelleTaille = elias.length
alert(`bon il te reste ${nouvelleTaille} dans ton coffre...`)
alert("CIAO")
console.log(elias);