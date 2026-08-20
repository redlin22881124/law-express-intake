window.INTAKE_API_BASE = "https://smart-wardrobe-api-dpks.onrender.com";

window.INTAKE_FORM = {
  kinds: [
    { id: "traffic", label: "車禍", hint: "交通事故、求償、鑑定" },
    { id: "criminal", label: "刑事", hint: "告訴、被告、筆錄、傳票" },
    { id: "family", label: "家事", hint: "離婚、監護、扶養、家暴" },
    { id: "inheritance", label: "繼承／遺產", hint: "遺囑、拋棄繼承、分割" },
    { id: "labor", label: "勞資", hint: "資遣、加班費、職災" },
    { id: "civil", label: "民事／契約／欠款", hint: "契約、貨款、損害賠償" },
    { id: "debt", label: "債務／強制執行", hint: "卡債、本票、支付命令" },
    { id: "other", label: "其他", hint: "以上都不是，先寫經過" },
  ],
  shared: [
    { id: "name", label: "諮詢人姓名", placeholder: "姓名" },
    { id: "phone", label: "聯絡電話", placeholder: "手機或市話" },
    { id: "opponent", label: "對造（若知道）", placeholder: "姓名、公司或車牌" },
    { id: "goal", label: "想請律師處理什麼", placeholder: "例如：求償、調解、是否提告", multiline: true },
    { id: "caseRef", label: "是否已有案號或開庭期日", placeholder: "沒有就填「尚未」" },
    { id: "documents", label: "手上已有哪些資料", placeholder: "存證信函、診斷證明、契約等", multiline: true },
  ],
  byKind: {
    traffic: [
      { id: "whenWhere", label: "發生日期與地點", placeholder: "例如 115/3/12 臺北市…", multiline: true },
      { id: "parties", label: "我方／對方（車種或行人）", placeholder: "例如 機車 vs 小客車", multiline: true },
      { id: "police", label: "有無報案、事故紀錄或鑑定", placeholder: "有／沒有，單號若知道可填" },
      { id: "injury", label: "傷勢與就醫", placeholder: "有無受傷、哪家醫院" },
      { id: "insurance", label: "保險情形", placeholder: "強制／任意／對方保險" },
      { id: "evidence", label: "行車紀錄器或現場照片", placeholder: "有／沒有，存在哪裡" },
    ],
    criminal: [
      { id: "role", label: "目前身分", placeholder: "告訴人／被告／證人／其他" },
      { id: "charge", label: "案由或罪名（若知道）", placeholder: "例如傷害、詐欺、毀謗" },
      { id: "stage", label: "目前進度", placeholder: "報案、筆錄、傳票、起訴、審理中" },
      { id: "timeline", label: "事件經過（請依時間寫）", placeholder: "先寫日期，再寫發生什麼", multiline: true },
      { id: "custody", label: "有無羈押、交保或限制出境", placeholder: "有／沒有，若有請註明" },
      { id: "prior", label: "是否已有律師或收到書類", placeholder: "起訴書、傳票、搜索扣押等" },
    ],
    family: [
      { id: "relation", label: "與對方關係", placeholder: "配偶、子女、其他親屬" },
      { id: "familyStatus", label: "婚姻與子女狀況", placeholder: "已婚／分居、子女幾人幾歲", multiline: true },
      { id: "topics", label: "想談的事項", placeholder: "離婚、監護、扶養、家暴等，請自行填寫", multiline: true },
      { id: "prior", label: "是否已有保護令、調解或訴訟", placeholder: "有／沒有，若有請註明" },
    ],
    inheritance: [
      { id: "relation", label: "與被繼承人關係", placeholder: "配偶、子女、其他親屬" },
      { id: "will", label: "是否已有遺囑", placeholder: "有／沒有，手寫或公證若知道可填" },
      { id: "estate", label: "遺產大概有哪些", placeholder: "不動產、存款、保險、公司股權等", multiline: true },
      { id: "heirs", label: "繼承人與有無爭議", placeholder: "幾人、是否有人要拋棄或爭執", multiline: true },
      { id: "prior", label: "是否已辦理繼承、拋棄或分割", placeholder: "有／沒有，若有請註明" },
    ],
    labor: [
      { id: "job", label: "公司與職稱", placeholder: "公司名稱、做什麼" },
      { id: "dates", label: "到職、離職或爭議日期", placeholder: "例如到職 113/1、爭議 115/2" },
      { id: "topics", label: "想談的事項", placeholder: "資遣、加班費、職災等，請自行填寫", multiline: true },
      { id: "prior", label: "是否已向勞工局申訴或調解", placeholder: "有／沒有，若有請註明" },
    ],
    civil: [
      { id: "dispute", label: "爭議是什麼", placeholder: "欠款、契約、損害賠償等，請自行填寫", multiline: true },
      { id: "amount", label: "金額或標的（若有）", placeholder: "例如積欠 20 萬、貨款未付" },
      { id: "contract", label: "有無契約或往來證明", placeholder: "合約、訊息、轉帳紀錄等" },
      { id: "timeline", label: "事件經過（請依時間寫）", placeholder: "先寫日期，再寫發生什麼", multiline: true },
      { id: "prior", label: "是否已發存證信函或起訴", placeholder: "有／沒有，若有請註明" },
    ],
    debt: [
      { id: "role", label: "目前身分", placeholder: "債權人／債務人／保證人" },
      { id: "amount", label: "金額與債務來源", placeholder: "例如卡債、民間借貸、本票 50 萬" },
      { id: "stage", label: "目前進度", placeholder: "催收、本票、支付命令、強制執行、扣薪" },
      { id: "timeline", label: "事件經過（請依時間寫）", placeholder: "先寫日期，再寫發生什麼", multiline: true },
      { id: "prior", label: "是否已有判決、支付命令或執行", placeholder: "有／沒有，若有請註明" },
    ],
    other: [
      { id: "timeline", label: "事件經過（請依時間寫）", placeholder: "先寫日期，再寫發生什麼", multiline: true },
      { id: "stuck", label: "目前卡關的地方", placeholder: "最需要先問清楚的事", multiline: true },
    ],
  },
};
