// how to log?

const incrementor = {
  state: {
    stepSize: 1,
    current: 0,
  },
  log: [],
  // logic methods that read/write state
  increment: function () {
    const newCurrent = this.state.current + this.state.stepSize;
    this.state.current = newCurrent;
  },
  decrement: function () {
    const newCurrent = this.state.current - this.state.stepSize;
    this.state.current = newCurrent;
  },
  reset: function () {
    this.state.current = 0;
  },
  // render methods
  //  handlers are declared in render methods using ()=>{}
  //  they will execute user stories and log actions
  renderCurrent: function () {
    const li = document.createElement('li');
    li.innerHTML = this.state.current;
    return li;
  },
  renderStep: function (operation) {
    const li = document.createElement('li');
    li.innerHTML = `... ${operation} ${this.state.stepSize} = ${this.state.current}`;
    return li;
  },
  render: function () {

    const actionsList = document.createElement('ul');
    actionsList.appendChild(this.renderCurrent());

    const upButton = document.createElement('button');
    upButton.innerHTML = '+';
    upButton.onclick = () => {
      this.increment();
      const newLi = this.renderStep('+');
      actionsList.appendChild(newLi);
      this.log.push({
        action: 'up',
        state: JSON.parse(JSON.stringify(this.state))
      })
    };

    const downButton = document.createElement('button');
    downButton.innerHTML = '-';
    downButton.onclick = () => {
      this.decrement();
      const newLi = this.renderStep('-');
      actionsList.appendChild(newLi);
      this.log.push({
        action: 'down',
        state: JSON.parse(JSON.stringify(this.state))
      })
    };

    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'reset';
    resetButton.onclick = () => {
      this.reset();
      actionsList.innerHTML = '';
      actionsList.appendChild(this.renderCurrent());
      this.log.push({
        action: 'reset',
        state: JSON.parse(JSON.stringify(this.state))
      })
    };

    const containerEl = document.createElement('div');
    containerEl.appendChild(upButton);
    containerEl.appendChild(downButton);
    containerEl.appendChild(resetButton);
    containerEl.appendChild(actionsList);

    return containerEl;
  }
};
