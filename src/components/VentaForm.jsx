const { useState } = require("react")

const VentaForm = () => {
    const [producto, setProducto] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [precio, setPrecio] = useState(0);

    const calcularTotal = () => cantidad * precio;

    const handleSubmit = (e) => {
        e.preventDefault();
        const venta = {
            producto,
            cantidad,
            precio,
            total: calcularTotal()
        };
        console.log('Venta registrada:', venta)
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <h2>Registro de Venta</h2>

            <label className="">Producto</label>
            <input
                type="text"
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
                className=""
                placeholder="Nombre del producto"
            />

            <label className="">Cantidad</label>
            <input
                type="number"
                min="0"
                step="0.01"
                value={precio}
                onChange={(e) => setPrecio(Number(e.target.value))}
                className=""
            />
            
            <p className="">Total: ${calcularTotal().toFixed(2)}</p>

            <button type="submit" className="">
                Registrar venta
            </button>

        </form>
    );
};

export default VentaForm;