const movie = [
    {
        title: 'The Lion King',
        description: "A delightful children's movie.",
        genre: 'Family',
        director: 'Karen Gilchrist',
        showDetail: false,
    },
    {
        title: 'The Lion King II',
        description: "A delightful children's movie.",
        genre: 'Family',
        director: 'Karen Gilchrist',
        showDetail: false,
    },
    {
        title: 'Silence of the Lambs',
        description: "Crazy Cannibal",
        genre: 'Horror',
        director: 'Ron Bozman',
        showDetail: false
    },
    {
        title: 'Planet Earth II',
        description: "Hours of beautiful but heart attack-inducing nature footage",
        genre: 'Documentary',
        director: 'David Attenborough',
        showDetail: false,
    },
    {
        title: 'Titanic',
        description: "The boat sinks.",
        genre: 'Romance',
        director: 'James Cameron',
        showDetail: false,
    }
]

const app = new Vue(
    {
        el: '#movie-list',
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
            uniqueItemsList: function () {
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


Vue.component('nav-bar', {
    props: ['title'],
    template: '<a>{{ title }}</a>'
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
