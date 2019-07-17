const movie = [
    {
        title: 'The Lion King',
        description: "A delightful children's movie.",
        type: 'Family',
        producer: 'Karen Gilchrist',
        showDetail: false,
    },
    {
        title: 'Silence of the Lambs',
        description: "Crazy Cannibal",
        type: 'Horror',
        producer: 'Ron Bozman',
        showDetail: false
    },
    {
        title: 'Supernatural: The Complete 12th Season',
        description: "A (literally) neverending roadtrip.",
        type: 'DVD',
        producer: "",
        showDetail: false
    },
    {
        title: 'Planet Earth II',
        description: "Hours of beautiful but heart attack-inducing nature footage",
        type: 'streaming video',
        producer: 'David Attenborough',
        showDetail: false,
    },
    {
        title: 'Titanic',
        description: "The boat sinks.",
        type: 'DVD',
        producer: 'James Cameron',
        showDetail: false,
    },
    {
        title: 'The Sirens of Titan',
        description: "Mankind flung its advance agents ever outward, ever outward... it flung them like stones.",
        type: 'book',
        producer: 'Kurt Vonnegut',
        showDetail: false,
    },
    {
        title: 'Better Call Saul',
        description: "A slow-burning Breaking Bad prequel.",
        type: 'streaming video',
        producer: '',
        showDetail: false,
    },
    {
        title: 'Title 1',
        description: "A slow-burning Breaking Bad prequel.",
        type: 'e-book',
        producer: '',
        showDetail: false,
    },
    {
        title: 'Title 2',
        description: "A slow-burning Breaking Bad prequel.",
        type: 'e-book',
        producer: '',
        showDetail: false,
    }
]

const app = new Vue({
    el: '#movie-list',
    data: {
        title: 'Treehouse Public Library',
        movieList: movie,
        type: ''
    },
    methods: {
        toggleDetails: function (movie) {
            movie.showDetail = !movie.showDetail
        },
        filterList: function () {
            this.type = event.target.value;
        }
    },
    computed: {
        uniqueItemsList: function () {
            const types = [];
            this.movieList.forEach((item) => {
                if (!types.includes(item.type)) {
                    types.push(item.type);
                }
            });
            return types;
        }
    }
});
