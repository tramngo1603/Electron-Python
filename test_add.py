import zerorpc

c = zerorpc.Client()
c.connect("tcp://127.0.0.1:4242")
print(c.sum_func(1,2))
