var nums = [1, 2, 3]

if (nums && nums.length >= 1 && nums.length <= 6) {
  //verify values;
  const verifynumber = nums.filter((el1) => {
    return el1 < -10 || el1 > 10
  })
  const noValidNumber = verifynumber.length > 0 ? true : false
  if (!noValidNumber) {
    const verifyIntegerOnly = nums.filter((el1) => {
      return !(typeof el1 == 'number')
    })
    const noValidInteger = verifyIntegerOnly.length > 0 ? true : false
    if (!noValidInteger) {
      const hasDuplicates = (array) => {
        var valuesSoFar = []
        for (var i = 0; i < array.length; ++i) {
          var value = array[i]
          if (valuesSoFar.indexOf(value) !== -1) {
            return true
          }
          valuesSoFar.push(value)
        }
        return false
      }
      if (!hasDuplicates(nums)) {
        let result = []
        const permuted = (nums, m = []) => {
          if (nums.length === 0) {
            result.push(m)
          } else {
            for (let i = 0; i < nums.length; i++) {
              let curr = nums.slice()
              let next = curr.splice(i, 1)
              permuted(curr.slice(), m.concat(next))
            }
          }
          return result
        }
        console.log('Permuted Array:', permuted(nums))
      } else {
        console.error('not permited duplicate values.')
      }
    } else {
      console.error('only permited integer values.')
    }
  } else {
    console.error(
      'The numbers contains validate condition, this >=-10 and <=10'
    )
  }
} else {
  console.error('Array length >=1 and <=6')
}
