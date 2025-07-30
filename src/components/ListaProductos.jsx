import { useState } from "react"

const ListaProductos = ({productos, onSeleccionar}) => {
    const [filtro, setFiltro] = useState("");

    const productosFiltrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(filtro.toLowerCase()) || 
        p.id.toLowerCase().includes(filtro.toLowerCase())
    );

    return(
        <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-xl-font-bold mb-2">Catálogo de Productos</h2>
            <input
                type="text"
                placeholder="Buscar por nombre o ID..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md"
            />
            <ul className="space-y-2">
                {productosFiltrados.map((p) => (
                    <li
                    key={p.id}
                    className="border p-2 rounded-md hover:bg-blue-100 cursor-pointer"
                    onClick={() => onSeleccionar(p)}
                    >
                        <div className="font-semibold">{p.nombre}</div>
                        <div className="text-sm text-gray-600">ID: {p.id}</div>
                        <div className="text-sm text-gray-700">Precio: ${p.precio}</div>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ListaProductos;