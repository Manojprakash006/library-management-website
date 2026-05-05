import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;
  private readonly gatewayUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  connect() {
    if (this.socket?.connected) return;

    const baseUrl = this.gatewayUrl.endsWith('/') ? this.gatewayUrl : `${this.gatewayUrl}/`;
    const url = `${baseUrl}notifications`;

    this.socket = io(url, {
      path: '/library/members/socket.io',
      // No token required for public updates, but if we have one, we can pass it
      auth: {
        token: localStorage.getItem('token') || '', // Assuming token is in localStorage
      },
      transports: ['polling', 'websocket'],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 2000,
      timeout: 20000,
    });

    this.socket.on('connect', () => {
    });

    this.socket.on('connected', (data) => {
    });

    this.socket.on('connect_error', (error) => {
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  on(event: string, callback: (data: any) => void) {
    if (!this.socket) {
      this.connect();
    }
    this.socket?.on(event, callback);
  }

  off(event: string, callback?: (data: any) => void) {
    this.socket?.off(event, callback);
  }
}

export const socketService = new SocketService();
