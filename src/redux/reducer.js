import { statusFilters } from './constants';

const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== action.payload.taskId),
      };

    case 'tasks/toggleCompleted':
      return {
        ...state,
        tasks: state.tasks.map(task => ({
          ...task,
          completed:
            task.id === action.payload.taskId
              ? !task.completed
              : task.completed,
        })),
      };

    case 'filters/setFilter':
      return {
        ...state,
        filters: { ...state.filters, status: action.payload.filterStatus },
      };

    default:
      return state;
  }
};
