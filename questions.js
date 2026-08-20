window.INTAKE_API_BASE = "https://smart-wardrobe-api-dpks.onrender.com";

window.INTAKE_FORM = {
  kinds: [
    { id: 'traffic', label: '車禍' },
    { id: 'family', label: '家事' },
    { id: 'labor', label: '勞資' },
    { id: 'other', label: '其他' },
  ],
  shared: [
    { id: 'name', label: '諮詢人姓名', placeholder: '姓名' },
    { id: 'phone', label: '聯絡電話', placeholder: '手機或市話' },
    { id: 'opponent', label: '對造（若知道）', placeholder: '姓名、公司或車牌' },
    { id: 'goal', label: '想請律師處理什麼', placeholder: '例如：求償、調解、是否提告', multiline: true },
    { id: 'caseRef', label: '是否已有案號或開庭期日', placeholder: '沒有就填「尚未」' },
    { id: 'documents', label: '手上已有哪些資料', placeholder: '存證信函、診斷證明、契約等', multiline: true },
  ],
  byKind: {
    traffic: [
      { id: 'whenWhere', label: '發生日期與地點', placeholder: '例如 115/3/12 臺北市…', multiline: true },
      { id: 'parties', label: '我方／對方（車種或行人）', placeholder: '例如 機車 vs 小客車', multiline: true },
      { id: 'police', label: '有無報案、事故紀錄或鑑定', placeholder: '有／沒有，單號若知道可填' },
      { id: 'injury', label: '傷勢與就醫', placeholder: '有無受傷、哪家醫院' },
      { id: 'insurance', label: '保險情形', placeholder: '強制／任意／對方保險' },
      { id: 'evidence', label: '行車紀錄器或現場照片', placeholder: '有／沒有，存在哪裡' },
    ],
    family: [
      { id: 'relation', label: '與對方關係', placeholder: '配偶、子女、其他親屬' },
      { id: 'familyStatus', label: '婚姻與子女狀況', placeholder: '已婚／分居、子女幾人幾歲', multiline: true },
      { id: 'topics', label: '想談的事項', placeholder: '離婚、監護、扶養、家暴等，請自行填寫', multiline: true },
      { id: 'prior', label: '是否已有保護令、調解或訴訟', placeholder: '有／沒有，若有請註明' },
    ],
    labor: [
      { id: 'job', label: '公司與職稱', placeholder: '公司名稱、做什麼' },
      { id: 'dates', label: '到職、離職或爭議日期', placeholder: '例如到職 113/1、爭議 115/2' },
      { id: 'topics', label: '想談的事項', placeholder: '資遣、加班費、職災等，請自行填寫', multiline: true },
      { id: 'prior', label: '是否已向勞工局申訴或調解', placeholder: '有／沒有，若有請註明' },
    ],
    other: [
      { id: 'timeline', label: '事件經過（請依時間寫）', placeholder: '先寫日期，再寫發生什麼', multiline: true },
      { id: 'stuck', label: '目前卡關的地方', placeholder: '最需要先問清楚的事', multiline: true },
    ],
  },
};
