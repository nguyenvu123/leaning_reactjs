import React from 'react';


function taskForm() {
  return (
    <div className="task-form">
        <form>
            <div className="form-row align-items-center">
                <div className="col-sm-3 my-1">
                    <label className="sr-only">Name</label>
                    <input type="text" className="form-control" id="inlineFormInputName" />
                </div>

                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </select>
                <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </div>
                <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary">Hủy bỏ</button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default taskForm;





