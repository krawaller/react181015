// Solution part 1

$('#target').html(`
	<div id="myapp">
		<input id="strength" type="range" value="3" min="1" max="5">
		Strength: <span id="showstr"/>
	</div>
`);

let initialstate = 3;

let reducer = (state,action) => {
	switch(action.type){
		case "SETSTRENGTH": return action.value;
		default: return state;
	}
}

let store = Redux.createStore(reducer,initialstate);

let actionCreators = {
    setStrength(amount) {
        return {type: 'SETSTRENGTH', value: amount};
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

let updateUI = state => {
	$("#showstr").text(state);
}

store.subscribe(() => { // <-- not called with state!
  updateUI(store.getState());
});

updateUI(store.getState());






