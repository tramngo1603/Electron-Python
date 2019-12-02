import argparse

def sum_func(a,b):
    return a+b

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('num1', help='First number to add')
    parser.add_argument('num2', help='Second number to add')
    args = parser.parse_args()
    print(sum_func(int(args.num1), int(args.num2)))
