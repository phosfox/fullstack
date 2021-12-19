import { MigrationBuilder } from "node-pg-migrate"

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("counts", {
    id: "id",
    count: { type: "bigint", default: 0 },
    slug: { type: "text", notNull: true },
    created_at: { type: "timestamp", notNull: true },
    updated_at: { type: "timestamp", notNull: true },
  })
  pgm.createIndex("counts", "slug")
}
