$("#target").html(`
	<div id="myapp">
		<p>Working on it!</p>
		<button id="promisebtn">Really?</button>
	</div>
`);


// And here's some example code on attaching event listeners with jQuery:
$("#promisebtn").click(function(){
	$("#myapp").append("<p>Yes, I promise!!</p>");
});




// ...but now the rest is up to you! :) The `Redux` object is available.


