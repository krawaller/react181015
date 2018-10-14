// Roster part 1 solution

class UserForm extends React.Component {
  submit() {
    this.props.callback(this.field.value);
  }
  render() {
    let d = this.props.defaultname;
    return <div>
      <label htmlFor="name">Enter name: </label>
      <input id="name" type="text" ref={el => this.field = el} defaultValue={d}/>
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
    this.setState({msg:"You submitted the name "+data});
  }
  render() {
    return <div>
      <p>{this.state.msg}</p>
      <UserForm callback={this.submitted} defaultname="John Doe" />
    </div>
  }
}

ReactDOM.render(<Tester/>,document.getElementById("target"));



