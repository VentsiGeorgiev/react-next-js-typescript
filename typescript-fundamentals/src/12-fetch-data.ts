import { z } from 'zod'

const url = 'https://www.course-api.com/react-tours-project'

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  // number: z.number(),
})

type Tour = z.infer<typeof tourSchema>

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`)
    }
    const rawData: Tour[] = await response.json()

    const result = tourSchema.array().safeParse(rawData)

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`)
    }

    return result.data
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Something went wrong'
    console.log(errorMessage)
    return []
  }
}

const tours = await fetchData(url)
tours.map((el) => console.log(el.name))
