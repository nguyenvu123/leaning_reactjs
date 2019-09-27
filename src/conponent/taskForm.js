
import React, { Component } from 'react'
class TaskForm extends Component {

constructor (props) {
    super(props);
    this.state = { 
        name : '',
        status : false
    };
}

changeInput = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name] : value
    });
}

onsubmit = (event) => {
    event.preventDefault();
    this.props.taskForSB(this.state);
}

    render() {

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit= {this.onsubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" 
                            className="form-control"
                            name="name"
                            value= {this.state.name}
                            onChange = { this.changeInput }
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select 
                        className="form-control" 
                        name="status"
                        value= {this.state.status}
                        onChange = { this.changeInput }
                        
                        
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}

export default TaskForm;