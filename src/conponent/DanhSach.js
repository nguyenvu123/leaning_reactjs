import React , { Component } from 'react';
class danhsach extends Component {
    render() {
        var { danhsach } =  this.props;
        console.log(danhsach);
            var elmDS = danhsach.map((task, index) => {
            console.log(task.name);
    })
  return (
    <div className="danhsach">
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th colSpan={2}>status</th>
            </tr>
            <tr>
                <td>meo</td>
            </tr>
            <tr>
                <td>meo</td>
            </tr>
            <tr>
                <td>meo</td>
            </tr>
            <tr>
                <td>meo</td>
            </tr>
   
            </tbody>
        </table>
        
    </div>
  );
    }
}
    


export default danhsach;








