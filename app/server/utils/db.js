import sql from 'mssql'

const config = {
  server: process.env.DB_HOST,  
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  options: {
    encrypt: false, // en local normalmente va false
    trustServerCertificate: true
  }
}

let pool

export async function getConnection() {
  try {
    if (!pool) {
      pool = await sql.connect(config)
    }
    return pool
  } catch (err) {
    console.error('Error conectando a SQL Server:', err)
    throw err
  }
}
