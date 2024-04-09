import mysql.connector

db_config = {
    'host': 'localhost',
    'user': 'user2',
    'password': 'test',
    'database': 'menrvadb',
    'port': 3306
}

def link_books_to_authors(): 
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            query = "select * from book;"
            cursor.execute(query)
            books = cursor.fetchall()

            # for book in books:
                