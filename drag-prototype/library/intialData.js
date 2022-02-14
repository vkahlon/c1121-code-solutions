const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Mario', strength: 500 },
    'task-2': { id: 'task-2', content: 'Snake', strength: 500 },
    'task-3': { id: 'task-3', content: 'Link', strength: 500 },
    'task-4': { id: 'task-4', content: 'Byleth', strength: 500 }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Units',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'Squad',
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2']
};

export default initialData;
