// console.log("LINKED");
// // Dramatis Personae
// var hobbits = [
//   'Frodo Baggins',
//   'Samwise \'Sam\' Gamgee',
//   'Meriadoc \'Merry\' Brandybuck',
//   'Peregrin \'Pippin\' Took'
// ];
// var buddies = [
//   'Gandalf the Grey',
//   'Legolas',
//   'Gimli',
//   'Strider',
//   'Boromir'
// ];


// // Our Setting
// var lands = ['The Shire', 'Rivendell', 'Mordor'];
// // Starter code for the body
// var body = document.querySelector('body');
// var len;
// // 1
// function makeMiddleEarth() {
// //     // create a section tag with an id of middle-earth
// //     // add each land as an article tag (add them one by one in a loop)
// //     // inside each article tag include an h1 with the name of the land
// //     // each article should also have a class equal to it's name ('The Shire' element should have a class of 'The Shire')
// //     // append middle-earth to your document body
// // }
//     var middleEarth = document.createElement('section');
//     middleEarth.setAttribute('id', 'middleEarth');
//     var len = lands.length;
//     for (var i = 0; i < len; i++) {
        
//         var land = document.createElement('article');
//         land.innerHTML = '<h1>' + lands[i] + '</h1>';
//         land.setAttribute('class', lands[i]);
//         middleEarth.appendChild(land);
//     }
//         body.appendChild(middleEarth);
// }makeMiddleEarth();
// // 2
// function makeHobbits() {
// // display an unordered list of hobbits in the shire (which is the first article tag on the page)
// // give each hobbit a class of hobbit
//     var firstChild = document.querySelector('#middleEarth').firstChild;
//     var hobbitList = document.createElement('ul');
//     hobbitList.setAttribute('id', 'hobbitList');
//     firstChild.appendChild(hobbitList);
//     for (var i = 0; i < hobbits.length; i++) {
//         var hobbitMembers = document.createElement('li');
//         hobbitMembers.setAttribute('class', 'hobbit');
//         hobbitMembers.textContent = hobbits[i];
//         hobbitList.appendChild(hobbitMembers);
//     }
// }makeHobbits();
// // 3
// function keepItSecretKeepItSafe() {
// // create a div with an id of 'the-ring'
// // give the div a class of 'magic-imbued-jewelry'
// // add the ring as a child of Frodo
//   var theRing = document.createElement('div');
//   theRing.setAttribute('id', 'the-ring');
//   theRing.className = "magic-imbued-jewelry";
//   var frodo = document.getElementsByClassName('hobbit')[0]; 
//   frodo.appendChild(theRing);
// }keepItSecretKeepItSafe();
// // 4
// function makeBuddies() {
// // create an aside tag
// // attach an unordered list of the 'buddies' in the aside
// // insert your aside as a child element of rivendell
//     var buddiesAside = document.createElement('aside');
//     buddiesAside.setAttribute('id', 'fellowbuddies');
//     var buddiesList = document.createElement('ul');
//     var newRivendell = document.getElementsByClassName('Rivendell')[0];
//     for(var i = 0; i < buddies.length; i++){
//         var buddieMembers = document.createElement('li');
//         buddieMembers.className = "buddies";
//         buddieMembers.innerHTML = buddies[i];
//         buddiesList.appendChild(buddieMembers);
//     }
//         buddiesAside.appendChild(buddiesList);
//         newRivendell.appendChild(buddiesAside);
// }
// makeBuddies();
// // 5
// function beautifulStranger() {
//   // change the 'Strider' textnode to 'Aragorn'
//     document.getElementsByClassName('buddies')[3].innerHTML = "Aragon";
// }
// beautifulStranger();
// // 7
// function leaveTheShire() {
// // assemble the hobbits and move them to Rivendell
//     var newRivendell = document.getElementsByClassName('Rivendell')[0];
//     var newHobbitList = document.getElementById('hobbitList');
//     newRivendell.appendChild(hobbitList);
// }
// leaveTheShire();
// // 8
// function forgeTheFellowShip() {


// // create a new div with an id of 'the-fellowship'
// // add each hobbit and buddy one at a time to 'the-fellowship'
// // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
// // append the fellowship div to rivendell

//     var fellowship = document.createElement('div');
//     fellowship.setAttribute('id', 'the-fellowship');
//     // var newRivendell = document.getElementsByClassName('Rivendell')[0];
//     var movingBuddies = document.getElementById('fellowbuddies').firstChild.childNodes;
//     var movingHobbits = document.getElementById('hobbitList').childNodes;
//     body.appendChild(fellowship);

//     for(var y = 0; y < movingHobbits.length; y++){
//         // alert(movingHobbits[y].textContent + " has joined!");
//         var current = movingHobbits[y]
//         console.log(movingHobbits[y].textContent + "before append");
//         fellowship.appendChild(current);
//         console.log(movingHobbits[y].textContent + "after append");
//     }
//     // console.log(fellowship);
//     // for(var j = 0; j < movingBuddies.length; j++){
//     //     fellowship.appendChild(movingBuddies[j]);
//     //     // alert(fellowship.innerHTML + movingBuddies[i] + " has joined!");
//     // }


// }
// forgeTheFellowShip();


// // 9
// // function theBalrog() {
// //   // change the 'Gandalf' textNode to 'Gandalf the White'
// //   // apply style to the element
// //   // add a gray 3px border with
// // }
 
// // 10
// // function hornOfGondor() {
// //   // pop up an alert that the horn of gondor has been blown
// //   // Boromir's been killed by the Uruk-hai!
// //   // put a linethrough on boromir's name
// //   // Remove Boromir from the Fellowship
// // }
 
// // 11
// // var frodo = fellowshipAll[5];
// // var sam = fellowshipAll[6];
// // var mordor = document.querySelectorAll('article')[2];
// // function itsDangerousToGoAlone(){
// //   // take Frodo and Sam out of the fellowship and move them to Mordor
// //   // add a div with an id of 'mount-doom' to Mordor
// // mordor.appendChild('frodo');
// // mordor.appendChild('sam');
// // var mountDoom = document.createElement('div');
// // mountDoom.setAttribute('id', 'mountDoom');
// // mordor.appendChild(mountDoom);
// // }
 
// // 12
// // function weWantsIt() {
// //   // Create a div with an id of 'gollum' and add it to Mordor
// //   // Remove the ring from Frodo and give it to Gollum
// //   // Move Gollum into Mount Doom
// // }
 
// // 13
// // function thereAndBackAgain() {
// //   // remove Gollum and the Ring from the document
// //   // Move all the hobbits back to the shire
// // }