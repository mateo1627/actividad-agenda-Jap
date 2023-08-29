const Contactos = [];
document.getElementById("agregarContacto").addEventListener("click", agregarItem);
document.getElementById("limpiar").addEventListener("click", limpiarItems);
cargarItems();
function cargarItems() {
    const lista = document.getElementById("listaContactos");
    lista.innerHTML = "";
    
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.forEach((contacto, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${contacto.nombre}: ${contacto.numeroTel}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            eliminarContacto(index); // Pasamos el índice al llamar la función
        });
        
        li.appendChild(deleteButton);
        lista.appendChild(li);
    });
}
function agregarItem() { 
    const nombre = document.getElementById("nombre").value.trim();
    const numeroTel = document.getElementById("numeroTel").value.trim();
    
    if (nombre !== '' && numeroTel !== '') {
        const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
        contactos.push({ nombre, numeroTel });
        localStorage.setItem("contactos", JSON.stringify(contactos));
        cargarItems();
        
        document.querySelectorAll(".item").forEach(input => {
            input.value = "";
        });
    }
}
function eliminarContacto(index) {
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    
    if (index >= 0 && index < contactos.length) {
        contactos.splice(index, 1);
        localStorage.setItem("contactos", JSON.stringify(contactos));
        cargarItems();
    }
}
