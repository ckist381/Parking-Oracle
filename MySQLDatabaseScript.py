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
# used to create lotinfo table

#mycursor.execute("CREATE TABLE lotInfo (name VARCHAR(255) PRIMARY KEY NOT NULL, spacesTaken INT(5), fullPer FLOAT(5,1), filename VARCHAR(255))")

# used if you want to be able to see lotInfo table
#mycursor.execute("SHOW TABLES")
#for i in mycursor:
    #print(i)

# this function will take the name of the lot, the spaces taken in the lot,
# the fullness percentage of the lot, and the filename of that lot and will
# create a new record into the database
def setFullness(name, spacesTaken, fullPer, filename):
    # sql execute statement inserting all values provided by parameters above
    sql = "INSERT INTO lotInfo (name, spacesTaken, fullPer, filename) VALUES (%s, %s, %s, %s)"
    # values passed in above
    val = (name, spacesTaken, fullPer, filename)
    # executing sql statement with parameters filling in placeholders
    mycursor.execute(sql, val)

    # committing to the database
    db.commit()

    # you can remove this if you want this is just something to make sure
    # that the record was inserted if you want
    #print (mycursor.rowcount, "record inserted.")

    # you can also remove this if you want
    # this will show the table
    #mycursor.execute("SELECT * FROM lotInfo")
    #for i in mycursor:
        #print(i)

# this function will take a name of a lot and the percentage of the spaces full
# from the vision system and will update the table
def updateFullPer (name, fullPer):
    # sql execute statement setting fullPercent based on name
    sql = "UPDATE lotInfo SET fullPer=%s WHERE name=%s"
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
    sql = "UPDATE lotInfo SET spacesTaken=%s WHERE name=%s"
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
    sql = "UPDATE lotInfo SET filename=%s WHERE name=%s"
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
    sql = "SELECT name, filename FROM lotInfo WHERE name=%s"
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
    # sql statement selecting spaces taken based on lot name
    sql = "SELECT spacesTaken FROM lotInfo WHERE name = %s"
    # the lot name passed in above
    data = (name,)
    # executing the statement with the parameter
    mycursor.execute(sql, data)
    # fetchall will return a tuple as part of mysql library
    # this will be stored in Ttaken
    Ttaken = mycursor.fetchall()
    # indexing the tuple and extracting the value returning that value
    Ltaken = Ttaken[0][0]
    return Ltaken

def main():
    # the functions that are manipulating the database are commented out for now
    # but can be uncommented for testing
    # I will change these once we begin integration (smooshing)

    #setFullness("Lot4", 58, 0.6, "Lot4.png")

    #updateFullPer("Lot1", 0.5)

    #updateSpaces("Lot3", 39)

    #updateFilename("Lot2", "Lot23.png")

    imgDict = getImageData("Lot2")

    getSpacesTaken("Lot3")

    #mycursor.execute("SELECT * FROM lotInfo")
    #for i in mycursor:
        #print(i)

if __name__ == "__main__":
    main()
