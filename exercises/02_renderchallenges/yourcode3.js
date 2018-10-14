
// Render challenges part 3

let Greeter = props => { // copy me from part 2, but add default name functionality!
  return <p>Not yet implemented! Open up the file <code>yourcode3.js</code> and try to figure it out!</p>;
};

let Tester = props => {
	return <div>
		<Greeter greet={"participant"}/>
		<Greeter />
	</div>;
}

ReactDOM.render(
  <Tester/>,
  document.getElementById("target")
);

