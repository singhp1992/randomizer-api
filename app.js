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

const brewery = [
    {
        title: 'The Lion King',
        description: "A delightful children's movie.",
        genre: 'Family',
        director: 'Karen Gilchrist',
        state: 'Kansas',
        showDetail: false,
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
        el: '#brewery-list',
        data: {
            title: 'Brewery Library',
            breweryList: brewery,
            state: '',
        },
        methods: {
            toggleDetails: function (brewery) {
                brewery.showDetail = !brewery.showDetail
                
            },
            filterList: function () {
                this.state = event.target.value;
            }
        },
        computed: {
            uniqueItemsList: function () {
                const states = [];
                this.breweryList.forEach((item) => {
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
            title: 'Brewery Library',
            breweryList: brewery,
            state: '',
            genre: brewery.genre,
        },
        methods: {
            toggleCategories: function (brewery) {
                brewery.showDetail = !brewery.showDetail
            },

            filterList: function () {
                this.genre = event.target.value;
            }
        },
        computed: {
            uniqueGenre: function () {
                const genres = [];
                this.breweryList.forEach((item) => {
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
