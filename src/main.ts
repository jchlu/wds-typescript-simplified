function wait(delay: number) {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve('Sausages'), delay)
  })
}

wait(1000).then(value => {
  console.log(value.length)
})
