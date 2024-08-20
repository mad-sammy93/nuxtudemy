export default async (city, filters) => {
  const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
    params: {
      ...filters,
    },
  })
  if (error.value) {
    throw createError({
      ...error.value,
      statusCode: 500,
      statusMessage: error.value.message,
    })
  }
  return { data, refresh }
}
