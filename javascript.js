var quotes = [
'WDIAWDWAD',
'DWDWADWAD',
'dwdawdwadawd'
]


function newQuote() {
	 function genRand(length) {
	var tmp = "";
	var availChars = "ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxwyz1234567890";
	for (var i = 0; i < length; i++)
	tmp += availChars.charAt(Math.floor(Math.random() * availChars.length));
	return tmp;
}
	
	document.getElementById('quoteDisplay').innerHTML = "https://discord.gift/" + genRand(16) + "<br>" + "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>" + "https://discord.gift/" + genRand(16) + "<br>" + "https://discord.gift/" + genRand(16) + "<br>" + "https://discord.gift/" + genRand(16) + "<br>" + "https://discord.gift/" + genRand(16) + "<br>" + "https://discord.gift/" + genRand(16) + "<br>" + "https://discord.gift/" + genRand(16)  + "<br>" + "https://discord.gift/" + genRand(16)  + "<br>" + "https://discord.gift/" + genRand(16) + "<br>" + "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16) + "<br>"+ "https://discord.gift/" + genRand(16);
	document.getElementByValue('quoteDisplay').innerHTML = "https://discord.gift/" + genRand(16);
}
