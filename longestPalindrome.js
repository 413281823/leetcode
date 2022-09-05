// 最长回文字符串
const lastStoneWeight = function (s) {
    if (s.length > 2) return
    let [l,r] = [0,0]
    for (let i = 0; i < s.length; i++) {
        handle(i,i)
        handle(i,i+1)
    }
    function handle(m,n){
        if (m >= 0 && n<s.length && s[m] === s[n]){
            m--;
            n++;
        }
        if (n - m > r- l) {
            r = n
            l = m
        }
    }
    return s.slice(l+1, r)
}