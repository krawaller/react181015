
// Exercise Roster, part 7

class User extends React.Component {} // copy me from before, no changes needed

class UserForm extends React.Component {} // copy me from before, no changes needed

class Roster extends React.Component { // copy but tweak to store users in an object
  render() {
    return <p>Not yet implemented! Open up the file <code>yourcode7.js</code> and try to figure it out!</p>;
  }
}

let userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

let Tester = React.createClass({
  render() {
    return <Roster users={userdata} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));

