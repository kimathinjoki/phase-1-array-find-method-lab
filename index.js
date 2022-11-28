// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]


  function superbowlWin(array){
    for(const item of array){
        if (item.result === "W"){
            return item.year
        }

    }
  }

  console.log(record.find(superbowlWin(record)));