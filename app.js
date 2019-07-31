// Nav Bar / Menu Component
Vue.component('nav-bar', {
    template: '<a>{{ title }}</a>',
    props: ['title']
})

new Vue({
    el: '#menu',
    data: {
        posts: [
            { id: 2, title: 'Movie Library' },
            { id: 2, title: 'Home' },
            { id: 3, title: 'Categories' },
            { id: 4, title: 'Random' }
        ]
    }
})

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

//Categories Page
new Vue(
    {
        el: '#categories',
        data: {
            title: 'Movie Library',
            movieList: movie,
            rating: '',
            genre: movie.genre,
            image: movie.img
        },
        methods: {
            toggleCategories: function (movie) {
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

// Random Page 

const vm = new Vue({
    el: '#random',
    data: {
        results: []
    },
    mounted() {
        axios.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=4n5lE5ZwsDm25Ly8WGEovwlz4RulFzbt")
            .then(response => {
                this.results = response.data.results
                console.log(this.results)
            })
    } 
});

// const vm = new Vue({
//     el: '#random',
//     data: {
//         results: [{
//                 title: "the very first post",
//                 abstract: "lorem ipsum some test dimpsum"
//             },
//             {
//                 title: "and then there was the second",
//                 abstract: "lorem ipsum some test dimsum"
//             },
//             {
//                 title: "third time's a charm",
//                 abstract: "lorem ipsum some test dimsum"
//             },
//             {
//                 title: "four the last time",
//                 abstract: "lorem ipsum some test dimsum"
//             }
//         ]
//     }
// });
