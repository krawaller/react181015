
// Roster part 4 solution

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
      <button onClick={()=>this.submit()}>Submit</button>
    </div>
  }
}

class Roster extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.user.name,
      skill: props.user.skill
    };
    this.update = this.update.bind(this);
  }
  update(newuserdata) {
    this.setState(newuserdata);
  }
  render() {
    return <User name={this.state.name} skill={this.state.skill} update={this.update} />;
  }
}

let Tester = () => <Roster user={{name:"John Doe",skill:3}} />;

ReactDOM.render(<Tester/>,document.getElementById("target"));


