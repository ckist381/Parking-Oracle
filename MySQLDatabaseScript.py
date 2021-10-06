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

# commented out for now
# used to create lot table

#mycursor.execute("CREATE TABLE lot (name VARCHAR(255) PRIMARY KEY NOT NULL, spacesTaken INT(5), fullPer FLOAT(5,1), filename VARCHAR(255), url VARCHAR(255))")
#mycursor.execute("INSERT INTO lot (name, spacesTaken, fullPer, filename, url) VALUES ('testLot', 11, 0, 'testLot.png', 'atesturl.com')")

# used if you want to be able to see lotInfo table
mycursor.execute("SHOW TABLES")
for i in mycursor:
    print(i)

# this function will take the name of the lot, the spaces taken in the lot,
# the fullness percentage of the lot, and the filename of that lot and will
# create a new record into the database
def setFullness(name, spacesTaken, fullPer, filename, url):
    sql = "INSERT INTO lotInfo (name, spacesTaken, fullPer, filename, url) VALUES (%s, %s, %s, %s, %s)"
    val = (name, spacesTaken, fullPer, filename, url)
    mycursor.execute(sql, val)

    db.commit()

    print (mycursor.rowcount, "record inserted.")

    mycursor.execute("SELECT * FROM lotInfo")
    for i in mycursor:
        print(i)

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

def main():
    # the functions that are manipulating the database are commented out for now
    # but can be uncommented for testing
    # I will change these once we begin integration (smooshing)


    #updateFullPer("Lot1", 0.5)

    #updateSpaces("Lot3", 39)

    #updateFilename("Lot2", "Lot23.png")

    #imgDict = getImageData("testLot")

    #getSpacesTaken("testLot")

    mycursor.execute("SELECT * FROM lot WHERE name='testLot'")
    for i in mycursor:
        print(i)

if __name__ == "__main__":
    main()
