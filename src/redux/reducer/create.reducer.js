import {CREATE} from '../actions/Create.actions'


const initialState = [{
    id: 0
}];


const cardTimeline = (state=initialState, action)=>{
    switch (action.type) {
        case CREATE:
            return [...state, 
                {
                    id: state.id++,
                    frontContent = action.id,
                    backContent = action.id
                }]
    }
}