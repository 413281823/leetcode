// const ads= /(?:([1-9][0-9]*\.?|[0])|([0]\.)|(\.[0-9]+)|([0-9]+\.)|(([1-9][0-9]*\.?|[0])\.[0-9]+))|\+|\-|\*|\/|\s+/g
const res = /((?:(?:[1-9][0-9]*|0)(?:\.[1-9][0-9]*))|(?:(?:[1-9][0-9]*|0)\.?)|(?:\.[1-9][0-9]*))|(\+)|(\-)|(\*)|(\/)|(\s+)/g
    let str = '3.31 * 4. / .5 '
        // 一种是数字 一种是运算符
        // "3.31 * 4. / 0.5"
    let matched
    let tokens = []
    class Token{
        constructor(matched){
            if (matched[1]){
                this.type = 'number'
                this.value = Number(matched[1])
            } else if (matched[2]){
                this.type = 'add'
                this.value = matched[2]
            } else if (matched[3]) {
                this.type = 'sub'
                this.value = matched[3]
            } else if (matched[4]) {
                this.type = '*'
                this.value = matched[4]
            } else if (matched[5]){
                this.type = '/'
                this.value = matched[5]
            }
        }
    }
   while (matched=res.exec(str)){
    if (!matched[6]) {
        tokens.push(new Token(matched))
    }
  
   }
console.log(tokens)
// /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/


// add = Number + Number
// mul = Number * Number
// add = mul
// add = add + mul
// mul = mul * number
// mul = Number


// 右结合
// mul = number * mul
// function mul (tokens) {
//     console.log(tokens)
//     // 判断tokens第二个有没有 没有的话第一个一定是数字
//     if (!tokens[1]) {
//         return tokens[0]
//     } else if (tokens[1].type === 'mul' | tokens[1].type === 'div') {
        
//         return {
//             left:tokens[0],
//             right:mul(tokens.slice(2)),
//             op:tokens[1].type
//         }
//     } 
// }

// 左结合
// mul = mul * number
function mul (tokens) {
    // 第一个一定是number
    if (tokens[0].type === 'number') {
        const num = tokens.shift()
        tokens.unshift({type:'mul', value:num})
        return mul(tokens)
        
        // 处理第二个没有值的情况，那么第一个一定是number
    } else if (!tokens[1]) {
        return tokens[0]
        // 处理前面return的 也就是最外的right节点
    } else if (tokens[0].type === 'mul') {
   
        const left = tokens.shift()
        const op = tokens.shift()
        const right = tokens.shift()
        tokens.unshift({
            left,right,op
        })

        return mul(tokens)
    } else if (tokens[1].type === '*' || tokens[1].type === '/') {
        
        return {
            left:mul(tokens.slice(0,-2)),
            right:tokens[tokens.length - 1],
            op:tokens[tokens.length - 2].type
        }
    }
}

// function mul (tokens) {
//     if (tokens[0] === 'number') {`

//        const num = tokens.shift()
//        tokens.unshift({value:num,type:'mul'})
//        return mul(tokens)

//     } else if(!tokens[1]){

//         return tokens[0]

//     } else if (tokens[0] === 'mul') {

//         const left = tokens.shift()
//         const op = tokens.shift()
//         const right = tokens.shift()
//         tokens.unshift({
//             left,right,op
//         })

//         return mul(tokens)
//     }
// }

console.log(JSON.stringify(mul(tokens),null,"  "))