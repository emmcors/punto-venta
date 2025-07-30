import { useState, useEffect } from "react";
import ListaProductos from "./ListaProductos";
import Modal from "./Modal";

const productos = [
  { id: "caf001", nombre: "Café", precio: 25 },
  { id: "pan002", nombre: "Pan", precio: 10 },
  { id: "agu003", nombre: "Agua", precio: 15 }
];

const VentaForm = () => {
  const [productoId, setProductoId] = useState("");
  const [productoNombre, setProductoNombre] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [descuento, setDescuento] = useState("");
  const [ventas, setVentas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);


  // Actualizar precio según producto seleccionado
  useEffect(() => {
    const seleccionado = productos.find(p => p.id === productoId);
    if (seleccionado) {
        setProductoNombre(seleccionado.nombre);
        setPrecio(seleccionado.precio);
    } else {
        setProductoNombre("");
        setPrecio(0);
    }
    }, [productoId]);

  const calcularTotalParcial = () => {
    const descuentoNumerico = Number(descuento || 0);
    return cantidad * precio * (1 - descuentoNumerico / 100);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const venta = {
      id: producto.id,
      nombre: producto.nombre,
      cantidad,
      precio,
      total: calcularTotalParcial()
    };
    setVentas([...ventas, venta]);
    setProductoId("");
    setCantidad(1);
    setDescuento(0)
    setPrecio(0);
  };

  const totalGeneral = ventas.reduce((sum, v) => sum + v.total, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-md shadow">
        <h2 className="text-xl font-bold">Productos</h2>

        <div>
            <label className="block text-sm font-medium text-gray-700">Clave del producto</label>
            <input
                type="text"
                value={productoId}
                onChange={(e) => setProductoId(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Ej. caf001"
            />
        </div>

        <button
        type="button"
        onClick={() => setMostrarModal(true)}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Buscar producto
        </button>

        <Modal visible={mostrarModal} onClose={() => setMostrarModal(false)}>
            <ListaProductos
                productos={productos}
                onSeleccionar={(p) => {
                setProductoId(p.id);
                setProductoNombre(p.nombre);
                setPrecio(p.precio);
                setMostrarModal(false);
                }}
            />
        </Modal>


        <div>
            <label className="block text-sm font-medium text-gray-700">Nombre del producto</label>
            <input
                type="text"
                value={productoNombre}
                readOnly
                className="w-full px-3 py-2 border rounded-md bg-gray-100"
                placeholder="Nombre autocompletado"
            />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cantidad</label>
          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Descuento</label>
            <div className="flex items-center border rounded-md px-3">
              <input
                type="text"
                value={descuento}
                onChange={(e) => setDescuento(e.target.value)}
                className="flex-grow py-2 outline-none"
              />
              <span className="text-gray-500 ml-2">%</span>
            </div>
        </div>

        <p className="text-gray-800 font-semibold">
          Total parcial: ${calcularTotalParcial().toFixed(2)}
        </p>

        <button
        type="submit"
        className="w-full bg-slate-500 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Agregar
        </button>
      </form>

      {/* Lista de ventas */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-xl font-bold mb-4">Productos registrados</h2>
        <ul className="space-y-2">
          {ventas.map((v, i) => (
            <li key={i} className="border-b pb-2">
              <div className="text-sm">{v.nombre} x {v.cantidad}</div>
              <div className="text-sm text-gray-600">Subtotal: ${v.total.toFixed(2)}</div>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <p className="text-lg font-semibold">Total general: ${totalGeneral.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default VentaForm;