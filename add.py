import argparse
import zerorpc

class SumAPI():
    def sum_func(self,a,b):
        return a+b

def main(port):
    addr = 'tcp://127.0.0.1:' + port
    s = zerorpc.Server(SumAPI())
    s.bind(addr)
    print('start running on {}'.format(addr))
    s.run()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('port', help='Port for Zerorpc to listen on')
    args = parser.parse_args()
    main(args.port)
