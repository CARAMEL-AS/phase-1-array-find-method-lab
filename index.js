// // find()

// function superbowlWin(wins) {
//     wins.result === 'W'
//     }
// record.find(superbowlWin);


const superbowlWin = (records) => {
    const found = records.find(record => {
          return record.result === 'W'
    })
    return found ? found.year : undefined;
}