import { useState } from "react"

const ListaProductos = ({productos, onSeleccionar, filtroInicial=""}) => {
    const [filtro, setFiltro] = useState(filtroInicial);

    const productosFiltrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(filtro.toLowerCase()) || 
        p.id.toLowerCase().includes(filtro.toLowerCase())
    );

    return(
        <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-xl font-bold mb-2">Catálogo de Productos</h2>
            <input
                type="text"
                placeholder="Buscar por nombre o ID..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md"
            />
            <div className="max-h-[600px] overflow-y-auto space-y-2">
                <ul className="space-y-2">
                    {productosFiltrados.map((p) => (
                        <li
                        key={p.id}
                        className="border p-4 rounded-md shadow hover:bg-blue-50"
                        onClick={() => onSeleccionar(p)}
                        >
                            <div className="font-semibold">{p.id}</div>
                            <div className="text-sm text-gray-600">{p.nombre}</div>
                            <div className="text-sm text-gray-700">${p.precio}</div>
                        </li>
                    ))}
                </ul>
            </div>
            

        </div>
    );
};

export default ListaProductos;