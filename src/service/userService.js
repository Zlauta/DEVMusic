
const STORAGE_KEY = "usuarios"

export function obtenerUsuarios() {
  try {
    const listadoUsuariosJSON = localStorage.getItem(STORAGE_KEY);
    if (!listadoUsuariosJSON) return [];
    return JSON.parse(listadoUsuariosJSON);
  } catch (error) {
    console.error("Error leyendo usuarios:", error);
    return [];
  }
}

export function guardarUsuarios(usuarios) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
  } catch (error) {
    console.error("Error guardando usuarios:", error);
    throw error;
  }
}

export function registrarUsuario(nuevoUsuario) {
  try {
    const usuarios = obtenerUsuarios();

    const existeUsuario = usuarios.some(
      (usuario) => usuario.email.toLowerCase() === nuevoUsuario.email.toLowerCase()
    );

    if (existeUsuario) {
      throw new Error("El email ya está registrado");
    }

    const usuarioConId = {
      ...nuevoUsuario,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    guardarUsuarios([...usuarios, usuarioConId]);

    return usuarioConId;
  } catch (error) {
    throw error;
  }
}

// ---------------------------------------------------------------------------
// Login de usuarios 

export function loginUsuario(email, password) {
  try {
    const usuariosGuardados = obtenerUsuarios();

    const usuario = usuariosGuardados.find(
      (usuario) => usuario.email === email
    );

    if (!usuario) {
      return { exito: false, mensaje: "El usuario no existe" };
    }

    if (usuario.password !== password) {
      return { exito: false, mensaje: "Contraseña incorrecta" };
    }

    // Guardamos el usuario logueado en sessionStorage
    const usuarioLogueado = {
      nombreUsuario:usuario.nombreUsuario,
      email: usuario.email,
      loginAt: new Date().toISOString(),
    };
     
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(usuarioLogueado));
    return { exito: true, mensaje: usuario.nombreUsuario.toUpperCase() }; 
  } catch (error) {
    console.error("Error en loginUsuario:", error);
    return { exito: false, mensaje: "Error al iniciar sesión" };
  }
  
}

export function logoutUsuario() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
    return { exito: true, mensaje: "Sesión cerrada correctamente" };
  } catch (error) {
    console.error("Error en logoutUsuario:", error);
    return { exito: false, mensaje: "Error al cerrar sesión" };
  }
}