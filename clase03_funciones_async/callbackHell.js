const copyFile = (filename, callback) => {
    searchFile(filename, (error, file) => {
        if (error) callback(error)
        else {
            readFile(filename, 'utf-8', (error, texto) => {
                if (error) callback(error)
                else {
                    const nameCopy = filename + '.copy'
                    writeFile(nameCopy, texto, (error) => {
                        if (error) callback(error)
                        else callback(null)
                    })
                }
            })
        }
    })

}