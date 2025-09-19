import { getConnection } from '~/server/utils/db'

export default defineEventHandler(async () => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM Bibliotecas')
    return result.recordset
  } catch (err) {
    return { error: 'Error al consultar la BD', details: err.message }
  }
})