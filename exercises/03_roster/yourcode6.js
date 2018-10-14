
// Exercise Roster, part 6

class User extends React.Component {} // copy me from before, no changes needed

class UserForm extends React.Component {} // copy me from before, but tweak for custom button text and field cleaning!

class Roster extends React.Component {// copy from before, but add ability to add users!
  render() {
    return <p>Not yet implemented! Open up the file <code>yourcode6.js</code> and try to figure it out!</p>;
  }
}

let userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

let Tester = React.createClass({
  render() {
    return <Roster users={userdata} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


