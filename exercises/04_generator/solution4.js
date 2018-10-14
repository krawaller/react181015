

// Solution part 4

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
		<br/>
		Points remaining: <span id="remaining"/>
	</div>
`);

let initialstate = {
	strength: 3,
	intelligence: 3,
	stamina: 3
};

let others = { // for use when we lower others to get down to 10
	strength: ["intelligence","stamina"],
	intelligence: ["strength","stamina"],
	stamina: ["strength","intelligence"]
};

let reducer = (state,action) => {
	switch(action.type){
		case "SETCHARACTERISTIC":
			let ret = {...state, [action.characteristic]: action.value}
			let tolower = others[action.characteristic], n = 0;
			while (ret.strength+ret.intelligence+ret.stamina > 10){
				n = n ? 0 : 1; // change between the two others
				ret[tolower[n]] = Math.max(1,ret[tolower[n]]-1);
			}
			return ret
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
		amount = parseInt(slider.value);
	boundActionCreators.setCharacteristic(characteristic,amount);
});

let updateUI = state => {
	Object.keys(initialstate).forEach(c => {
		$("#show"+c).text(state[c]);
		$("#"+c).val(state[c]);
	});
	$("#remaining").text(10-state.strength-state.stamina-state.intelligence);
}

store.subscribe(() => { // <-- not called with state!
  updateUI(store.getState());
});

updateUI(store.getState());
