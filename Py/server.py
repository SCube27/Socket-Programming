import socket
import threading

HOST = 'localhost'
PORT = 8080

def create_a_connection(conn, addr):
    try:
        print("New connection has been established!")
        data = conn.recv(2048)
        print("Data received from client:", data.decode())
        conn.sendall(b"Your message has been received thank you!")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        conn.close()


# create socket obj
server_socket = socket.socket()

# binding the object
server_socket.bind((HOST, PORT))

# start listening 
server_socket.listen()
print('Server listening on', HOST, PORT)

while True:
    conn, addr = server_socket.accept()
    t = threading.Thread(target=create_a_connection, args=(conn, addr))
    t.start()