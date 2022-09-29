
function createNewDTO(newOne, _id, datetime) {
    return {
        ...newOne,
        _id,
        datetime
    }
}

export default createNewDTO