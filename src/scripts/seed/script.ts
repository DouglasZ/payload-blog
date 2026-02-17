import { seedAdmin } from '@/scripts/seed/seeders/admin.seeder'
import { getPayloadClient } from '@/lib/payload/client'
import { seedArticleAuthor } from '@/scripts/seed/seeders/article-author.seeder'
import { seedArticles } from '@/scripts/seed/seeders/articles.seeder'

async function main() {
  const payload = await getPayloadClient()
  try {
    await seedAdmin(payload)
    await seedArticleAuthor(payload)
    await seedArticles(payload)
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

void main()
