import Joi from 'joi'

const schema = Joi.object({
  make: Joi.string(),
  model: Joi.string(),
  year: Joi.number().min(1900),
  miles: Joi.number().required().min(0),
  city: Joi.string().min(2).required(),
  numberOfseats: Joi.number().max(1000).min(1).required(),
  description: Joi.string().min(20).required(),
  featiures: Joi.array().items(Joi.string()).required(),
  image: Joi.string().uri().required(),
  listerId: Joi.string().required(),
  price: Joi.number().min(0).required(),
  name: Joi.string().required(),
})
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { error, value } = schema.validate(body)
  if (error) {
    throw createError({ statusCode: error.statusCode, statusMessage: error.message })
  }

  const { image, name, numberOfseats, listerId, price, city, featiures, miles, make, model, year, description } = body

  const car = await prisma.car.create({
    data: {
      image,
      name,
      numberOfseats,
      listerId,
      price,
      city: city.toLowerCase(),
      featiures,
      miles,
      make,
      model,
      year,
      description,
    },
  })
  return { error, value }
})
