async function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve('Hi'), delay)
  })
}

wait(1000).then(value => {
  console.log(value.length) // 'value' is of type 'unknown'. typescript (18046) [8, 15]
})
