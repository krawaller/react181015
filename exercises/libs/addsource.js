window.onload = function(){
	var source = document.querySelector("script[type='text/babel']").innerHTML;

	var code = Prism.highlight(source, Prism.languages.jsx);

	var element = document.createElement("pre");
	element.classList.add("sourcecode");
	element.innerHTML = "<code>" + code + "</code>";

	document.getElementById("sourcecode").appendChild(element);
};

window.$ = document.querySelector.bind(document);