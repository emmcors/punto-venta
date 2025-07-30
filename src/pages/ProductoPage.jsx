import React from 'react'
import ProductoCard from '../components/ProductoCard'

const ProductoPage = () => {
    const productos = [
        {
            id: 1,
            nombre: 'Café Orgánico',
            precio: 120.00,
            stock: 15,
            imagen: 'https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            nombre: 'Pan Artesanal',
            precio: 35.50,
            stock: 20,
            imagen: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            nombre: 'Queso Añejo',
            precio: 89.90,
            stock: 10,
            imagen: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 4,
            nombre: 'Miel de Abeja',
            precio: 49.99,
            stock: 25,
            imagen: 'https://images.unsplash.com/photo-1654515722385-c684c5331c04?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 5,
            nombre: 'Chocolate Amargo',
            precio: 75.25,
            stock: 8,
            imagen: 'https://images.unsplash.com/photo-1589402669377-f7ac773e7f84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    const handleAgregar = (producto) => {
        console.log('Agregado:', producto);

    }

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productos.map((p)=>(
                <ProductoCard key={p.id} producto={p} onAgregar={handleAgregar}/>
            ))}
        </div>
    )
};

export default ProductoPage;