import React from 'react'

function withStorageListener(WrapComponent) {

  return function WrappedComponentWithStorageListener(props) {

        const [storageChange, setStorageChange] = React.useState(false);
        window.addEventListener('storage', (change) => {
          if(change.key === 'TODOS_V1') {
            console.log('Hubo cambios ')
            setStorageChange(true)
          }
        });

        const toggleShow = () => {
          props.sincronize();
          setStorageChange(false);
        }

        return (
            <WrapComponent 
            show={storageChange}
            toggleShow={toggleShow}
            />
            )
  } 
}

export {withStorageListener};