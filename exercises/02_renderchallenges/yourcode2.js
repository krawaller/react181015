
// Render challenges part 2

let Greeter = props => {
  return <p>Not yet implemented! Open up the file <code>yourcode2.js</code> and try to figure it out!</p>;
};

let Tester = props => {
	return <Greeter greet={"world"}/>;
}

ReactDOM.render(
  <Tester/>,
  document.getElementById("target")
);

