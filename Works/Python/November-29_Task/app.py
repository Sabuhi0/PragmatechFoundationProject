# Code 01

class A:
    def one(self):
        return self.two()

    def two(self):
        return 'A'
    
class B(A):
    def two(self):
        return 'B'


obj1=A()
obj2=B()
print(obj1.two(),obj2.two())

# Code 02

class test:
    def __init__(self,a = "Git push)"):
        self.a = a

    def display(self):
        print(self.a)

obj = test()
obj.display()

# Code 03

class change:
    def __init__(self,x,y,z):
        self.a = x + y + z
        
x = change(1,2,3)
y = getattr(x,'a')
setattr(x,'a',y+1)
print(x.a)


# Code 04

class C:
    def __init__(self,x=1):
        self.x=x

class der(C):
    def __init__(self,y = 2):
        super().__init__()
        self.y = y

def main():
    obj = der()
    print(obj.x,obj.y)
main()
