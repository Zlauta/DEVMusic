const STORAGE_KEY = "canciones";

export function obtenerCanciones() {
  try {
    const datosLocalStorage = localStorage.getItem(STORAGE_KEY);
    const datos = JSON.parse(datosLocalStorage);
    return Array.isArray(datos) ? datos : [];
  } catch (err) {
    console.error("obtenerCanciones error:", err);
    return [];
  }
}

export function guardarCanciones(canciones) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(canciones));
  } catch (err) {
    console.error("guardarCanciones error:", err);
  }
}

export function agregarCancion(cancion) {
  const canciones = obtenerCanciones();
  canciones.push(cancion);
  guardarCanciones(canciones);
}

export function eliminarCancionPorId(id) {
  const canciones = obtenerCanciones().filter((cancion) => cancion.id !== id);
  guardarCanciones(canciones);
}

export function eliminarTodasLasCanciones() {
  guardarCanciones([]);
}

export const obtenerCancionPorId = (id) => {
  const canciones = obtenerCanciones(); // trae todas las canciones
  return canciones.find((cancion) => cancion.id.toString() === id.toString());
};

export function actualizarCancion(id, cambios) {
  const canciones = obtenerCanciones();
  const index = canciones.findIndex((cancion) => cancion.id === id);
  if (index === -1) return false;

  if (cambios.nombreCancion) {
    const dup = canciones.some(
      (cancion) =>
        cancion.nombreCancion === cambios.nombreCancion && cancion.id !== id
    );
    if (dup) {
      const err = new Error("CANCION_EXISTE");
      err.code = "CANCION_EXISTE";
      throw err;
    }
  }

  canciones[index] = {
    ...canciones[index],
    ...cambios,
    updatedAt: new Date().toISOString(),
  };
  guardarCanciones(canciones);
  return true;
}
