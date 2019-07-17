const movie = [
    {
        title: 'The Lion King',
        description: "A delightful children's movie.",
        genre: 'Family',
        producer: 'Karen Gilchrist',
        showDetail: false,
    },
    {
        title: 'Silence of the Lambs',
        description: "Crazy Cannibal",
        genre: 'Horror',
        producer: 'Ron Bozman',
        showDetail: false
    },
    {
        title: 'Supernatural: The Complete 12th Season',
        description: "A (literally) neverending roadtrip.",
        genre: 'DVD',
        producer: "",
        showDetail: false
    },
    {
        title: 'Planet Earth II',
        description: "Hours of beautiful but heart attack-inducing nature footage",
        genre: 'streaming video',
        producer: 'David Attenborough',
        showDetail: false,
    },
    {
        title: 'Titanic',
        description: "The boat sinks.",
        genre: 'DVD',
        producer: 'James Cameron',
        showDetail: false,
    },
    {
        title: 'The Sirens of Titan',
        description: "Mankind flung its advance agents ever outward, ever outward... it flung them like stones.",
        genre: 'book',
        producer: 'Kurt Vonnegut',
        showDetail: false,
    },
    {
        title: 'Better Call Saul',
        description: "A slow-burning Breaking Bad prequel.",
        genre: 'streaming video',
        producer: '',
        showDetail: false,
    }
]

const app = new Vue({
    el: '#movie-list',
    data: {
        title: 'Treehouse Public Library',
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
});
