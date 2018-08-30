
// SETUP DECK
var hand_limit = 7;

var deck = [];


function buildDeck() 
{
	
	deck.splice(0,deck.length);
	hand1.splice(0,hand1.length);
	hand2.splice(0,hand2.length);
	pack.splice(0,pack.length);
	
	refreshHands();
	refreshDeck();
	
	// number of cards per color
	
	deck.push("<span class='card blue'>B1</span>");
	deck.push("<span class='card blue'>B1</span>");
	deck.push("<span class='card blue'>B2</span>");
	deck.push("<span class='card blue'>B2</span>");
	deck.push("<span class='card blue'>B2</span>");
	deck.push("<span class='card blue'>B3</span>");
	deck.push("<span class='card blue'>B3</span>");
	deck.push("<span class='card blue'>B4</span>");
	deck.push("<span class='card blue'>B4</span>");
	deck.push("<span class='card blue'>B5</span>");
	deck.push("<span class='card blue'>B6</span>");
	
	deck.push("<span class='card green'>G1</span>");
	deck.push("<span class='card green'>G1</span>");
	deck.push("<span class='card green'>G2</span>");
	deck.push("<span class='card green'>G2</span>");
	deck.push("<span class='card green'>G2</span>");
	deck.push("<span class='card green'>G3</span>");
	deck.push("<span class='card green'>G3</span>");
	deck.push("<span class='card green'>G4</span>");
	deck.push("<span class='card green'>G4</span>");
	deck.push("<span class='card green'>G5</span>");
	deck.push("<span class='card green'>G6</span>");
	
	deck.push("<span class='card black'>X1</span>");
	deck.push("<span class='card black'>X1</span>");
	deck.push("<span class='card black'>X2</span>");
	deck.push("<span class='card black'>X2</span>");
	deck.push("<span class='card black'>X2</span>");
	deck.push("<span class='card black'>X3</span>");
	deck.push("<span class='card black'>X3</span>");
	deck.push("<span class='card black'>X4</span>");
	deck.push("<span class='card black'>X4</span>");
	deck.push("<span class='card black'>X5</span>");
	deck.push("<span class='card black'>X6</span>");
	
	deck.push("<span class='card pink'>P1</span>");
	deck.push("<span class='card pink'>P1</span>");
	deck.push("<span class='card pink'>P2</span>");
	deck.push("<span class='card pink'>P2</span>");
	deck.push("<span class='card pink'>P2</span>");
	deck.push("<span class='card pink'>P3</span>");
	deck.push("<span class='card pink'>P3</span>");
	deck.push("<span class='card pink'>P4</span>");
	deck.push("<span class='card pink'>P4</span>");
	deck.push("<span class='card pink'>P5</span>");
	deck.push("<span class='card pink'>P6</span>");
	
	deck.push("<span class='card yellow'>Y1</span>");
	deck.push("<span class='card yellow'>Y1</span>");
	deck.push("<span class='card yellow'>Y2</span>");
	deck.push("<span class='card yellow'>Y2</span>");
	deck.push("<span class='card yellow'>Y2</span>");
	deck.push("<span class='card yellow'>Y3</span>");
	deck.push("<span class='card yellow'>Y3</span>");
	deck.push("<span class='card yellow'>Y4</span>");
	deck.push("<span class='card yellow'>Y4</span>");
	deck.push("<span class='card yellow'>Y5</span>");
	deck.push("<span class='card yellow'>Y6</span>");
	
	shuffle(deck);
	dealPack();
	
	/*
	SPECIAL CARDS
	---
	COMBOS
		WHIP - Wild card that can be played anywhere
		APEX JUMP - Skip over a tier, still must have a card to match the next tier
		WAITRESS - Swap any two blocker cards
		STAR PASS - Replace a blocker with one from your hand
		
	PENALTIES
		FALSE START - Both players must reset back to the first tier (any points or lead status is also lost)
		HIGH BLOCK - Other player skips a turn
		TRACK CUT - The other jammer must move to the space immediately behind you
		FORCE CALL OFF - Even if you do not have lead
	*/
	
	deck.push("<span class='card special'>WHIP</span>");
	//deck.push("<span class='card special'>WHIP</span>");
	deck.push("<span class='card special'>APEX JUMP</span>");
	deck.push("<span class='card special'>WAITRESS</span>");
	//deck.push("<span class='card special'>WAITRESS</span>");
	deck.push("<span class='card special'>STAR PASS</span>");
	//deck.push("<span class='card special'>STAR PASS</span>");
	deck.push("<span class='card special'>FALSE START</span>");
	deck.push("<span class='card special'>HIGH BLOCK</span>");
	//deck.push("<span class='card special'>HIGH BLOCK</span>");
	deck.push("<span class='card special'>TRACK CUT</span>");
	//deck.push("<span class='card special'>TRACK CUT</span>");
	deck.push("<span class='card special'>CALLOFF</span>");
	//deck.push("<span class='card special'>CALLOFF</span>");
	
	shuffle(deck);
	refreshHands;
	
}



// SHUFFLE DECK
function shuffle(array) 
{

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) 
  {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

	refreshDeck();
	
	return array;
	
}





// DEAL PACK
var pack = [];

function dealPack(element) 
{
	
	// reset previous Pack
	pack = [];
	document.getElementById("packContainer").innerHTML = "";
	
	pack.push(deck.shift()); // 1
	pack.push(deck.shift()); // 2
	pack.push(deck.shift()); // 3
	pack.push(deck.shift()); // 4
	pack.push(deck.shift()); // 5
	pack.push(deck.shift()); // 6
	pack.push(deck.shift()); // 7
	pack.push(deck.shift()); // 8
	
	var tempTable = "<table><tr>";
	
	tempTable += "<td><div class='pack' id='pack1'>" + pack[0] + "</div><input type='checkbox'></td>";
	tempTable += "<td><div class='pack' id='pack2'>" + pack[1] + "</div><input type='checkbox'></td>";
	tempTable += "<td><div class='pack' id='pack3'>" + pack[2] + "</div><input type='checkbox'></td>";
	tempTable += "<td><div class='pack' id='pack4'>" + pack[3] + "</div><input type='checkbox'></td>";
	
	tempTable += "</tr><tr>";

	tempTable += "<td><div class='pack' id='pack5'>" + pack[4] + "</div><input type='checkbox'></td>";
	tempTable += "<td><div class='pack' id='pack6'>" + pack[5] + "</div><input type='checkbox'></td>";
	tempTable += "<td><div class='pack' id='pack7'>" + pack[6] + "</div><input type='checkbox'></td>";
	tempTable += "<td><div class='pack' id='pack8'>" + pack[7] + "</div><input type='checkbox'></td>";
	
	tempTable += "</tr></table>";
	
	document.getElementById("packContainer").innerHTML = tempTable;
	
	refreshDeck();
}


// DEAL HANDS
var hand1 = [];
var hand2 = [];

function deal(hand) 
{
	
	if(hand.length >= hand_limit) 
	{
		alert("Hand Limit of " + hand_limit + " cards reached");
	}
	
	else 
	{
	
	hand.push(deck.shift());
	
	refreshHands();
	
	refreshDeck();
	}
}


function discard(hand,pos) 
{
	
	deck.push(hand[pos]);
	
	hand.splice(pos,1);
	
	refreshHands();
	refreshDeck();
}


// swapping blocker with card in hand
function swap(hand,pos,blocker) 
{
	
	var temp = 'pack' + blocker;
	
	deck.push(document.getElementById(temp).innerHTML);
	
	document.getElementById(temp).innerHTML = hand[pos];
	hand.splice(pos,1);
	
	refreshHands();
	refreshDeck();
}

// swapping two blocker cards
function swapBlockers(pos1,pos2) 
{
	
	var temp1 = 'pack' + pos1;
	var temp2 = 'pack' + pos2;
	
	var value1 = document.getElementById(temp1).innerHTML;
	var value2 = document.getElementById(temp2).innerHTML;
	
	document.getElementById(temp1).innerHTML = value2;
	document.getElementById(temp2).innerHTML = value1;
}



// Refresh deck on page
function refreshDeck() 
{
	document.getElementById("deckContainer").innerHTML = JSON.stringify(deck);
	document.getElementById("deck_remaining").innerHTML = deck.length;
}


// Refresh hands on page
function refreshHands()
{
	document.getElementById("hand1Container").innerHTML = JSON.stringify(hand1);
	document.getElementById("hand1_remaining").innerHTML = hand1.length;
	
	document.getElementById("hand2Container").innerHTML = JSON.stringify(hand2);
	document.getElementById("hand2_remaining").innerHTML = hand2.length;
}










