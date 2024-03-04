import socket
print("Starting a new client : Client 1")

HOST = 'localhost'
PORT = 3000

socket_client = socket.socket()

socket_client.connect((HOST, PORT))

socket_client.sendall(b"Hello from the Client 1")

print("Reply from the Server:", socket_client.recv(2048))