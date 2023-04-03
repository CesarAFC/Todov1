import React from "react";

function useLocalStorage(itemName, initialValue) {
  
    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));

    const {
      error,
      syncronizedItem,
      loading,
      item,
    } = state;

    // const [error, setError] = React.useState(false);
    // const [syncronizedItem, setSyncronizedItem] = React.useState(true);
    // const [loading, setLoading] = React.useState(true);
    // const [item, setItem] = React.useState(initialValue);

    //Action creators
    const onError = (error) => {dispatch({type: actionTypes.error, payload: error})}
    const onSucess = (parsedItem) => {dispatch({type: actionTypes.sucess, payload: parsedItem})}
    const onSave = (item) => {dispatch({type: actionTypes.save, payload: item})};
    const onSync = (item) => {dispatch({type: actionTypes.syncronize})};

    React.useEffect( () => {
      setTimeout(() => {
  
        try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        onSucess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSyncronizedItem(true);
  
      } catch(error) {
        onError(error);
        //setError(error);
      }
  
      }, 2000);
    }, [syncronizedItem] );
  
    const saveItem = (newItem) => {
  
      try {
  
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);

        onSave(newItem);
        //setItem(newItem);
  
      } catch(error){
        onError(error);
        //setError(error);
      }
    };

    const syncronize = () => {

      onSync();
    };
  
    return {
      item,
      loading,
      error,
      saveItem,
      syncronize,
    };
  }


  const initialState = ({initialValue}) => ({
    error: false,
    syncronizedItem: true,
    loading: true,
    item: initialValue,
  }); 

  const actionTypes = {
    error: 'ERROR',
    sucess: 'SUCESS',
    save: 'SAVE',
    syncronize: 'SYNC',
  }
  const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
      ...state,
      error: true,
    },
    [actionTypes.sucess]: {
      ...state,
      error: false,
      loading: false,
      syncronizedItem: true,
      item: payload,
    },
    [actionTypes.save]: {
      ...state,
      item: payload,
    },
    [actionTypes.syncronize]: {
      ...state,
      loading: true,
      syncronizedItem: false,
    },

  });

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  }

  export {useLocalStorage};