
// Roster part 3 solution

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      name: props.name,
      skill: parseInt(props.skill)
    };
    this.startEdit = this.startEdit.bind(this);
    this.update = this.update.bind(this);
  }
  startEdit() {
    this.setState({
      editing: true
    });
  }
  update(vals) {
    this.setState({
      editing: false,
      name: vals.name,
      skill: vals.skill
    })
  }
  render() {
    let s = this.state;
    return s.editing ? <UserForm values={{name:s.name,skill:s.skill}} callback={this.update}/> : <div>
      <p>Name: {s.name}, skill: {s.skill} <button onClick={this.startEdit}>Edit</button></p>
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

let Tester = () => <User name="John Doe" skill={3} />;

ReactDOM.render(<Tester/>,document.getElementById("target"));


