const every = (arr) => {
    for(let i = 0; i < arr.lenght; i++) {
        if(!func(arr[i])) {
            return false
        }
    }
    return true
}

export default every
