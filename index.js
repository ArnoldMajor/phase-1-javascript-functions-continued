let activity;

function saturdayFun(activity){
    switch (activity) {
    case undefined:
        return 'This Saturday, I want to roller-skate!';
        
    default:
        return `This Saturday, I want to ${activity}!`;
    }    
}

function mondayWork(specified){
    let defaultActivity = 'go to the office';
    if (specified === undefined) {
        return `This Monday, I will ${defaultActivity}.`;
    }

    else return `This Monday, I will ${specified}.`;
}

let highlight;

function wrapAdjective(highlight){
    return (function (value = 'special') {
        return `You are ${highlight}${value}${highlight}!`
    })

}
