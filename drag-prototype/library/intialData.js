const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Mario', strength: 100 },
    'task-2': { id: 'task-2', content: 'Snake', strength: 600 },
    'task-3': { id: 'task-3', content: 'Link', strength: 100 },
    'task-4': { id: 'task-4', content: 'Byleth', strength: 1000 },
    'task-5': { id: 'task-5', content: 'Rooooob', strength: 9001 },
    'task-6': { id: 'task-6', content: 'Steve', strength: 1337 }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Units',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'Briefing',
      taskIds: ['task-5', 'task-2', 'task-4']
    },
    'column-3': {
      id: 'column-3',
      title: 'Squad',
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
  strength: 2000

};

export default initialData;
