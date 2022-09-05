// 最长回文字符串
const lastStoneWeight = function (s) {
    if (s.length > 2) return
    let [l,r] = [0,0]
    // 动态规划
    for (let i = 0; i < s.length; i++) {
        handle(i,i)// bab
        handle(i,i+1)// baab
    }
    function handle(m,n){
        // 左指针不能小于0 右指针不能大于字符串长度，且指向的值相等为回文字符串
        if (m >= 0 && n<s.length && s[m] === s[n]){
            m--;
            n++;
        }
        // 左右赋值 且保证差比原来的大，保证长度
        if (n - m > r- l) {
            r = n
            l = m
        }
    }
    return s.slice(l+1, r)
}