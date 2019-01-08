import {gql} from 'apollo-boost';

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name:$name, genre:$genre, authorId:$authorId){
            name
            id
        }
    }
`

const getBookQuery = gql`
    query($id: ID){
        book(id:$id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`

const getCompaniesQuery = gql`
    {
        companies{
            name
            id
        }
    }
`

const addCompanyMutation = gql`
    mutation($name: String!, $code: String!){
        addCompany(name:$name, code:$code){
            id
            name
        }
    }
`
export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery, getCompaniesQuery, 
    addCompanyMutation};