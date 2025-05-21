//localStorage
let carrito = JSON.parse(localStorage.getItem("carritoJesska")) || [];

// agregae producto
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem("carritoJesska", JSON.stringify(carrito));
  actualizarContadorCarrito();
  alert(`${nombre} fue agregado al carrito.`);
}

// icono
function actualizarContadorCarrito() {
  const contador = document.getElementById("carrito-contador");
  if (contador) contador.textContent = carrito.length;
}

// Llama esto al cargar cualquier página
document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);
