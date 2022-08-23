def square(x):
    return x * x

# If this turns out to be True, no output or side effect will be given
assert square(10) == 100

#==============================================================================
def square_wrong(x):
    return x + x

# If the expression is False, an AssertionError will be thrown
assert square_wrong(10) == 100