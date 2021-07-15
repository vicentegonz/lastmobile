const alertMessages = {
  noStore: {
    title: 'Usuario inválido',
    message:
      'El usuario ingresado no tiene tiendas asociadas. Por favor ingresar con correo institucional de administrador o jefe de zona.\n\nSi cree que es un error, por favor contactarse con soporte.',
  },
  // Manage login error code 403 from backend.
  notAllowed: {
    title: '',
    message: '',
  },
};

export default alertMessages;
