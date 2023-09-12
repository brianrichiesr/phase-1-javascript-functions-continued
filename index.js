function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (task = "go to the office") => `This Monday, I will ${task}.`

const wrapAdjective = (wrapper = "*") => {
    return function highlighter(adj = "special") {
        return `You are ${wrapper}${adj}${wrapper}!`;
    }
}