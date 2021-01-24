import * as React from 'react';
import { useDispatch } from 'react-redux';
import '../../index.css';
import {archiveTask,pinTask} from '../../store/taskSlice';



export interface TaskInterface{
  id:string,
  title:string,
  state:any,
  updatedAt?:Date
}

export interface TaskProps {
    task:TaskInterface,
    onArchiveTask?:any,
    onPinTask?:any
}
 
const Task: React.SFC<TaskProps> = ({task:{id,title,state},onArchiveTask,onPinTask}) => {

    const dispatch=useDispatch();
    
    return ( 
        <div className={`list-item ${state}`}>


          <label className="checkbox">
            <input type="checkbox" defaultChecked={state === 'TASK_ARCHIVED'} disabled={true} name="checked" />
            <span className="checkbox-custom" onClick={() => dispatch(archiveTask(id))} />
          </label>


          <div className="title">
            <input type="text" value={title} readOnly={true} placeholder="Input title" />
          </div>
    

          <div className="actions" onClick={event => event.stopPropagation()}>
            {state !== 'TASK_ARCHIVED' && (
              <button onClick={() => dispatch(pinTask(id))}>
                <span className={`icon-star`} />
              </button>
            )}
          </div>
          

        </div>
     );
}
 


export default Task;