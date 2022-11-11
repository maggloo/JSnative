
const user = {
    name: "Bob",
    age: 23
}

const user2 = user;

user2.name = 'alex'
console.log(user.name)

const copyUser = {...user}
// copyUser.name = user.name
// copyUser.age = user.age

const state = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
        address: {}
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
        address: {}
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
        address: {}
    },
]

// const copyState = [
//     {...state[0]},
//     {...state[1]},
//     {...state[2]},
// ] //поверхностная копия

const copyState = state.map(st => ({...st, address: {...st.address}}))

// id === 3, 'Ann' => 'Anne'

const copyState = state.map(st => (st.id === 3) ? {...st, name: "Anne"} : st)