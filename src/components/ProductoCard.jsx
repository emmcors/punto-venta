import React from 'react';

const ProductoCard = ({producto, onAgregar}) => {
    return(
        <div className='max-w-xs p-4 border rounded shadow hover:shadow-lg transition'>
            <img src={producto.imagen || 'http://via.placeholder.com/150'} alt={producto.nombre} 
            className='w-full h-40 object-cover mb-4'/>
            <h2 className="text-xl font-bold">{producto.nombre}</h2>
            <p className="text-gray-600">Precio: ${producto.precio.toFixed(2)}</p>
            <button 
                onClick={()=>onAgregar(producto)}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >Agregar al carrito</button>
        </div>
    )
}

export default ProductoCard;