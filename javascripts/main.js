var outputEl = document.getElementById("output-target");

var articleEl = document.getElementsByClassName("article-section");
console.log("articleEl", articleEl);

function handleSectionClick(MouseEvent) {
	console.log(event);
	var elementText = event.target.innerHTML;
	outputEl.innerHTML = "You clicked on the " + elementText;
}

for (var i = 0; i < articleEl.length; i++) {
	articleEl.item(i).addEventListener("click", handleSectionClick);
}
/* ^^^when there's a click, handleSectionClick will be called.
The code above doesn't call the handleSectionClick function,
the click calls that function */



var header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event) {
	outputEl.innerHTML = "The force is strong with this one";
}

function handleHeaderMouseOut(event) {
	outputEl.innerHTML = "Remember...the Force will be with you, always";
}


var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function(event){
	console.log("event", event);
	outputEl.innerHTML = event.target.value;
});

/* ^^^This is called an anonymous function (aka lambda) when don't call the function separately;
 when you call it this way, it's only for this event, can't be called again */

var obiwan = document.getElementById("obi-wan");

document.getElementById("add-color")
	.addEventListener("click", function(event){
		obiwan.classList.toggle("blue");
	});

document.getElementById("make-it-large")
	.addEventListener("click", function(event){
		obiwan.classList.toggle("large");
	});

document.getElementById("add-border")
	.addEventListener("click", function(event){
		obiwan.classList.toggle("bordered");
	});

document.getElementById("add-rounding")
	.addEventListener("click", function(event){
		obiwan.classList.toggle("rounded");
	});


document.getElementById("wrapper")
	.addEventListener("click", function(event) {
		console.log("target", event.target);
		console.log("currentTarget", event.currentTarget);

		if(event.target.tagName.toLowerCase() === "li"){
			console.log("You clicked on the <li> element");
		}

		if(event.target.className === "article-section"){
			console.log("You clicked on an 'article-section' element");
		}
});


var myArr = [
"A long time ago in a galaxy far, far away…",
"Use the force, Luke.",
"The force is strong with this one.",
"Do. Or do not. There is no try.",
"Fear is the path to the dark side.",
"Someday I will be the most powerful Jedi ever.",
"You were the chosen one!"
]

myArr.forEach(function(quote, index){
	var phraseString = `<div id ="quote--${index}">
						<h3>"${quote}" - Star Wars</h3>
						</div>`;

	let phraseDiv = document.createElement("div");
	phraseDiv.innerHTML = phraseString;
	document.getElementById("stickItHere").appendChild(phraseDiv);
	var phraseDom = document.getElementById(`quote--${index}`);

	phraseDom.addEventListener("click", function(event){
		console.log("event", event);
		event.currentTarget.classList.add("red");
	});

});
















