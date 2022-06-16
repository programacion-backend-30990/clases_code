export const getTime = () => {
    return {
        datetime: new Date().toLocaleTimeString,
        timestamp: Date.now()
    }
}