# Author:                    Michael Moser
# Major:                     Computer Science: Information Technology
# Creation Date:             09Aug2021 (revision 1 completion date)
# Course:                    CSC354/355 - 020
# Professor Name:            Professor DeMarco
# Filename:                  MySQLDatabaseScript.py
# Purpose:                   This file contains the functions that the vision
#                            system will be using to manipulate and get info
#                            from the database -> connected to AWS server.

import mysql.connector

# connector to the database
# host is the endpoint as shown on AWS server information
# user and passwd is consistent as described on AWS and in Discord server
# we are using the lotdb database
db = mysql.connector.connect(
    host="parking-oracle-database.cvs0ld7wtgcu.us-east-2.rds.amazonaws.com",
    user="admin",
    passwd="smooshingTime2021",
    database="lotdb"
)

# used to be able to execute statements using mysql library
mycursor = db.cursor()

# used to create the By Passes Table for the database
def createByPasses():
    sql = "CREATE TABLE ByPasses (lotName VARCHAR(255), pass VARCHAR(255));"
    mycursor.execute(sql)
    db.commit()
    print ("inserted new table into database.")

# this is a function that will insert new columns into the database
# you will need to manually work with this statement
def alterDatabase():
    sql = "ALTER TABLE lot ADD lotID INTEGER FIRST;"
    mycursor.execute(sql)
    db.commit()
    print (mycursor.rowcount, "inserted new column.")

# this is a function that when called will display the lot table and all
# elements when needed
def showlot():
    sql = "SELECT * FROM lot"
    mycursor.execute(sql)
    records = mycursor.fetchall()
    print(records)

# this is a function that when called will show the byPasses table and all
# elements when needed
def showByPasses():
    sql = "SELECT * FROM ByPasses"
    mycursor.execute(sql)
    records = mycursor.fetchall()
    print(records)

# this function will take the name of the lot, the spaces taken in the lot,
# the fullness percentage of the lot, and the filename of that lot and will
# create a new record into the database
def setFullness(lotID, name, spacesTaken, fullPer, filename, url):
    sql = "INSERT INTO lot (lotID, name, spacesTaken, fullPer, filename, url) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (lotID, name, spacesTaken, fullPer, filename, url)
    mycursor.execute(sql, val)

    db.commit()

    print (mycursor.rowcount, "record for lot tabe inserted.")

# this function will take the name of the lot, and the pass that can park in lot.
# we have to call it passes for variable as pass is used already in Python.
def setByPasses(lotName, passes):
    sql = "INSERT INTO ByPasses (lotName, pass) VALUES (%s, %s)"
    val = (lotName, passes)
    mycursor.execute(sql, val)
    db.commit()
    print (mycursor.rowcount, "record for ByPasses table inserted.")

# this function will take a name of a lot and the percentage of the spaces full
# from the vision system and will update the table
def updateFullPer (name, fullPer):
    # sql execute statement setting fullPercent based on name
    sql = "UPDATE lot SET fullPer=%s WHERE name=%s"
    # the parameters passed in above
    data = (fullPer, name)

    # executing the sql statement with parameters passed in
    mycursor.execute(sql, data)
    # committing (saving) the sql results to database
    db.commit()

# this function will take a name of a lot and the spaces taken in said lot from
# vision system and will update the table
def updateSpaces (name, spacesTaken):
    # sql execute statement setting spacesTaken based on a name
    sql = "UPDATE lot SET spacesTaken=%s WHERE name=%s"
    # the parameter passed in above
    data = (spacesTaken, name)

    # executing the sql statement with parameters passed in
    mycursor.execute(sql, data)
    # committing (saving) the sql results to database
    db.commit

# this function will take a name of a lot and the filename of said lot from
# the vision system and will update the file name (if need be)
def updateFilename(name, filename):
    # sql execute statement setting filename based on name
    sql = "UPDATE lot SET filename=%s WHERE name=%s"
    # the parameters passed in above
    data = (filename, name)

    # executing the sql statement with parameters passed in
    mycursor.execute(sql, data)
    # committing (saving) the sql results to database
    db.commit()

# this function will take a name of a lot and the filename of said lot from
# the vision system and will update the file name (if need be)
def updateUrls(name, url):
    sql = "UPDATE lot SET url=%s WHERE name=%s"
    data = (url, name)
    mycursor.execute(sql, data)
    db.commit()
    pass

# this function will take the name of a parking lot and return a dictionary
# with the name of the lot as the key and the filename as the value
def getImageData(name):
    # sql execute statement setting filename based on name
    sql = "SELECT name, filename FROM lot WHERE name=%s"
    # the parameter passed in above
    data = (name,)

    # executing the sql statement with parameter
    # getting all data from the execution
    # printing as a test measure (can be removed)
    mycursor.execute(sql, data)
    fileData = mycursor.fetchall()
    print (fileData)

    # indexing fileData to retrieve the tuple and extract the values
    # of the name of the lot Lname and the file location Lfile
    Lname = fileData[0][0]
    Lfile = fileData[0][1]

    # combining these two values into a dictionary
    # returning the dictionary
    imgDict = {Lname: Lfile}
    return imgDict

# this function will take the name of a parking lot and return the value of the
# number of spaces that were taken in that lot.
def getSpacesTaken(name):
    sql = "SELECT spacesTaken FROM lot WHERE name = %s"
    data = (name,)
    mycursor.execute(sql, data)

    Ttaken = mycursor.fetchall()

    Ltaken = Ttaken[0][0]
    return (Ltaken)

# this function will return a list of the names of parking lots inside the 
# database inside a list
# executes the sql statement, fetches all returned items, indexes them puts them 
# into a list and returns the list
def getNames():
    sql = "SELECT name FROM lot"
    mycursor.execute(sql)
    Lnames = []
    Tnames = mycursor.fetchall()
    for i in range(len(Tnames)):
        nameTuple = Tnames[i]
        nameItem = nameTuple[0]
        Lnames.append(nameItem)
    print(Lnames)
    return Lnames

    pass

# this function will return a list of the urls of parking lots inside the database inside a list
# executes the sql statement, fetches all returned items, indexes them puts them into a list and
# returns the list
def getURLs():
    sql = "SELECT url FROM lot"
    mycursor.execute(sql)
    Lurls = []
    Turls = mycursor.fetchall()
    for i in range(len(Turls)):
        urlTuple = Turls[i]
        urlItem = urlTuple[0]
        Lurls.append(urlItem)
    print (Lurls)
    return Lurls
    pass

# this is a function where you can manually delete entries from the database as
# needed you have to manually update the sql script
def deleteSomething():
    sql="DELETE FROM lot WHERE name='testlot' "
    mycursor.execute(sql)
    db.commit()
    for i in mycursor:
        print(i)
    pass

def main():
    # the functions that are manipulating the database are commented out for now
    # but can be uncommented for testing
    # I will change these once we begin integration (smooshing)

    #createByPasses()

    #alterDatabase()

    #setFullness(2, "testlot", 11, 0.0, "testlot.png", "https://www.youtube.com/watch?v=bhm1Y0pgs-c")

    #setByPasses("Lot E2", "G")

    #updateFullPer("testlot", 0.0)

    #updateSpaces("testlot", 11)

    #updateFilename("testlot", "testlot.png")

    #updateUrls("testlot", "https://www.youtube.com/watch?v=bhm1Y0pgs-c")

    #imgDict = getImageData("testLot")
    #print(imgDict)

    #spacesTaken = getSpacesTaken("testlot")
    #print(spacesTaken)
    
    #names = getNames
    #print (names)

    #urls = getURLs()
    #print (urls)

    showlot()

    showByPasses()

    #deleteSomething()

if __name__ == "__main__":
    main()
