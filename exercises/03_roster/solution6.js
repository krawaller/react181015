
// Roster part 6 solution

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = { editing: false };
    this.startEdit = this.startEdit.bind(this);
    this.submit = this.submit.bind(this);
  }
  startEdit() {
    this.setState({ editing: true });
  }
  submit(data) {
    this.props.update(data);
    this.setState({ editing: false });
  }
  render() {
    let p = this.props;
    return this.state.editing ? <UserForm values={{name:p.name,skill:p.skill}} callback={this.submit}/> : <div>
      <p>Name: {p.name}, skill: {p.skill} <button onClick={this.startEdit}>Edit</button></p>
    </div>;
  }
}

class UserForm extends React.Component {
  submit() {
    this.props.callback({
      name: this.field.value,
      skill: parseInt(this.slider.value)
    });
    this.field.value = '';
    this.slider.value = 5; // seems like a sensible default
  }
  render() {
    let v = this.props.values;
    return <div>
      <label htmlFor="name">Enter name: </label>
      <input id="name" type="text" ref={el => this.field = el} defaultValue={v.name}/>
      <br/>
      <label htmlFor="skill">Assess skill:</label>
      <input id="skill" type="range" min="1" max="10" ref={el => this.slider = el} defaultValue={v.skill}/>
      <br/>
      <button onClick={()=> this.submit()}>{this.props.button || 'Submit'}</button>
    </div>
  }
}

class Roster extends React.Component {
  constructor(props){
    super(props);
    this.state = { users: this.props.users };
    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
  }
  update(usernumber,newuserdata) {
    let updatedusers = [].concat(this.state.users); // making a copy to be nice
    updatedusers.splice(usernumber,1,newuserdata);
    this.setState({users:updatedusers});
  }
  add(newuserdata) {
    this.setState({users:this.state.users.concat(newuserdata)});
  }
  render() {
    let users = this.state.users.map(function(u,n){
      return <User key={n} name={u.name} skill={u.skill} update={this.update.bind(this,n)} />;
    }.bind(this));
    return <div>
      {users}
      <h4>Add new user:</h4>
      <UserForm values={{name:'',skill:5}} callback={this.add} button="Add"/>
    </div>;
  }
}

let userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

let Tester = () => <Roster users={userdata} />;

ReactDOM.render(<Tester/>,document.getElementById("target"));


