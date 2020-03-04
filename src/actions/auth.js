export const AUTH = 'AUTH';
export const ERR = 'ERR';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

export const Auth = () => ({
  type: AUTH,
});

export const err = () => ({
  type: ERR,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});
