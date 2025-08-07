import { useState, useEffect } from "react";
import ListaProductos from "./ListaProductos";
import Modal from "./Modal";

const VentaForm = () => {
  const [productos, setProductos] = useState([])
  const [productoId, setProductoId] = useState("");
  const [ventas, setVentas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [filtroBusqueda, setFiltroBusqueda] = useState("");


  // lista productos
  useEffect(()=> {
    fetch("http://localhost:7575/productos/listar").then(
      response =>{
        if(!response.ok) throw new Error("Error al obtener productos");
        return response.json();
      }
    ).then(data => setProductos(data))
    .catch(error => console.error("Error:", error));
  }, []);

  const handleAgregarProducto = () => {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const nuevo = {
      id: producto.id,
      nombre: producto.nombre,
      cantidad: 1,
      precio: producto.precio,
      descuento: 0,
      total: producto.precio
    };
    setVentas([...ventas, nuevo]);
    setProductoId("");
  };

  const actualizarVenta = (index, campo, valor) => {
    const nuevasVentas = [...ventas];
    const venta = nuevasVentas[index];
    venta[campo] = campo === "descuento" ? Number(valor) : Number(valor) || 0;
    venta.total = venta.precio * venta.cantidad * (1 - venta.descuento / 100);
    setVentas(nuevasVentas);
  };

  const totalGeneral = ventas.reduce((sum, v) => sum + v.total, 0);

  const handleEliminarVenta = (index) => {
    setVentas((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* 🔼 Lista editable de productos agregados */}
      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Productos</h2>

        {ventas.length === 0 ? (
          <p className="text-gray-500">No hay productos aún.</p>
        ) : (
          <ul className="max-h-[500px] overflow-y-auto space-y-4">
            {ventas.map((v, i) => (
              <li key={i} className="flex items-center justify-between gap-4 border-b pb-2">
                
                <div className="w-[800px] font-semibold">
                  {v.id} <span className="text-xs text-gray-500 ml-2">{v.nombre}</span>
                </div>

                <div className="flex items-center gap-2 w-3/4">
                  <div>
                    <label className="text-sm text-gray-600">Cantidad</label>
                    <input
                      type="number"
                      min="1"
                      value={v.cantidad}
                      onChange={(e) => actualizarVenta(i, "cantidad", e.target.value)}
                      className="w-20 px-2 py-1 border rounded"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">Descuento (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={v.descuento === 0 ? "" : v.descuento}
                      onChange={(e) => actualizarVenta(i, "descuento", e.target.value)}
                      className="w-20 px-2 py-1 border rounded"
                    />
                  </div>

                  <div>
                    <span className="text-sm text-gray-500">Subtotal:</span>
                    <div className="text-sm font-bold">${Math.round(v.total).toFixed(2)}</div>
                  </div>

                  <button
                  onClick={() => handleEliminarVenta(i)}
                  className="hover:text-red-700 text-xl px-2 ml-10"
                  >
                    x
                  </button>

                </div>
              </li>
            ))}
          </ul>
        )}

        <hr className="my-4" />
        <p className="text-lg font-semibold text-right">Total general: ${totalGeneral.toFixed(2)}</p>
      </div>

      {/* 🔽 Sección inferior para buscar/agregar producto */}
      <div className="bg-gray-100 p-4 rounded shadow space-y-4">
        <h2 className="text-lg font-bold">Agregar producto</h2>

        <input
          type="text"
          value={productoId}
          onChange={(e) => setProductoId(e.target.value.toUpperCase())}
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              e.preventDefault(); // evita que el formulario se envíe si está dentro de un <form>
              handleAgregarProducto();
            }
          }}
          className="w-full px-3 py-2 border rounded"
          placeholder="Clave del producto"
        />

        <button
          type="button"
          onClick={() => {
            setFiltroBusqueda(productoId);
            setMostrarModal(true);
          }}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Buscar producto
        </button>

        <button
          type="button"
          onClick={handleAgregarProducto}
          className="bg-amber-500 text-white ml-4 px-4 py-2 rounded hover:bg-amber-600"
        >
          Agregar a lista
        </button>

        <Modal visible={mostrarModal} onClose={() => setMostrarModal(false)}>
          <ListaProductos
            productos={productos}
            filtroInicial={filtroBusqueda}
            onSeleccionar={(p) => {
              setProductoId(p.id);
              setMostrarModal(false);
            }}
          />
        </Modal>
      </div>
    </div>

  );
};

export default VentaForm;