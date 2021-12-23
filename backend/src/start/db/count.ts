import db from "./index"

export class NotFound extends Error {
  constructor(message: string) {
    super(message)
    this.name = "NotFound"
  }
}

async function findOne(slug: string): Promise<any> {
  try {
    const res = await db.query("SELECT * from counts WHERE slug = $1", [slug])
    if (res.rows.length === 0) {
      throw new NotFound("Slug was not found")
    }
    return res.rows[0]
  } catch (error) {
    throw error
  }
}

async function create(slug: string): Promise<any> {
  try {
    const res = await db.query(
      "INSERT INTO COUNTS (slug, created_at, updated_at) VALUES ($1, NOW(), NOW()) RETURNING *",
      [slug]
    )
    return res.rows[0]
  } catch (error) {
    console.error(error)
  }
}

async function update(slug: string, count: number): Promise<any> {
  try {
    const res = await db.query(
      `UPDATE counts
       SET count = $1, updated_at = NOW() 
       WHERE counts.slug = $2 
       RETURNING *`,
      [count, slug]
    )
    return res.rows[0]
  } catch (error) {
    console.error(error)
  }
}

async function incrementBy(slug: string, amount: number): Promise<any> {
  try {
    const res = await db.query(
      `UPDATE counts
       SET count = count + $2, updated_at = NOW() 
       WHERE counts.slug = $1 
       RETURNING *`,
      [slug, amount]
    )
      return res.rows[0]
  } catch (error) {
    console.error(error)
  }
}

const Count = { create, incrementBy, findOne, update }
export default Count
