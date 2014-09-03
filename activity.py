def make_exponentiater(e):
    return lambda(x): expo(x, e) 

def expo(x,e):
    if e == 2:
        x=x*x
    else:
        x=x*x*x
    return x

square = make_exponentiater(2)
cube = make_exponentiater(3)

print square(4)
print cube(4)
