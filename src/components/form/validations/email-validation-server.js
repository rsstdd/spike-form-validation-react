export default async ({ email }) => {
  const errors = {}
  console.log('here')

  await timeout(2000)

  errors.email = getRandom(['Worked', 'Somethign else'])
  return errors
}

function timeout(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

const getRandom = arr => arr[Math.floor(Math.random() * arr.length)]
