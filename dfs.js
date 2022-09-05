const a = []
const book = []
function dfs (step){
    
    let i 
    if (step == 3+1){
       console.log(a[1],a[2],a[3])
        rethelperurn
    }

    for (i = 1; i <=3; i++) {
        if (!book[i]){
            a[step] = i;
            book[i] = 1
            dfs(step+1)
            book[i] = 0
        }
    }
}

dfs(1)