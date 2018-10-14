
// Render challenges part 5

let List = props => {
	// I need to be implemented!
	// As you see in `Tester`, I expect an array of strings in the prop `items`
	return <p>Not yet implemented! Open up the file <code>yourcode5.js</code> and try to figure it out!</p>;
};

let Item = props => {
	// I also need to be implemented!
	// I would like to be given a string in the prop `text`.
};

let Tester = props => { // Don't touch me, I'm just here to show that it works
	return <List items={["take out trash","do the dishes"]}/>;
};

ReactDOM.render(<Tester/>, document.getElementById("target"));

