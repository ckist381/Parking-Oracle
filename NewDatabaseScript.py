import sqlite3
con = sqlite3.connect('ParkingOracle.db')           # connecting to the database
cur = con.cursor()                                  # cursor access

def visionSystem():                                 # function stands in place of vision system
    capacityChange = input("Enter New Capacity: ")  # they are not goint to stay once integrated with vs
    return capacityChange

def getFileName():                                  # in place of vision system
    filename = input("Enter File Name: ")
    return filename

def getLotName():                                   # in place of vision system
    lotName = input("Enter Lot Name: ")             # lot name I have been using "TestLot" for entry
    return lotName

def updateLotData(name, capacity):                  # updates the capacity of lot
    cur.execute("UPDATE LotData SET fullnessLevel=? WHERE LotName=?", (capacity, name))   # will accept float for ca\
pacity
    con.commit()
    cur.execute("SELECT * FROM LotData")            # sees if went into database
    #print(cur.fetchall())

def updateImageData(name, pngfile):
    #print (pngfile)                                # accepts text for
    cur.execute("UPDATE Images SET PNGFile=? WHERE LotName=?", (pngfile, name))   # accepts a string for file name
    cur.execute("SELECT * FROM Images")             # sees if went into database
    print(cur.fetchall())

def getImageData(name):
    cur.execute("SELECT LotName FROM Images")       # executes the query state,emt
    names = cur.fetchall()                          # gets all the data returned from it
    Lnames = []                                     # preparing to store names in list
    for n in range(len(names)):                     # looping through to get names
        namesTuple = names[n]                       # returns a tuple of elements
        namesElement = namesTuple[0]                # gets the actual element
        Lnames.append(namesElement)                 # appends this to the list above
    print(Lnames)

    cur.execute("SELECT PNGFile FROM Images")       # executes query to get files
    files = cur.fetchall()                          # returns the data
    Lfile = []                                      # creates a list to store files
    for f in range(len(files)):                     # same process as above
        filesTuple = files[f]                       # this time with files
        filesElement = filesTuple[0]
        Lfile.append(filesElement)
    print (Lfile)

    imgDict = {Lnames[i]: Lfile[i] for i in range(len(Lnames))}   # making a dict with these
    print ("Image Table : " + str(imgDict))

    return imgDict

    #print(cur.fetchall())

def main():
    filename = getFileName()                        # these are not going to stay here we will be getting filename, \
capacity
    capacity = visionSystem()                       # and name from vs
    name = getLotName()
    updateLotData(name, capacity)
    updateImageData(name, filename)
    imgTable = getImageData(name)
    con.close()

if __name__ == '__main__':                          # calls main function
    main()
