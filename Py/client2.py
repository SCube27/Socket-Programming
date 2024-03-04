import socket
print("Starting a new client : Client 2")

HOST = 'localhost'
PORT = 3000

socket_client = socket.socket()

socket_client.connect((HOST, PORT))

socket_client.sendall(b"This is Client 2")

print("Reply from the Server:", socket_client.recv(2048))