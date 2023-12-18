type ENVMode = "development" | "production";

export const getClientURL = (defaultClientURLDev = "http://localhost:5173") => {
  const envMode: ENVMode = (process.env.NODE_ENV as ENVMode) || "development";
  if (envMode === "development") {
    const clientURL = process.env.CLIENT_URL_DEV || defaultClientURLDev;
    return clientURL;
  }

  if (envMode === "production") {
    const clientURL = process.env.CLIENT_URL_PRO || defaultClientURLDev;
    return clientURL;
  }
};
