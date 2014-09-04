import cgi
import json


def index(req, number, raiseTo):
    number = cgi.escape(number)
    raiseTo = cgi.escape(raiseTo)
    a = int(number)
    e = int(raiseTo)
    ##if raiseTo == 2:
    expo = make_exponentiater(e)
    result = expo(a)
        ##print result
    ##else:
	##cube = make_exponentiater(e)
	##result = cube(a)
        ##print result
    return json.dumps(result)

def make_exponentiater(raiseTo):
    return lambda(x): pow(x, raiseTo) 


