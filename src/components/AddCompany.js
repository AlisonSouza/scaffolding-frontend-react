import React, { Component } from 'react';
import {graphql, compose} from 'react-apollo';
import {getCompaniesQuery, addCompanyMutation} from '../queries/queries';

class AddCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            code: ''
        };
    }
    displayCompany(){
        var data = this.props.getCompaniesQuery;
        if(data.loading){
            return (<option disabled>Loading Companies...</option>);
        } else {
            return data.companies.maps(company => {
                return (<option key={company.id} value={company.id}>{company.name}</option>);
            })
        }
    }
    submitForm(e){
        e.preventDefault();
        this.props.addCompanyMutation({
            variables: {
                name: this.state.name,
                code: this.state.code
            },
            refetchQueries: [{query:getCompaniesQuery}]
        });
    }
    render(){
        return(
            <form id="add-company" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Company name:</label>
                    <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                </div>
            
                <div className="field">
                    <label>Code:</label>
                    <input type="text" onChange={(e) => this.setState({code: e.target.value})}/>
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(addCompanyMutation, {name: "addCompanyMutation"})
)(AddCompany);