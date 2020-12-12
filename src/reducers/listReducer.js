import { CONSTANTS } from "../actions";

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
    id: 2,
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

let listId = 3;
let cardId = 4;

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title:action.payload,
                cards:[],
                id:listId
            }
            listId+=1;
            return [...state,newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text:action.payload.text,
                id:cardId
            };

            cardId+=1;
            const newState = state.map(list=>{
                if(list.id === action.payload.listId){
                    return {
                        ...list,
                        cards:[...list.cards,newCard]
                    };
                }
                else{
                    return list;
                }
            });
            return newState;
        default:
            return state;
    }
}

export default listReducer;