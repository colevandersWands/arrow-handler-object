function init() {
  // debugger;

  document.getElementById('root').appendChild(incrementor.render());

  incrementor.log.push({
    initialState: JSON.parse(JSON.stringify(incrementor.state))
  })

};
window.onload = init;
