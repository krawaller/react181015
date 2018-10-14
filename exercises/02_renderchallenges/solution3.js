
// Render challenges part 3

let Greeter = props => {
  return <p>Hello, <strong>{props.greet||"whoever you are"}</strong>!</p>;
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

