const users = [
    {
        id: 1, name: 'Gabriel Zanluca', email: 'gabriel.zanluca@gmail.com'
    },
    {
        id: 2, name: 'João Paulo Serodio Gonçalves', email: 'jpsgoncalves.jpsg@gmail.com'
    }
]

module.exports = {
    Query: {
        users: () => users,
        user : () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    }
}