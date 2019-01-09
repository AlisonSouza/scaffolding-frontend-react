import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getCompanyQuery} from '../queries/queries';

class IncomeDetails extends Component {
    displayIncomeDetails(){
        const {company} = this.props.data;
        console.log(this.props.data);
        console.log(company);

        if(company){
            return (
                <div>
                    <h2>{company.name}</h2>
                    <p>All Incomes of this Company:</p>
                    <ul className="other-books">
                        {company.income.map(item => {
                            return <li key={item.id}>{item.incomeType}</li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>No Company selected...</div>
            )
        }
    }
    render() {
      return (
        <div id="book-details">
          {this.displayIncomeDetails()}
        </div>
      );
    }
  }

export default graphql(getCompanyQuery,{
    options: (props) => {
        return{
            variables:{
                id: props.companyId
            }
        }
    }
})(IncomeDetails);