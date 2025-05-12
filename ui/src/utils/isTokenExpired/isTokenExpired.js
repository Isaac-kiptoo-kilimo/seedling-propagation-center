export const isTokenExpired = (token) => {
  try {
    const [, payloadBase64] = token.split('.');
    console.log("toke>>>>>>>>>..in is expired",token);
    
    const payload = JSON.parse(atob(payloadBase64));
    const expiry = payload.exp * 1000;
    return Date.now() >= expiry;
  } catch (err) {
    console.error("Invalid token format", err);
    return true;
  }
};
