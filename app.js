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
        title: 'Free State Brewery',
        type: 'Micro',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'Kansas',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false,
    },
    {
        title: 'Avondale Brewing Co',
        type: 'Planning',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'Missouri',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false,
    },
    {
        title: 'DogFish',
        type: 'Regional',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'Oklahoma',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false
    },
    {
        title: 'Coors',
        type: 'Micro',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'Texas',
        phone: '01234567',
        website_url: 'http://www.beer.com',
        showDetail: false,
    },
    {
        title: 'Heineken',
        type: 'Planning',
        address: '1234 Happy Street',
        city: 'Springfield',
        state: 'California',
        phone: '01234567',
        website_url: 'http://www.beer.com',
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
            type: brewery.type,
        },
        methods: {
            toggleCategories: function (brewery) {
                brewery.showDetail = !brewery.showDetail
            },

            filterList: function () {
                this.type = event.target.value;
            }
        },
        computed: {
            uniqueType: function () {
                const types = [];
                this.breweryList.forEach((item) => {
                    if (!types.includes(item.type)) {
                        types.push(item.type);
                    }
                });
                return types;

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
    methods: {
        myFunction: function () {
            this.randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }
    },
    mounted() {
        axios
            .get('https://api.openbrewerydb.org/breweries?page=1&per_page=10')
            .then(response => {
                this.info = response.data
                console.log(this.info)
            })
    }
})

new Vue({
    el: '#all',
    data() {
        return {
            apicall: null
        };
    },
    mounted() {
        axios
            .get('https://api.openbrewerydb.org/breweries?page=1&per_page=20')
            .then(response => {
                this.apicall = response.data
            })

    }
})

// random number for random api call array
 new Vue({
     el: '#number',

     data: {
         randomNumber: ''
     },

     methods: {
         myFunction: function () {
             this.randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
         }
     }

 });

// multiples: https://api.openbrewerydb.org/breweries?page=1&per_page=20

// by category (type) https://api.openbrewerydb.org/breweries?by_type=micro
