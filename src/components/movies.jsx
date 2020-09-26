import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable'
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import _ from 'lodash';
//next 19
class Movies extends Component {
    state = {  
        movies: [],
        currentPage: 1,
        pageSize: 4,
        genres : [],
        sortColumn: { path: 'title', order: 'asc'}
    };  

    componentDidMount() {
        const genres= [{_id: "", name:'All Genres'},...getGenres()];

        this.setState({movies: getMovies(), genres: genres})
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m=> m._id !== movie._id);
        this.setState({movies: movies});
        console.log(movie);
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});

        console.log(movie);
    };

    handlePageChange = page => {
       this.setState({ currentPage: page});
    };

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre,
        currentPage: 1});
        console.log(genre);
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };

    getPagedData = () => {
        const{ 
            pageSize, 
            sortColumn,
            currentPage, 
            selectedGenre,
            movies: allMovies }
               = this.state;

        const filtered = selectedGenre && selectedGenre._id ?  
        allMovies.filter(m =>m.genre._id === selectedGenre._id) 
        : allMovies; 

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data:movies }
    };
    render() {  
        const { length: count } = this.state.movies;
        const{ pageSize, sortColumn, currentPage} = this.state;
        if(count === 0)
            return <p>There are no movies in the database.</p>;

        const {totalCount, data: movies} = this.getPagedData();

        return (
        <div className="row">
            <div className="col-3">
            <ListGroup  
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
             onItemSelect={this.handleGenreSelect}
             />

            </div>

            <div className="col">
            <p>Showing {totalCount} movies in the database.</p>
          
            <MoviesTable
                movies={movies}
                sortColumn={sortColumn}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
            />
            <Pagination  
                itemsCount={totalCount} 
                pageSize={pageSize} 
                currentPage={currentPage}
                onPageChange={this.handlePageChange}/>

            </div>

         
        </div>
    );}
}
 
export default Movies;