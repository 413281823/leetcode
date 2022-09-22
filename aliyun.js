const fetch = require('node-fetch')
const xlsx = require('xlsx')
const fpath = './data.xlsx'
let datas = parseXlsxData(fpath,0,1)
console.log(datas)
let filterDatas = datas.filter(row => {
  return !row.includes(undefined)
})
console.log(filterDatas)
const createTask = async () => {
  for(let i = 0; i < filterDatas.length; i++) {
    if (i) {
      const [name, title, subTitle, childTitle] = filterDatas[i]
      console.log(name, title, subTitle, childTitle)
      const subject = `${name}${title}-${subTitle}-${childTitle}`
      const res = await fetch("https://devops.aliyun.com/projex/api/workitem/workitem?_input_charset=utf-8", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9",
          "content-type": "application/json",
          "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-csrf-token": "scYbNArb-mgevDbdwzrvj5_SsaQKIl59p1eQ",
          "cookie": "cna=YVNvF3s74DUCAXPnZGrDqPZl; session-lead-visited/6073ba5d9db2b2a61b08d329=false; t=b0a8e4431843bf9cff4d7c086f531616; aliyun_lang=zh; currentRegionId=cn-hangzhou; aliyun_choice=CN; x-hng=lang=zh-CN; _samesite_flag_=true; cookie2=1fa3e38c27d471a80f902c7dde205d37; _tb_token_=3e46e8617e3ee; _hvn_login=6; ak_user_locale=zh_CN; teambition_lang=zh_CN; AONE_SESSION=3d40e12f-e244-4f25-98d5-1b16c2b7afb6; login_aliyunid_pk=1640526135951819; XSRF-TOKEN=ce4071ea-272e-4e8c-bc5c-2c974d7ed93d; login_aliyunid=\"lovefis****@aliyun.com\"; login_aliyunid_ticket=CbifG2Cd4ZWazmBdHI6sgXZqg4XFWQfyKpeu*0vCmV8s*MT5tJl3_1$$w2F1WKHWw6lCNaPrxWkHDUgP5ICSEeDvkF5X3Hr6KyHf_ENpoU_BOTwChTBoNM1ZJeedfK9zxYnbN5hossqIZCr6t7SGxRmg0; login_aliyunid_csrf=_csrf_tk_1518563225842364; hssid=d1b6a350-e79d-4bde-889d-a6f7238953e5; hsite=6; aliyun_country=CN; aliyun_site=CN; l=eBNFK4YrTLSw5hJdBOfwourza77OSIRAguPzaNbMiOCPOuCB5YTVW6o2AyY6C3GVhsBeR3o34xxwBeYBc7F-nxvTkjOadJMmn; tfstk=cCHABgXOv3IYIDORWcdu74szUaYhZ-tYziZABAmGpWfNgjXOi4knpHAkGrzUk3C..; isg=BIGB_O--hvJAIOr0HpFLjQMCkMubrvWgTWuZfePWfQjnyqGcK_4FcK9LrD6MQo3Y; LOGIN_ALIYUN_PK_FOR_TB=1640526135951819; TEAMBITION_SESSIONID=eyJ1aWQiOiI2MDczYmE1ZDlkYjJiMmE2MWIwOGQzMjkiLCJhdXRoVXBkYXRlZCI6MTY2MjQ1MTk2NTM5NCwidXNlciI6eyJfaWQiOiI2MDczYmE1ZDlkYjJiMmE2MWIwOGQzMjkiLCJuYW1lIjoi6IKW5p6XIiwiZW1haWwiOiJhY2NvdW50c182MDczYmE1ZGE3MzUzZDAwMmRhMTNjNTFAbWFpbC50ZWFtYml0aW9uLmNvbSIsImF2YXRhclVybCI6Imh0dHBzOi8vdGNzLWRldm9wcy5hbGl5dW5jcy5jb20vdGh1bWJuYWlsLzExMmsxODhlNTIzMGEwODYzYjQ3ZTQ0ZDFlZTRhNDcxNzFjZC93LzEwMC9oLzEwMCIsInJlZ2lvbiI6InVzIiwibGFuZyI6IiIsImlzUm9ib3QiOmZhbHNlLCJvcGVuSWQiOiIiLCJwaG9uZUZvckxvZ2luIjoiIiwiY3JlYXRlZCI6IjIwMjEtMDQtMTJUMDM6MTE6MjUuMzM5WiJ9LCJsb2dpbkZyb20iOiIifQ==; TEAMBITION_SESSIONID.sig=cbrXZyjpwaDsKbhpRG773lNEpMM; acw_tc=781bad2316632261243148336e57f6be459e3f6e45d3767a5bb2b7f82a1fa1",
          "Referer": "https://devops.aliyun.com/projex/project/ded0251c055a5d587fbd4b322e/task",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `{\"subject\":\"${subject}\",\"description\":\"\",\"descriptionFormat\":\"RICHTEXT\",\"spaceIdentifier\":\"ded0251c055a5d587fbd4b322e\",\"space\":\"ded0251c055a5d587fbd4b322e\",\"spaceType\":\"Project\",\"workitemTypeIdentifier\":\"ba102e46bc6a8483d9b7f25c\",\"categoryIdentifier\":\"Task\",\"workitemType\":\"ba102e46bc6a8483d9b7f25c\",\"category\":\"Task\",\"fieldValueList\":[{\"fieldIdentifier\":\"priority\",\"value\":\"5b9a270646266dc59495e6a853\"},{\"fieldIdentifier\":\"a83b30c12561cccfb1ddbd40fd\",\"value\":\"原始需求\"}],\"attachmentIdList\":[],\"cloneFrom\":null,\"sprint\":[\"1e78212347d17d930e609ffdce\"],\"assignedTo\":\"6073ba5d9db2b2a61b08d329\",\"ak.issue.member\":[\"6073ba5d9db2b2a61b08d329\"],\"workitem.tracker\":[\"62b5709c29d72730d9280787\"]}`,
        "method": "POST"
      })
      console.log(res)
    }
  }
}
createTask()


// xlsx解析函数，通过路径参数，和表名称(没有名称用Sheet2表示第二张表)参数解析xlsx文件,
// 参数3为无效列数，设置无效列会把生成的数组的行数据从后向前删除字段值
function parseXlsxData(fpath,sheetName,colNone=0){

  const sourceData = xlsx.readFile(fpath, {})    // 通过xlsx库获取源数据
  sheetName =  sheetName ? sheetName : Object.keys(sourceData.Sheets).pop()
  let sheetData = sourceData.Sheets[sheetName]    // 获取xlsx表数据，默认获取第一张
  if(!sheetData) return '你访问的数据表不存在'

  // 获取行数col和列数row
  let ref = sheetData['!ref']
  let refParse = ref.match(/[a-z]+|[0-9]+/ig)
  let col = refParse[3] - refParse[1] + 1
  let row = refParse[2].charCodeAt() - refParse[0].charCodeAt() + 1

  // 获取单元格合并数据并建立数组索引
  let merges = sheetData['!merges']
  let mergesParses = xlsxMergeParse(merges)
  let mergeIndexs = mergeIndex(mergesParses)

  // 根据表的行数和列数创建一个表，在创建每个单元格时插入数据，数据填充普通单元格直接引用sheetData，
  //合并单元格通过映射下标计算引用sheetData
  let datas = []
  for(let i = 1;i< col + 1 ;i++){
    let row = []
    for(let j = refParse[0].charCodeAt();j<refParse[2].charCodeAt()+1-colNone;j++){
      let letter = String.fromCharCode(j)
      let k = j-64
      row.push(sheetData[letter+i] ? sheetData[letter+i].w : autoFill([i,k],mergeIndexs,mergesParses,sheetData))
    }
    datas.push(row)
  }

  return datas
}



// 解析单元格合并数据方法
// 解析表格单元格合并数据  把参与合并的单元格全部计算并统计位置信息
function xlsxMergeParse(merges){
  let arr = []

  merges.map(v=>{
    let {s,e} = v
    let result = []
    let addNum = 1 //使数组下标加一，符合Excel单元格下标
    if(s.c === e.c){
      for(let i = s.r;i<e.r+1;i++){result.push([i+addNum,s.c+addNum])}
    }else{
      for(let i = s.c;i<e.c+1;i++){result.push([s.r+addNum,i+addNum])}
    }
    arr.push(result)
  })

  return arr

}

// 单元格合并数据建立索引
// 单元格合并数据为三维数组，为了提升数据处理效率，添加索引（变为一维数组，序列化位置信息）
function mergeIndex(mergesParse){

  let datas = []

  mergesParse.map((v,i) => {
    let row = []
    v.map((v1,i1) => {
      row.push(v1.join(','))
      row.push([i,i1].join('-'))
    })
    datas.push(row)
  })

  return datas.flat(Infinity)
}

// 根据单元格下标计算应该填充的值
function autoFill(point,index,mergesParses,sheetData){

  // 判断此单元格是否属于合并单元格
  let isNeed = index.indexOf(point.join(','))
  if(isNeed < 0) return undefined

  // 通过索引获取映射的合并数据三维数组的下标
  let target = index[isNeed+1]
  let result = target.split('-')[0]
  result = mergesParses[result][0]

  // 返回合并单元格左上单元格数据
  result = (sheetData[String.fromCharCode(result[1]+64)+result[0]] || {}).w || ''
  return result
}