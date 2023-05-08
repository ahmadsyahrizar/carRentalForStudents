import { ADD } from "../actions/person";

const initialState = {
    id:1, 
    name: "ryan Gosling", 
    addr: "california, USA",
    phoneNumber: "123456", 
    photo: "https://media.gettyimages.com/id/634048954/photo/actor-ryan-gosling-attends-the-89th-annual-academy-awards-nominee-luncheon-at-the-beverly.jpg?s=612x612&w=gi&k=20&c=weGtOBNoY2jergxRu8bkc6rYExA7hiewzrKmdOdgZNo="
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD: 
            return [...state, action.payload];
        default: 
            return state;

    }
}


export default reducer;