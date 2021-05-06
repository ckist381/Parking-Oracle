import sqlite3
con = sqlite3.connect('ParkingOracle.db')           # connecting to the database
cur = con.cursor()                                  # cursor access

# in place of vision system asks for lot name to manipulate
def visionSystem():
    lotName = input("Enter Lot to Select: ")
    return lotName

# disabled now asks for lot name and capacity updates LotData table in DB
def updateLotData(name, capacity):
    cur.execute("UPDATE LotData SET fullnessLevel=? WHERE LotName=?", (capacity, name))
    con.commit()
    cur.execute("SELECT * FROM LotData")
    #print(cur.fetchall())

# asks for lot name and file and updates image file table in db
def updateImageData(name, pngfile):
    #print (pngfile)
    cur.execute("UPDATE Images SET PNGFile=? WHERE LotName=?", (pngfile, name))
    cur.execute("SELECT * FROM Images")
    print(cur.fetchall())

# gets the name of lot and returns a dictionary
# with lot name mapping to file name
def getImageData(name):
    cur.execute("SELECT LotName, PNGFile  FROM Images WHERE LotName=?", (name,))
    fileData = cur.fetchall()
    Lnames = []
    for n in range(len(fileData)):
        namesTuple = fileData[n]
        namesElement = namesTuple[0]
        Lnames.append(namesElement)
    #print(Lnames)

    Lfiles = []
    for f in range(len(fileData)):
        filesTuple = fileData[f]
        filesElement = filesTuple[1]
        Lfiles.append(filesElement)
    #print(Lfiles)

    imgDict = {Lnames[i]: Lfiles[i] for i in range(len(Lnames))}   # making a dict with these
    print ("Image Table : ")
    print (imgDict)

    return imgDict

    #print(cur.fetchall())

# Takes name of lot returns the fullness
def getCapacity(name):
    cur.execute("SELECT LotName, spacesinLot, fullnessLevel FROM LotData WHERE LotName=?", (name,))
    keys = cur.fetchall()
    #print ("This is getCapacity")
    capacity = keys[0][1]
    print(capacity)
    return capacity

def getKeys():
    cur.execute("SELECT LotName FROM LotData")
    keys = cur.fetchall()
    l = []
    for item in len(keys):
        l.append(keys[item][0])
    return l

def showCapacities():
   cur.execute("SELECT Lotname , fullnessLevel FROM LotData")
   fulls = cur.fetchall()
   
   for item in range(len(fulls)):
       print( str(fulls[item][0]) + " : " + str(fulls[item][1]))

   return 

 


def main():
    # variables for test
    lotName = input("Enter the Lot Name: ")
    #capacity = input("What's the capacity: ")
    #filename = input("Filename?: ")

    #newLotData = updateLotData(lotName, capacity)
    #newImageData = updateImageData(lotName, filename)
    imgTable = getImageData(lotName)
    keys = getCapacity(lotName)

    con.close()

if __name__ == '__main__':                          # calls main function
    main()
