// const float = 10e3
// const big = 1_000_000

// // console.log(Number.MAX_SAFE_INTEGER)
// // console.log(Math.pow(2, 53) - 1)

// // console.log(Number.MAX_VALUE)
// // console.log(Number.MAX_VALUE)
// // console.log(Number.POSITIVE_INFINITY)
// // console.log(Number.NEGATIVE_INFINITY)
// // console.log(1 / 0)

// // console.log(Number.isFinite(1 / 0))

// // console.log( 23 / undefined)

// // const weird = 23 / undefined
// // console.log(Number.isNaN(weird))

// const strInt = '42'
// const strFloat = '42.42'

// // console.log(parseFloat((0.1 + 0.2).toFixed(1)))

// // console.log(Number(strInt))
// // console.log(Number(strFloat))

// // console.log(parseInt(strInt))
// // console.log(parseFloat(strFloat))

// // console.log(+strInt, +strFloat)

// console.log(BigInt(Number.MAX_SAFE_INTEGER + 234324234234))
// console.log(Number.MAX_SAFE_INTEGER + 234324234234)

//  const myNum = 4.5
//  console.log((Math.floor(myNum)))
//  console.log((Math.ceil(myNum)))
//  console.log((Math.round(myNum)))
//  console.log((Math.trunc(myNum)))
//  console.log(Math.random())

function getRandomNumber(min, max){
    return Math.trunc(Math.random() * (max - min + 1) + min)
}

const num1 = getRandomNumber(10, 100)

console.log(num1)


