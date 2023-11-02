export const customToolTip = (startVal, endVal) => {
    return `Start: ${startVal} \n End: ${endVal}`
}

const hoursToInt = (hours) => {
    let newHours = parseInt(hours.slice(0,2))
    let min = parseInt(hours.slice(3, 5))
    return newHours + parseFloat((min/60).toFixed(2))
}

const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

let base = [
    {
        "start": "2023-10-27T12:34:56",
        "end": "2023-10-27T19:34:56"
    },
    {
        "start": "2023-12-27T12:34:56",
        "end": "2023-12-27T12:34:56"
    },
    {
        "start": "2023-12-27T13:34:56",
        "end": "2023-12-27T13:34:56"
    }
]

export const workingTimeDataFormat = (workingtimes, days) => {

    let result = [
        ['day', 'shift', 'b', 'c', 'd', {type:'string',role:'tooltip'}],
    ]
    workingtimes.map((w) => {
        let d = new Date(w.start)
        let ds = daysOfTheWeek[d.getDay()]
        let s = hoursToInt(w.start.split('T')[1])
        let e = hoursToInt(w.end.split('T')[1])
        result.push([
            ds, s, e, s, e, customToolTip(s, e)
        ])
    })

    return result
}