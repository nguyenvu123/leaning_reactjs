
import React, { Component } from 'react'
import Taskform from './conponent/TaskForm';
import Control from './conponent/Control';
import TaskList from './conponent/TaskList';



class App extends Component {

    constructor (props) {
        super (props) 
         this.state = {
            tasks_db : [],
            isDisplayForm: true
         }
        
    }

    componentDidMount()  {
          if(localStorage && localStorage.getItem('tasks_db')) {
            var get_task_db = JSON.parse(localStorage.getItem('tasks_db'));
            this.setState({

                tasks_db: get_task_db
            })
         }
    }

    generateData = () => {
        var tasks = [

            {
                id:   this.rendumdstring(),
                name: 'học lập trình php',
                status:  true,
            },
            {
                id:   this.rendumdstring(),
                name: 'học lập trình reactjs',
                status:  false,
            },
            {
                id:   this.rendumdstring(),
                name: 'học lập trình not js',
                status:  true,
            },
            {
                id:   this.rendumdstring(),
                name: 'học lập trình html',
                status:  false,
            },
        ]

        // this.setState ({
        //     tasks_db: tasks
        // });

        localStorage.setItem('tasks_db', JSON.stringify(tasks));
    }

    rendumdstring() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    onToggleForm = () => {
        this.setState ({ 
            isDisplayForm: !this.state.isDisplayForm
        })
    }
    taskFormOnSubmit = (data) => {
        var task =  {
            id: this.rendumdstring(),
            name: data.name,
            status: data.status
        }
        var { tasks_db } =  this.state;
        tasks_db.push(task);
        this.setState ({ 
            tasks_db: tasks_db
        });

        localStorage.setItem('tasks_db', JSON.stringify(tasks_db)); //hàm lưu vào local
        
    }

    render() {
        var { tasks_db, isDisplayForm } = this.state;
        var elemForm =  isDisplayForm ?  <Taskform taskForSB={this.taskFormOnSubmit} /> : '';    

        return (
            <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                { /*TaskForm */ }

                { elemForm }

                </div>
                <div className={isDisplayForm ? 'col-lg-8': 'col-lg-12'}>
                    <button type="button"
                     className="btn btn-primary"
                     onClick = { this.onToggleForm }
                     >


                        <span 
                        className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                    <button
                     type="button" 
                     className="btn btn-primary"
                     onClick = { this.generateData }
                     
                     >
                        tạo dữ liệu
                    </button>
                    
                    {/* SEARCH VÀ SORT*/ }

                    <Control />

                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                           <TaskList tasks_db = { tasks_db }/>


                        </div>
                    </div>
                </div>
            </div>
        </div>



        );
    }
}

export default App;