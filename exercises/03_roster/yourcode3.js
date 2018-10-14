
// Exercise Roster, part 3

// Complete the User declaration so that it works as expected!
// It will be called with the following props:
// * name: a string
// * skill: a number
class User extends React.Component {
  render() {
    return <p>Not yet implemented! Open up the file <code>yourcode3.js</code> and try to figure it out!</p>;
  }
}

class UserForm extends React.Component {} // copy me from the previous exercise, no change needed!


let Tester = () => <User name="John Doe" skill={3} />;

ReactDOM.render(<Tester/>,document.getElementById("target"));

