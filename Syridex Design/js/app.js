new Vue({
    el: '#app',

    data: {

        dialog1: false,
        dialog2: false,
        dialog3: false,

        items: [
            {title: 'Forside'},
            {title: 'Portfolio'},
            {title: 'Kontakt'},
        ],
        valid: false,
        name: '',
        nameRules: [
            v => !!v || 'Navn er påkrævet',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail er påkrævet',
            v => /.+@.+/.test(v) || 'E-mail er påkrævet',
        ],
        telefon: '',
        telefonRules: [
            v => !!v || 'Telefon nummer skal være 8 tal',
            v => v.length == 8 || 'Telefon nummer skal være 8 tal',
        ],
        besked: '',
        beskedRules: [
            v => !!v || 'Besked er påkrævet',
        ],
    },
    methods: {

    },

    vuetify: new Vuetify(),
})
