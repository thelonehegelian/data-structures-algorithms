"""
This is an implementation of the Union Find data structure. 
It is used to keep track of citizens and their connections in the Star Wars universe.
Citizens are monitored for Rebel activity, and if two citizens are found to belong to a rebel group, they are merged into one group.

"""

class Citizen:
    """
    A class to represent a citizen.

    ...

    Attributes
    ----------
    val : dict
        A dictionary representing a citizen with keys such as name, age, etc.
    parent : Citizen, optional
        A reference to the parent citizen in the group, default is None
    group : list
        A list of citizens that belong to the same group as this citizen

    Methods
    -------
    """

    def __init__(self, val):
        """
        Constructs all the necessary attributes for the citizen object.

        Parameters
        ----------
            val : dict
                A dictionary representing a citizen with keys such as name, age, etc.
        """

        self.val = val
        self.parent = None
        self.group = [self]

class StarMonitor:
    """
    A class to represent a star monitor using the Union Find data structure. 
    The star monitor keeps track of citizens and their connections in the Star Wars universe.

    ...

    Attributes
    ----------
    citizens : list
        A list of Citizen objects
    has_connection : bool
        A flag indicating if at least one citizen does not belong to only its own set

    Methods
    -------
    find_citizen(citizen):
        Returns the root citizen of the provided citizen's group.
    union(citizen1, citizen2):
        Merges the groups of the two provided citizens.
    """

    def __init__(self, n):
        """
        Constructs all the necessary attributes for the star monitor object.

        Parameters
        ----------
            n : int
                The number of citizens to create
        """

        self.citizens = [Citizen(i) for i in range(n)]
        self.has_connection = False

    def find_citizen(self, citizen):
        """
        Recursively finds the root citizen of the provided citizen's group.

        Parameters
        ----------
            citizen : Citizen
                The citizen whose root citizen should be found

        Returns
        -------
        Citizen
            The root citizen of the provided citizen's group
        """

        if citizen.parent == None:
            return citizen
        else:
            return self.find_citizen(citizen.parent)

    def union(self, citizen1, citizen2):
        """
        Merges the groups of the two provided citizens. If the citizens are already in the same group, does nothing.

        Parameters
        ----------
            citizen1 : Citizen
                The first citizen
            citizen2 : Citizen
                The second citizen
        """

        citizen1_root = self.find_citizen(citizen1)
        citizen2_root = self.find_citizen(citizen2)

        if citizen1_root == citizen2_root:
            return

        # Pick either citizen1 or citizen2 to be the root of the new set
        # @note this is not necessary, but it makes the tree more balanced and thus the find_citizen() method faster
        if len(citizen1_root.group) > len(citizen2_root.group):
            citizen2_root.parent = citizen1_root
             # Merge the groups by extending citizen1_root's group with citizen2_root's group
            citizen1_root.group.extend(citizen2_root.group)
            citizen2_root.group = citizen1_root.group
        else:
            citizen1_root.parent = citizen2_root
            citizen2_root.group.extend(citizen1_root.group)
            citizen1_root.group = citizen2_root.group
    
    def is_connected(self, citizen1, citizen2):
        if self.find_citizen(citizen1) == self.find_citizen(citizen2):
            return True
        
        print("Citizen {} and {} are not connected".format(citizen1.val, citizen2.val))
        return False
        
        