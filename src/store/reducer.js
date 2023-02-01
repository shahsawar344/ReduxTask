const initialState = {
  l: 0,
  id: 0,
  cartItem:[]
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Assign':
      if(state.cartItem?.length > 0){
        const exit = state.cartItem?.find((x)=>x.id == action.id)
      if(exit) {
        const index = state.cartItem?.findIndex((x)=>x.id == action.id)
        const item = state.cartItem[index]
        return {
          ...state,
          l:item.l,
          id:item.id
        }
      } 
    } 
    case 'Addition':
      return {
        ...state,
        cartItem: state.cartItem.map((post) => {
            if(post.id === action.id){
                return {...post, l: post.l + 1}
            }
            else{
                return post
            }
        })
        
    };
    case 'Subtraction':
      return {
        ...state,
        cartItem: state.cartItem.map((post) => {
            if(post.id === action.id){
                return {...post, l: post.l - 1}
            }
            else{
                return post
            }
        })
        
    };
    case 'array':
      const cartDetail = action.arr
      for (let i = 0; i < cartDetail?.length; i++) {
        const element = cartDetail[i];
        state.cartItem.push({id:element.id,l:parseInt(element.l)})
        
      }
      return{
        ...state,
        cartItem:state.cartItem
      }
      
    default:
      break;
  }
};
export default mainReducer;
