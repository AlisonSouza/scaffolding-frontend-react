import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getCompaniesQuery} from '../queries/queries';

//components
import IncomeDetails from './IncomeDetails';

class CompanyList extends Component {
    constructor(props){
        super(props);
        this.state={
            selected: null
        }
    }
  displayCompanies(){
    var data = this.props.data;
    if(data.loading){
        return(<div>Loading...</div>);
    } else {
        return data.companies.map(company => {
            
            return (
                
                <li key={company.id} onClick={(e) => {this.setState({selected: company.id})}}>{company.name}</li>
            );
        })
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayCompanies()}
        </ul>
        <IncomeDetails companyId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getCompaniesQuery) (CompanyList);
