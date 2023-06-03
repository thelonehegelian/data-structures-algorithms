class Citizen:
  def __init__(self, val):
    #citizen id an object which contains information about the citizen, such as name, age, etc.
    self.val = val
    self.parent = None
    self.group = [self]
    
    
# The StarMonitor class keeps track of citizens and their connections in the Star Wars universe using the Union Find data structure.
class StarMonitor:
  # on init, create a list of citizens
  def __init__(self, n):
    # @audit don't think this is necessary
    self.citizens = [Citizen(i) for i in range(n)]
    # if at least one citizen does not belong to only its own set, then set has_connection to True
    self.has_connection = False
    
  def find_citizen(self, citizen):
    if citizen.parent == None:
      return citizen
    else:
      return self.find_citizen(citizen.parent)
    
  # called by the StarDroid when it finds that both citizens belong to a rebel group
  def union(self, citizen1, citizen2):
    citizen1_root = self.find_citizen(citizen1)
    citizen2_root = self.find_citizen(citizen2)
    
    # If the two citizens belong to the same set, then they are already connected
    if citizen1_root == citizen2_root:
        return

    # Pick either citizen1 or citizen2 to be the root of the new set
    # @note this check is not necessary
    if len(citizen1_root.group) > len(citizen2_root.group):
        # Set the parent of citizen2_root to citizen1_root
        citizen2_root.parent = citizen1_root

        # Merge the groups by extending citizen1_root's group with citizen2_root's group
        citizen1_root.group.extend(citizen2_root.group)
        citizen2_root.group = citizen1_root.group
    else:
        # Set the parent of citizen1_root to citizen2_root
        citizen1_root.parent = citizen2_root

        # Merge the groups by extending citizen2_root's group with citizen1_root's group
        citizen2_root.group.extend(citizen1_root.group)
        citizen1_root.group = citizen2_root.group
