
// Render challenges part 4

let Component = props => { // I need to be fixed :(
	return
		<p>The <strong>important</strong> todo list:</p>
		<ul>
			<li>Take out the trash
			<li>Do the dishes
		</ul>
};

ReactDOM.render(<Component/>, document.getElementById("target"));

