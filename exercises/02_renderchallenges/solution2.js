
// Render challenges part 2

let Greeter = props => {
  return <p>Hello, <strong>{props.greet}</strong>!</p>;
};

let Tester = props => {
	return <Greeter greet={"world"}/>;
}

ReactDOM.render(
  <Tester/>,
  document.getElementById("target")
);

