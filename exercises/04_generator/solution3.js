

// Solution part 3

$('#target').html(`
	<div id="myapp">
		<input id="strength" type="range" value="3" min="1" max="5">
		Strength: <span id="showstrength"/>
		<br/>
		<input id="intelligence" type="range" value="3" min="1" max="5">
		Intelligence: <span id="showintelligence"/>
		<br/>
		<input id="stamina" type="range" value="3" min="1" max="5">
		Stamina: <span id="showstamina"/>
	</div>
`);

let initialstate = {
	strength: 3,
	intelligence: 3,
	stamina: 3
};

let reducer = (state,action) => {
	switch(action.type){
		case "SETCHARACTERISTIC":
			return {...state, [action.characteristic]: action.value}
		default: return state;
	}
}

let store = Redux.createStore(reducer,initialstate);

let actionCreators = {
  setCharacteristic(characteristic,amount) {
    return {type: 'SETCHARACTERISTIC', characteristic, value: amount};
  }
};

let boundActionCreators = Redux.bindActionCreators(
  actionCreators,
  store.dispatch
);

$("#myapp").on("change","[type=range]", e => {
	let slider = e.target,
		characteristic = slider.id,
		amount = slider.value;
	boundActionCreators.setCharacteristic(characteristic,amount);
});

let updateUI = state => {
	Object.keys(initialstate).forEach(c => {
		$("#show"+c).text(state[c]);
	});
}

store.subscribe(() => { // <-- not called with state!
  updateUI(store.getState());
});

updateUI(store.getState());

