//this is the value to change and testing
let s = 'cbbd'

//init conditional and palindromic
if (!/[^a-zA-Z]/.test(s)) {
  if (1 <= s.length && s.length <= 1000) {
    let length = s.length
    let minLetter = 2
    let minPalindromic = ''
    let maxPalindromic = ''
    let onlyfirst = true
    let listPalindromic = []
    for (let index = minLetter; index < length; index++) {
      let counterPosition = 0
      let whilestart = true
      while (whilestart) {
        const temp = s.substring(counterPosition, counterPosition + index)
        const tempReverse = temp.split('').reverse().join('')
        if (tempReverse === temp) {
          listPalindromic.push(temp)
          if (onlyfirst) {
            if (
              (!(minPalindromic.length == temp.length) &&
                temp.length < minPalindromic.length) ||
              minPalindromic.length == 0
            ) {
              minPalindromic = temp
            }
            if (
              (!(maxPalindromic.length == temp.length) &&
                temp.length > maxPalindromic.length) ||
              minPalindromic.length == 0
            ) {
              maxPalindromic = temp
            }
          } else {
            if (
              temp.length > maxPalindromic.length ||
              minPalindromic.length == 0
            ) {
              maxPalindromic = temp
            }
            if (
              temp.length < minPalindromic.length ||
              minPalindromic.length == 0
            ) {
              maxPalindromic = temp
            }
          }
        }
        if (index + counterPosition == length) whilestart = false
        counterPosition++
      }
    }
    if (maxPalindromic && maxPalindromic.length > 0) {
      console.log('Palindromic Max:', maxPalindromic)
      console.log('Palindromic Min:', minPalindromic)
      console.log('Palindromic Array', listPalindromic)
    } else {
      console.error('No exist Palindromic')
    }
  } else {
    console.error('only support min 1 letter and max 1000 letters')
  }
} else {
  console.error('only support english letters')
}
