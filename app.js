const movie = [
    {
        title: 'The Lion King',
        description: "A delightful children's movie.",
        genre: 'Family',
        director: 'Karen Gilchrist',
        rating: 'G',
        showDetail: false,
        // img: require('https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg'),

    },
    {
        title: 'The Lion King II',
        description: "A delightful children's movie.",
        genre: 'Family',
        director: 'Karen Gilchrist',
        rating: 'G',
        showDetail: false,
    },
    {
        title: 'Silence of the Lambs',
        description: "Crazy Cannibal",
        genre: 'Horror',
        director: 'Ron Bozman',
        rating: 'R',
        showDetail: false
    },
    {
        title: 'Planet Earth II',
        description: "Hours of beautiful but heart attack-inducing nature footage",
        genre: 'Documentary',
        director: 'David Attenborough',
        rating: 'G',
        showDetail: false,
    },
    {
        title: 'Titanic',
        description: "The boat sinks.",
        genre: 'Romance',
        director: 'James Cameron',
        rating: 'PG-13',
        showDetail: false,
    }
]

const app = new Vue(
    {
        el: '#movie-list',
        data: {
            title: 'Movie Library',
            movieList: movie,
            rating: '',
            image: movie.img
        },
        methods: {
            toggleDetails: function (movie) {
                movie.showDetail = !movie.showDetail
            },
            filterList: function () {
                this.rating = event.target.value;
            }
        },
        computed: {
            uniqueItemsList: function () {
                const ratings = [];
                this.movieList.forEach((item) => {
                    if (!ratings.includes(item.rating)) {
                        ratings.push(item.rating);
                    }
                });
                return ratings;
            }
        }
    },
);

// Nav Bar / Menu Component
Vue.component('nav-bar', {
    template: '<a>{{ title }}</a>',
    props: ['title']
})

new Vue({
    el: '#menu',
    data: {
        posts: [
            { id: 1, title: 'Home' },
            { id: 2, title: 'Categories' },
            { id: 3, title: 'Random' }
        ]
    }
})

new Vue(
    {
        el: '#categories',
        data: {
            title: 'Movie Library',
            movieList: movie,
            genre: ''
        },
        methods: {
            toggleDetails: function (movie) {
                movie.showDetail = !movie.showDetail
            },
            filterList: function () {
                this.genre = event.target.value;
            }
        },
        computed: {
                uniqueGenre: function () {
                    const genres = [];
                    this.movieList.forEach((item) => {
                        if (!genres.includes(item.genre)) {
                            genres.push(item.genre);
                        }
                    });
                    return genres;
                    
                }
            }
    },
);
