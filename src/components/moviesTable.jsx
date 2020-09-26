import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';

class MoviewTable extends Component {
    columns = [
        {path: 'title', lable: 'Title'},
        {path: 'genre.name', lable: 'Genre'},
        {path: 'numberInStock', lable: 'Stock'},
        {path: 'dailyRentalRate', lable: 'Rate'},
        {key: 'like', 
            content: movie => <Like liked={movie.liked}
            onClick={()=> this.props.onLike(movie)}/>},
        {key: 'delete', 
        content: movie =>
        <button onClick={() => this.props.onDelete(movie)} 
        className="btn btn-danger btn-sm">Delete</button>}
       
    ];


    render() { 
        const { movies, sortColumn, onSort } = this.props;

    return ( 

       
        <Table 
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
        />

     );
    
    }
}
 

export default MoviewTable;