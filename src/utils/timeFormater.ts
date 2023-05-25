function timeFormater(time:number) {
    const seconds = Math.floor(time / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    return `${hours}/${minutes}/${seconds}`
}

export default timeFormater