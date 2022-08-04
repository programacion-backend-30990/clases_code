console.log('Mi programa de Node')

console.log(process.argv)

for(let j = 0; j < process.argv.length; j++)
  console.log(`${j} -> ${process.argv[j]}`)

const port = process.argv[2] || 8080
console.log(`The port is ${port}`)



