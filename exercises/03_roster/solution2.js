
// Roster part 2 solution

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

class Tester extends React.Component {
  constructor(props){
    super(props);
    this.state = {msg: "Enter data and submit it!"};
    this.submitted = this.submitted.bind(this);
  }
  submitted(data) {
    this.setState({msg:"You submitted "+data.name+" with skill "+data.skill+"."});
  }
  render() {
    return <div>
      <p>{this.state.msg}</p>
      <UserForm callback={this.submitted} values={{name:"John Doe",skill:3}} />
    </div>;
  }
}

ReactDOM.render(<Tester/>,document.getElementById("target"));


