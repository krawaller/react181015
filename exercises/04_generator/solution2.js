

// Solution part 2

$('#target').html(`
	<div id="myapp">
		<input id="strength" type="range" value="3" min="1" max="5">
		Strength: <span id="showstrength"/>
		<br/>
		<input id="intelligence" type="range" value="3" min="1" max="5">
		Intelligence: <span id="showintelligence"/>
	</div>
`);

let initialstate = {
	strength: 3,
	intelligence: 3
};

let reducer = (state,action) => {
	switch(action.type){
		case "SETSTRENGTH": return {...state, strength: action.value};
		case "SETINTELLIGENCE": return {...state, intelligence: action.value};
		default: return state;
	}
}

let store = Redux.createStore(reducer,initialstate);

let actionCreators = {
  setStrength(amount) {
    return {type: 'SETSTRENGTH', value: amount};
  },
  setIntelligence(amount) {
    return {type: 'SETINTELLIGENCE', value: amount};
  }
};

let boundActionCreators = Redux.bindActionCreators(
  actionCreators,
  store.dispatch
);

let strslider = document.getElementById("strength");
strslider.addEventListener("change", e => {
  boundActionCreators.setStrength(e.target.value);
});

let intslider = document.getElementById("intelligence");
intslider.addEventListener("change", e => {
  boundActionCreators.setIntelligence(e.target.value);
});

let updateUI = state => {
	$("#showstrength").text(state.strength);
	$("#showintelligence").text(state.intelligence);
}

store.subscribe(() => { // <-- not called with state!
  updateUI(store.getState());
});

updateUI(store.getState());




