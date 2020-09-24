export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';


export const updateFlashCard = () =>{
    return{
        type: UPDATE,
    }
}

export const deleteFlashCard = () =>{
    return{
        type: DELETE,
    }
}