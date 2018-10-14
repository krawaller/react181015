// Solution based off exercise 4 part 4

// ************************ Redux parts ************************
let initialstate = {
  strength: 3,
  intelligence: 3,
  stamina: 3
};

let others = { // for use when we lower others to get down to 10
  strength: ["intelligence", "stamina"],
  intelligence: ["strength", "stamina"],
  stamina: ["strength", "intelligence"]
};

let reducer = (state, action) => {
  switch (action.type) {
    case "SETCHARACTERISTIC":
      let ret = {...state, [action.characteristic]: action.value};
      let tolower = others[action.characteristic], n = 0;
      while (ret.strength + ret.intelligence + ret.stamina > 10) {
        n = n ? 0 : 1; // change between the two others
        ret[tolower[n]] = Math.max(1, ret[tolower[n]] - 1);
      }
      return ret;
    default:
      return state;
  }
};

let store = Redux.createStore(reducer, initialstate);

let actionCreators = {
  setCharacteristic(characteristic, amount) {
    return {type: 'SETCHARACTERISTIC', characteristic, value: amount};
  }
};

// ************************ React parts ************************

let Slider = props => (
  <div>
    <input type="range" min="1" max="5" onChange={e => props.update(Number(e.target.value))} value={props.val}/>
    {props.name}: {props.val}
  </div>
);

let Generator = props => (
  <div>
    <Slider update={v => props.setCharacteristic('strength', v)} name="Strength" val={props.strength}/>
    <Slider update={v => props.setCharacteristic('intelligence', v)} name="Intelligence" val={props.intelligence}/>
    <Slider update={v => props.setCharacteristic('stamina', v)} name="Stamina" val={props.stamina}/>
    <div>Remaining: {10 - props.strength - props.stamina - props.intelligence}</div>
  </div>
);

// End result is ConnectedGenerator gets strength,
// intelligence, stamina and setCharacteristic
let ConnectedGenerator = ReactRedux.connect(
  appState => appState, // map all of app state into props
  actionCreators // bind all of actionCreators and put into props
)(Generator);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ConnectedGenerator/>
  </ReactRedux.Provider>,
  document.getElementById("target")
);
