export const sortingFunc = (obj, condition) => {
    const result = []
    const objSorted = Object.fromEntries(Object.entries(obj).sort())
    for (const key in objSorted) {
        if (condition.includes(key)) {
            const index = condition.findIndex( item => item === key)
            result[index] = {'key': key, 'value': objSorted[key]}
        }
    }
    for (const key in objSorted) {
        if (!condition.includes(key)) {
            result[result.length] = {'key': key, 'value': objSorted[key]}
        }
    }
    return result
}