const questions = [];

const defaultState = { 
  questions
};

export default function reducer(state=defaultState, action) {
  switch(action.type) {
    
    case 'NEXT_PAGE' :
    
    case 'PREVIOUS_PAGE' : 
    
    case 'TICK_ANSWER' : 
    
    case 'UNTICK_ANSWER' :

    default :
      return state;

  }
}