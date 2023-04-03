import React from 'react';

function TodoHeader( { children, loading } ) {
    //En el header estamos pasando la propiedad children para devolver 
    //todos los elementos dentro de este en el componente App
  return (
    <header>
        {
          //Usamos Children para recibir un arrray de todos los elementos
          //Para luego crean un clon de cada uno de estos y poder pasarles la propiedad loading desde el header o elemento contenedor
          //No se usa mucho :v 
       React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
          }
    </header>
  );
}

export {TodoHeader};