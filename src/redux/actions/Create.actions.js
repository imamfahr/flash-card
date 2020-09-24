import axios from 'axios'


export const CREATE = 'CREATE';


export const createFlashCard = () =>{
    return{
        type: CREATE,
    }
}

/// use to post data
