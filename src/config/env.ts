interface ENV {
  BACKEND_API: string;
}

const ENVIRONMENT: ENV = {
  BACKEND_API: import.meta.env.VITE_BACKEND_API,
};
export default ENVIRONMENT;
