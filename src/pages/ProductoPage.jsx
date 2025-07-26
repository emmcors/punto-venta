import React from 'react'
import ProductoCard from '../components/ProductoCard'

const ProductoPage = () => {
    const productos = [
        {
            id: 1,
            nombre: 'Café Orgánico',
            precio: 120.00,
            stock: 15,
            imagen: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            nombre: 'Pan Artesanal',
            precio: 35.50,
            stock: 20,
            imagen: 'https://images.unsplash.com/photo-1608198093002-ad4a8009dc12?auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            nombre: 'Queso Añejo',
            precio: 89.90,
            stock: 10,
            imagen: 'https://images.unsplash.com/photo-1611771341253-58b4c31440d4?auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 4,
            nombre: 'Miel de Abeja',
            precio: 49.99,
            stock: 25,
            imagen: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 5,
            nombre: 'Chocolate Amargo',
            precio: 75.25,
            stock: 8,
            imagen: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87b?auto=format&fit=crop&w=500&q=60'
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