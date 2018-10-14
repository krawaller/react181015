
// Exercise Roster, part 5

class User extends React.Component {} // copy me from before, no changes needed

class UserForm extends React.Component {} // copy me from before, no changes needed

class Roster extends React.Component { // copy from before, but tweak to take an array! 
  render() {
    return <p>Not yet implemented! Open up the file <code>yourcode5.js</code> and try to figure it out!</p>;
  }
}


let userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

let Tester = () => <Roster users={userdata} />;

ReactDOM.render(<Tester/>,document.getElementById("target"));

