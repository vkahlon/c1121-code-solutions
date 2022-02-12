import React from 'react';
import ReactDOM from 'react-dom';
import intialData from '../library/intialData';
import Column from './Column';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = intialData;
  }

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns;
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      return <Column key={column.id} column={column} tasks={tasks}/>;
    });
  }
}
ReactDOM.render(
  < App />,
  document.querySelector('#root')
);
