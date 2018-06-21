import React from 'react';
import '../App.css';

class Jumbotron extends React.Component{
    render(){
        return(
            <div className="jumbotron jumbotron-fluid" >
                <div className="container">
                    <h1 class="display-4">Welcome to Worker Finder</h1>
                    <form>
                        <div class="input-group">
                            <input type="text" class="form-control" size="20" placeholder="eg. Carpenter, Pest control" required />
                            <div class="input-group-btn">
                                <button type="button" class="btn btn-danger">Search</button>
                            </div>
                        </div>
                    </form>
                    <p class="lead"> Search here the daily required workers</p>

                </div>
            </div>
        )
    }
}

export default Jumbotron;