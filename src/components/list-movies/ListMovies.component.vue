<template>
<v-container>
    <v-row justify="space-around">
        <v-col cols="12" sm="12" md="12" class="d-flex flex-column align-center" style="padding: 10px;">
            <v-flex>
                <v-text-field v-model="searchQuery" label="Digite o título do filme..." placeholder="Digite o título do filme..." solo style="padding: 15px 20px;"></v-text-field>
            </v-flex>
            <v-btn class="btn rounded-lg" @click="searchMovies" color="#b13030" style="height: 60px; font-size: 18px; padding: 5px; margin-left: 500px;">
                <span style="color: white;">Buscar</span> </v-btn>
        </v-col>
    </v-row>

    <v-row justify="space-around">
    <v-col cols="12" style="color: white; opacity: ;">
        <h2 v-if="showSearchResults" style="color: white; font-size: 30px; padding: 15px;">Resultado da Pesquisa</h2>
    </v-col>
    </v-row>

    <v-row justify="space-around">
        <v-col v-if="loading || error || movies.length === 0" cols="12" sm="8" md="6" class="d-flex flex-column align-center">
            <v-alert v-if="error" type="error">Nenhum filme foi encontrado com o título "{{ searchQuery }}"</v-alert>
            <v-progress-circular v-if="loading" indeterminate color="primary">Carregando...</v-progress-circular>
            <v-row v-else-if="movies.length === 0" justify="center"></v-row>
        </v-col>
    </v-row>git 

    <div justify="space-around" class="movie-grid">
        <div justify="space-around" v-for="movie in movies" :key="movie.imdbID" class="movie-item" @click="viewMovieDetails(movie)" style="background-color:#5753539d; z-index: 1;">
            <v-img :src="movie.poster" class="movie-poster"></v-img>
            <v-card-title style="color: black; font-size: 19px; word-break: break-word; overflow-wrap: break-word; font-weight: bold; z-index: 1;">{{ movie.title }}</v-card-title>
            <v-card-subtitle style="color: black; font-size: 15px; font-weight: bold; z-index: 1;">{{ movie.year }}</v-card-subtitle>
        </div>
    </div>
</v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MovieService from '../list-movies/services/list-movies.service';
import Movie from '../list-movies/models/movie.entity';

@Component
export default class ListMoviesComponent extends Vue {
    private searchQuery = '';
    private movies: Movie[] = [];
    private loading = false;
    private error = false;
    private showSearchResults = false;

    private searchMovies() {
        if (this.searchQuery.trim() === '') return;

        this.loading = true;
        this.error = false;
        this.showSearchResults = true;

        MovieService.searchMoviesByTitle(this.searchQuery)
            .then(movies => {
                this.movies = movies;
                this.loading = false;
                this.error = movies.length === 0;
            })
            .catch(() => {
                this.movies = [];
                this.loading = false;
                this.error = true;
            });
    }
}
</script>

<style scoped>
.movie-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.search-results {
  color: #fff; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
  font-size: 30px;
  padding: 15px;
}

.white-text-shadow {
    color: white; /* Cor do texto */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.movie-item {
    width: calc(22% - 30px);
    color: #ccc;
    margin-bottom: 15px;
    margin-right: 5px;
    border: 1px solid #180808;
    padding: 5px;
    background-color: #0e0404;
}

.movie-item:hover {
    background-color: #b13030;
    cursor: pointer;
    color: #ccc;
}

.rounded-input .v-input__control {
    border-radius: 20px;
    background-color: #ccc;
}

.btn {
    border: #ccc;
    color: #e4e4e4;
    background-color: #b13030;
    border-radius: 3px;
    box-shadow: 0px 3px 6px rgba(143, 141, 141, 0.706);
    padding: 30px;
    width: 170px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 45px;
    height: 100px;
}

.custom-input .v-input__control input {
    background-color: #fff;
    color: #050303;
    background-color: #575353; 
}

@media screen and (max-width: 768px) {
    .movie-item {
        flex: 0 0 calc(50% - 20px);
    }
}

@media screen and (max-width: 480px) {
    .movie-item {
        flex: 0 0 calc(100% - 20px);
    }
}

</style>