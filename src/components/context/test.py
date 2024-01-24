import math
import hashlib
class BloomFilter:
    def __init__(self, capacity, error_rate):
        self.capacity = capacity
        self.error_rate = error_rate
        self.bit_array_size = self.calculate_bit_array_size()
        self.hash_count = self.calculate_hash_count()
        self.bit_array = [False] * self.bit_array_size
    def calculate_bit_array_size(self):
        return int(-self.capacity * math.log(self.error_rate) / (math.log(2) ** 2))
    def calculate_hash_count(self):
        return int(self.bit_array_size * math.log(2) / self.capacity) + 1
    def add(self, item):
        for i in range(self.hash_count):
            index = self.hash(item, i) 
            self.bit_array[index] = True
    def contains(self, item):
        for i in range(self.hash_count):
            index = self.hash(item, i)
            if not self.bit_array[index]:
                return False
        return True
    def hash(self, item, salt):
        # Use a combination of hashlib and salt to generate hash values
        data = f"{item}{salt}"
        hash_obj = hashlib.sha256(data.encode())
        return int(hash_obj.hexdigest(), 16) % self.bit_array_size
if __name__ == "__main__":
    # Example usage:
    capacity = 10000
    error_rate = 0.01
    bloom_filter = BloomFilter(capacity, error_rate)
    # Add items to the Bloom filter
    items_to_add = ["Mark", "Michael", "Dennis", "Tom"]
    for item in items_to_add:
        bloom_filter.add(item)
    # Check membership
    items_to_check = ["Kevin", "Mark", "Roy", "Michael"]
    for item in items_to_check:
        if bloom_filter.contains(item):
            print(f"{item} is probably in the set.")
        else:
            print(f"{item} is definitely not in the set.")
