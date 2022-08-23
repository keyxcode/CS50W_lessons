import unittest
from prime import is_prime

# The class Tests inherits from unittest.TestCase
# A class that defines a whole bunch of function,
# each of which is something we'd like to test
class Tests(unittest.TestCase):
    
    # The name of each function must begin with test_ 
    # in order to be run automatically with the call to unittest.main()
    def test_1(self):
        # This docstring will display in the shell when a test fails
        """Check that 1 is not prime"""
        self.assertFalse(is_prime(1))

    def test_2(self):
        # There are many other assertions you can make, for example
        # assertEqual, assertGreater
        """Check that 2 is prime"""
        self.assertTrue(is_prime(2))

    def test_8(self):
        """Check that 8 is not prime"""
        self.assertFalse(is_prime(8))

    def test_11(self):
        """Check that 11 is prime"""
        self.assertTrue(is_prime(11))

    def test_25(self):
        """Check that 25 is not prime"""
        self.assertFalse(is_prime(25))

    def test_28(self):
        """Check that 28 is not prime"""
        self.assertFalse(is_prime(28))


if __name__ == "__main__":
    unittest.main()