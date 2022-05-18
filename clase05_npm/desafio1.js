const obj = {}
for(let i = 0; i < 1000; i++) {
    const num = Math.round(Math.random() * 20)

    // if (num in obj) { // Cada vez que encuentre repetido
    //     obj[num]++
    // } else { // Primera vez
    //     obj[num] = 1
    // }

    obj[num] = (num in obj) ? obj[num] + 1 :1
}

console.log(obj)