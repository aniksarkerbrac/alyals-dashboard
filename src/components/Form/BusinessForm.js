import React from 'react';

const BusinessForm = () => {
    return (
        <section class="content">
            <div class="container-fluid">
                <div class="card card-default rounded-0">
                <div class="card-header">
                    <h3 class="card-title">Add Business Information</h3>

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
                            <label>Name</label>
                            <input class="form-control" type="text" placeholder="Your name ....."/>
                        </div>

                        <div class="form-group">
                            <label>Phone</label>
                            <input class="form-control" type="number" placeholder="Your phone number ....."/>
                        </div>

                        <div class="form-group">
                            <label>City</label>
                            <input class="form-control" type="text" placeholder="Your city ......"/>
                        </div>
                        
                    </div>
                    
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Code</label>
                            <input class="form-control" type="text" placeholder="Your code ....."/>
                        </div>

                        <div class="form-group">
                            <label>Address</label>
                            <input class="form-control" type="text" placeholder="Your details address ....."/>
                        </div>

                        <div class="form-group">
                            <label>Police Station</label>
                            <input class="form-control" type="text" placeholder="Your police station ......"/>
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

export default BusinessForm;