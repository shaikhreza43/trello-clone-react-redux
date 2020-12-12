const initialState = [{
    title: "My First Title",
    id: 0,
    cards: [
        {
            id: 0,
            text: 'Some dummy Text.'
        },
        {
            id: 1,
            text: 'Some Dummy Text 2'
        }
    ]
},
{
    title: "My Second Title",
    id: 1,
    cards: [
        {
            id: 0,
            text: 'asjnkjanwsklelaejilqwej'
        },
        {
            id: 1,
            text: 'kjwjeio   u29u209n9hdnjndj'
        }
    ]
},
{
    title: "My Third Title",
    id: 1,
    cards: [
        {
            id: 0,
            text: 'wknklqmwlcqqwjoioqjc niojcqniq'
        },
        {
            id: 1,
            text: 'askndqcnwmeiojc4io2jewriojioewjiwjtrvojtriowvnjijnerijijnwevijqwriojweijiwnfjncasjnqwuijnqeij'
        }
    ]
}];

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listReducer;