
// Render challenges part 5

let List = props => {
	let items = props.items.map((i,n) => <Item key={n} text={i}/>);
	return <div>
		<p>My chores:</p>
		<ul>{items}</ul>
	</div>;
};

let Item = props => {
	return <li>{props.text}</li>;
};

let Tester = props => { // Don't touch me, I'm just here to show that it works
	return <List items={["take out trash","do the dishes"]}/>;
};

ReactDOM.render(<Tester/>, document.getElementById("target"));

