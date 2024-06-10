export const useAuthenticator = () => {
  const usuario = localStorage.getItem('user');
  if (usuario) {
    return true;
  } else {
    return false;
  }
};
