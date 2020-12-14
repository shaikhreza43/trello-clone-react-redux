import { CONSTANTS } from "../actions";

let listId = 2;
let cardId = 4;

const initialState = [{
    title: "My First Title",
    id: `list-${0}`,
    cards: [
        {
            id: `card-${0}`,
            text: 'Some dummy Text.'
        },
        {
            id: `card-${1}`,
            text: 'Some Dummy Text 2'
        }
    ]
},
{
    title: "My Second Title",
    id: `list-${1}`,
    cards: [
        {
            id: `card-${2}`,
            text: 'asjnkjanwsklelaejilqwej'
        },
        {
            id: `card-${3}`,
            text: 'kjwjeio   u29u209n9hdnjndj'
        }
    ]
}];


const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title:action.payload,
                cards:[],
                id:`list-${listId}`
            }
            listId+=1;
            return [...state,newList];

        case CONSTANTS.ADD_CARD:{
            const newCard = {
                text:action.payload.text,
                id:`card-${cardId}`
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
        }

        case CONSTANTS.DRAG_HAPPENED:
            const {
                draggableId,
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                type
            } = action.payload;

            const newState = [...state];

            //Dragging Lists Around
            if(type==="list"){
                const list = newState.splice(droppableIndexStart,1);
                newState.splice(droppableIndexEnd,0,...list);
                return newState;
            }

            //In the same List 
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list=>droppableIdStart===list.id);
                const card = list.cards.splice(droppableIndexStart,1);
                list.cards.splice(droppableIndexEnd,0,...card);
            }

            //Other List
            if(droppableIdStart!==droppableIdEnd){

                //Find the list where drag happened
                const listStart = state.find(list=>droppableIdStart===list.id);

                //pull out the card from list
                const card = listStart.cards.splice(droppableIndexStart,1);

                //Find the list where drag ended
                const listEnd = state.find(list=>droppableIdEnd===list.id);

                //put the card in the new list
                listEnd.cards.splice(droppableIndexEnd,0,...card);
            }

            return newState;

        default:
            return state;
    }
}

export default listReducer;