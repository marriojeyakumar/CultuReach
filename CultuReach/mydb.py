import mysql.connector

dataBase = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = 'Mbk2X5gn'
)

cursorObject = dataBase.cursor()

cursorObject.execute("CREATE DATABASE cursorBase")

print('All Done!')