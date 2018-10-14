
// Exercise Roster, part 8

class User extends React.Component {} // copy me from before, but tweak to take delete callback and pass it to form

class UserForm extends React.Component {} // copy me from before, but tweak to show delete button & use delete callback

class Roster extends React.Component { // copy but tweak to execute deletions
  render() {
    return <p>Not yet implemented! Open up the file <code>yourcode8.js</code> and try to figure it out!</p>;
  }
}

let userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

let Tester = React.createClass({
  render() {
    return <Roster users={userdata} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));

