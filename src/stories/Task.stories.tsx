import React from 'react';
import Task from '../components/Task';

export default {
  component: Task,
  title: 'Task',
//   parameters: { assets: ['designs/items.png'] },
};

const Template = (args:any) => <Task {...args} />;

const task= {
    id: "1",
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  };

export const Default = ()=>{
    return(
        <Task task={task} />
    ); 
};



export const Pinned = ()=>{
    return(
        <Task task={{...task,state:"TASK_PINNED"}} />
    );
};


export const Archived = ()=>{
    return (
        <Task task={{...task,state:'TASK_ARCHIVED'}} />
    );
};
