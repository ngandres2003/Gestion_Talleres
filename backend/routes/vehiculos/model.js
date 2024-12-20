import { createClient } from '@libsql/client'
const url = 'file:./backend/local.db'


const client = createClient({
    url: url
  })
  

await client.execute(`
    DROP TABLE IF EXISTS VEHICULOS
    `)

    
await client.execute(`
    CREATE TABLE IF NOT EXISTS VEHICULOS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        placa VARCHAR(255) NOT NULL,
        marca VARCHAR(20) NOT NULL,
        modelo VARCHAR(255) NOT NULL,
        year VARCHAR(20) NOT NULL,
        id_cliente INTEGER NOT NULL
        )
      `)


      await client.execute(`
        INSERT INTO VEHICULOS (placa, marca, modelo, year, id_cliente)
        VALUES 
            ('XYZ456', 'Honda', 'Civic', '2020', 1),
            ('LMN789', 'Ford', 'Focus', '2020', 3),
            ('TAC349', 'Toyota', 'Fortuner', '2008', 1),
            ('WEs9', 'Toyota', '4runner', '2020', 3);
        `);
    



export default client