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

const movie = [
    {
        title: 'The Lion King',
        description: "A delightful children's movie.",
        genre: 'Family',
        director: 'Karen Gilchrist',
        state: 'Kansas',
        showDetail: false,
        // img: require('https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg'),

    },
    {
        title: 'The Lion King II',
        description: "A delightful children's movie.",
        genre: 'Family',
        director: 'Karen Gilchrist',
        state: 'Missouri',
        showDetail: false,
    },
    {
        title: 'Silence of the Lambs',
        description: "Crazy Cannibal",
        genre: 'Horror',
        director: 'Ron Bozman',
        state: 'Oklahoma',
        showDetail: false
    },
    {
        title: 'Planet Earth II',
        description: "Hours of beautiful but heart attack-inducing nature footage",
        genre: 'Documentary',
        director: 'David Attenborough',
        state: 'Texas',
        showDetail: false,
    },
    {
        title: 'Titanic',
        description: "The boat sinks.",
        genre: 'Romance',
        director: 'James Cameron',
        state: 'California',
        showDetail: false,
    }
]

const app = new Vue(
    {
        el: '#movie-list',
        data: {
            title: 'Movie Library',
            movieList: movie,
            state: '',
            image: movie.img
        },
        methods: {
            toggleDetails: function (movie) {
                movie.showDetail = !movie.showDetail
                
            },
            filterList: function () {
                this.state = event.target.value;
            }
        },
        computed: {
            uniqueItemsList: function () {
                const states = [];
                this.movieList.forEach((item) => {
                    if (!states.includes(item.state)) {
                        states.push(item.state);
                    }
                });
                return states;
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
            state: '',
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


new Vue({
    el: '#random',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('https://api.openbrewerydb.org/breweries/0009')
            .then(response => {
                this.info = response.data
                console.log(this.info)
            })

    }
})
