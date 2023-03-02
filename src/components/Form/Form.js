import React from 'react';

const Form = (props) => {
    const formName = props.formName;
    return (
        <section class="content">
            <div class="container-fluid">
                <div class="card card-default rounded-0">
                <div class="card-header">
                    <h3 class="card-title">Add New {formName}</h3>

                    <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                    
                    </div>
                </div>
                
                <div class="card-body">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>{formName} Name</label>
                            <input class="form-control" type="text" placeholder=""/>
                        </div>
                    </div>
                    
                    
                    
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <button type="button" class="btn btn-block btn-info btn-flat">Save</button>
                        </div>
                    </div>
                    
                    
                </div>
                
                
                </div>
            </div>
        </section>
    );
};

export default Form;