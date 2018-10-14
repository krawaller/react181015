
// Exercise Roster, part 4

class User extends React.Component {} // copy me from before, but tweak me so that name and skill are passed in as props

class UserForm extends React.Component {} // copy me from before, no changes needed

class Roster extends React.Component { // Implement Roster so that it works as expected!
  render() {
    return <p>Not yet implemented! Open up the file <code>yourcode4.js</code> and try to figure it out!</p>;
  }
}

let Tester = () => <Roster user={{name:"John Doe",skill:3}} />;

ReactDOM.render(<Tester/>,document.getElementById("target"));


