
// Roster part 7 solution

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
    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
    // if you want to feel like a ninja, use `reduce` instead! :)
    let users = {};
    this.props.users.forEach((user,n) => {
      users["user"+n] = user
    });
    this.state = { users: users };
  }
  update(userid,newuserdata) {
    let users = this.state.users;
    users[userid] = newuserdata;
    this.setState({users:users});
  }
  add(newuserdata) {
    let newid = "user"+(Object.keys(this.state.users).length+1);
    this.update(newid,newuserdata);
  }
  render() {
    let renderedusers = [];
    for(let id in this.state.users){
      let u = this.state.users[id];
      renderedusers.push(
        <User key={id} name={u.name} skill={u.skill} update={this.update.bind(this,id)} />
      );
    }
    return <div>
      {renderedusers}
      <h4>Add new user:</h4>
      <UserForm values={{name:'',skill:5}} callback={this.add} button="Add"/>
    </div>;
  }
}

let userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

let Tester = () => <Roster users={userdata} />;

ReactDOM.render(<Tester/>,document.getElementById("target"));


