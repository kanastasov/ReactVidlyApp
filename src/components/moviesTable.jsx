import React, { Component } from 'react';
import Like from './common/like';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';
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
        const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

    return ( 
        <table className="table">
        <TableHeader 
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}
        />

        <TableBody columns = {this.columns} data={movies} />
  
         </table>

     );
    
    }
}
 

export default MoviewTable;