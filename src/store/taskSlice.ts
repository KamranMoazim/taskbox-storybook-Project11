import {createSlice,PayloadAction,configureStore} from '@reduxjs/toolkit';
import { TaskInterface } from '../components/Task';



const initialState:TaskInterface[]=[
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];


const taskSlice=createSlice({

    name:'Task',
    initialState,

    reducers:{

        archiveTask( state:any, action:PayloadAction<string> ){
            return state.map( (task:TaskInterface) => task.id === action.payload ? { ...task, state: 'TASK_ARCHIVED' } : task )
        },
        
        pinTask( state:any, action:PayloadAction<string> ){
            return state.map( (task:any) => task.id === action.payload ? { ...task, state: 'TASK_PINNED' } : task )
        }
    }
})


export const store=configureStore({reducer:taskSlice.reducer});


export const {archiveTask,pinTask} =taskSlice.actions;
export default taskSlice.reducer;
