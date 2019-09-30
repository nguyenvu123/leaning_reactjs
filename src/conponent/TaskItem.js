
import React, { Component } from 'react'

class TaskItem extends Component {
  
    deleteItem = () => {
         this.props.delete(this.props.task.id);
       
    }
    updateStatus =  () => {
        this.props.upDateSatus(this.props.task.id);
    }
    render() {
        var { index, task } = this.props;
        var status = task.status;
        var stringStatus = status ? 'kích hoạt': 'Ẩn';
        

        
        return (
          
            <tr>
                <td>{ index +1}</td>
                <td>{ task.name }</td>
                <td className="text-center">
                    <span 
                    className=" "
                    onClick = {this.updateStatus}
                    
                    >
                    
                { stringStatus }
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" 
                    className="btn btn-danger"
                     onClick = { this.deleteItem }
                    >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
     
        );
    }
}

export default TaskItem;



