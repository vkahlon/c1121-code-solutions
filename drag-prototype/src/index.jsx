import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import intialData from '../library/intialData';
import Column from './Column';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = intialData;
    this.onDragEnd = this.onDragEnd.bind(this);

  }

  onDragEnd() {
    return result => {
      // TODO: reorder our column
    };
  }

  render() {
    return <DragDropContext onDragEnd={this.onDragEnd}>
     {this.state.columnOrder.map(columnId => {
       const column = this.state.columns[columnId];
       const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
       return <Column key={column.id} column={column} tasks={tasks}/>;
     })};
    </DragDropContext>;
  }
}
ReactDOM.render(
  < App />,
  document.querySelector('#root')
);
