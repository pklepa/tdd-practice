function analyze(array) {
  function getAverage(arr) {
    const total;
    total = arr.reduce((total, current) => {
                     return total + current
                  }, 0)

    return total / array.length
  }



  const result = {
    average: getAverage(array)
  }

  return result
}

export default analyze