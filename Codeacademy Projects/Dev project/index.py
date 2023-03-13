from flask import Flask, request
import mysql.connector

app = Flask(__name__)

def get_database_cursor():
    mydb = mysql.connector.connect(
        host="localhost",
        user="oleonb",
        password="Alessgiugu22",
        database="nafleet_database"
    )
    return mydb.cursor()

# Example table creation query
create_table_query = """
    CREATE TABLE IF NOT EXISTS drivers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        phone VARCHAR(20),
        email VARCHAR(255),
        address VARCHAR(255),
        salary_type VARCHAR(10),
        salary DECIMAL(10,2)
    )
"""

# Execute the query using the cursor
mycursor = get_database_cursor()
mycursor.execute(create_table_query)

@app.route("/submit-driver", methods=["POST"])
def submit_driver():
    print("submit-driver endpoint called")
    data = request.get_json()
    print(data)
    sql = "INSERT INTO drivers (first_name, last_name, phone, email, address, salary_type, salary) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    val = (
        data["firstName"],
        data["lastName"],
        data["phone"],
        data["email"],
        data["address"],
        data["salaryType"],
        data["salary"]
    )
    mycursor = get_database_cursor()
    try:
        mycursor.execute(sql, val)
        rowcount = mycursor.rowcount
        print(f"{rowcount} row(s) affected.")
        if rowcount == 1:
            mycursor.commit()
            return "Driver added to database successfully!"
        else:
            error_message = f"Failed to insert data: {mycursor.statement} {mycursor.messages}"
            print(error_message)
            return error_message
    except mysql.connector.Error as err:
        error_message = f"Failed to execute query: {err}"
        print(error_message)
        return error_message
    finally:
        mycursor.close()

if __name__ == '__main__':
    app.run(debug=True)
