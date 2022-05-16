const defaultPoem = new Object({
    title: String,
    author: Object({
        first: String,
        last: String
    }),
    lines: [String],
    stanzas: [[String]],
});

defaultPoem.title = '';
defaultPoem.author.first = '';
defaultPoem.author.last = '';
defaultPoem.lines = [''];
defaultPoem.stanzas = [['']]; 

const reducer = (state = defaultPoem, action ) => {
    if (action) {
        switch (action.type) {
            case 'FETCH_ALL':
                return action.payload; 
            case 'FETCH':
                return action.payload;  
            default:  
            return state;
        }
    } else {
        return state;
    }
    
}
 
export default reducer;