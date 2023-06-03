import sys
import os

# Get the current directory path
current_dir = os.path.dirname(os.path.abspath(__file__))

# Get the parent directory path
parent_dir = os.path.dirname(current_dir)

# Append the parent directory to sys.path
sys.path.append(parent_dir)

# Now you can import modules from the parent directory
import union_find as uf

def test_star_monitor():
    # Create dummy citizens
    citizens_data = [
        {'name': 'Luke Skywalker', 'age': 25, 'affiliation': 'Rebel Alliance'},
        {'name': 'Leia Organa', 'age': 23, 'affiliation': 'Rebel Alliance'},
        {'name': 'Darth Vader', 'age': 45, 'affiliation': 'Galactic Empire'},
        {'name': 'Han Solo', 'age': 30, 'affiliation': 'Rebel Alliance'},
        {'name': 'Chewbacca', 'age': 200, 'affiliation': 'Rebel Alliance'},
        {'name': 'Yoda', 'age': 900, 'affiliation': 'Rebel Alliance'},
        {'name': 'R2-D2', 'age': 33, 'affiliation': 'Rebel Alliance'},
        {'name': 'C-3PO', 'age': 33, 'affiliation': 'Rebel Alliance'},
        {'name': 'Obi-Wan Kenobi', 'age': 57, 'affiliation': 'Rebel Alliance'},
        {'name': 'Emperor Palpatine', 'age': 84, 'affiliation': 'Galactic Empire'}
    ]
    citizens = [uf.Citizen(data) for data in citizens_data]
    
    # Initialize the StarMonitor with the citizens
    star_monitor = uf.StarMonitor(len(citizens))
    star_monitor.citizens = citizens  # Overwrite the default citizens created by StarMonitor.__init__
    
    # Test the find operation
    for citizen in citizens:
        assert star_monitor.find_citizen(citizen) == citizen
    
    # Test the connected operation
    for i in range(len(citizens) - 1):
        assert star_monitor.find_citizen(citizens[i]) != star_monitor.find_citizen(citizens[i + 1])
    
    # Test the union operation
    for i in range(len(citizens) - 1):
        star_monitor.union(citizens[i], citizens[i + 1])
    
    # Now all citizens should be connected
    for i in range(len(citizens) - 1):
        assert star_monitor.find_citizen(citizens[i]) == star_monitor.find_citizen(citizens[i + 1])
    
    print("All tests passed successfully!")

# Run the tests
test_star_monitor()
