window.INTAKE_API_BASE = "https://smart-wardrobe-api-dpks.onrender.com";

window.INTAKE_FORM = {
  kind: "other",
  questions: [
    { id: "name", label: "姓名", placeholder: "全名或姓氏都可以" },
    { id: "gender", label: "性別", placeholder: "男／女／其他／不便說明" },
    { id: "phone", label: "電話", placeholder: "手機或市話" },
    { id: "lineId", label: "LINE（選填）", placeholder: "方便聯絡；沒有可空白" },
    { id: "who", label: "前來諮詢的是", placeholder: "本人／親友代約" },
    { id: "matter", label: "案由", placeholder: "例如：民事房屋漏水、刑事詐騙", multiline: true },
    { id: "amount", label: "預估涉及金額", placeholder: "例如約 30 萬；不確定可填尚未" },
    { id: "hearing", label: "是否有開庭日期", placeholder: "有請填日期時間；沒有填尚未" },
    { id: "slots", label: "方便預約的時間段", placeholder: "例如平日晚上、週六上午", multiline: true },
    { id: "note", label: "備註（想讓律師先知道的）", placeholder: "補充說明、緊急程度等", multiline: true },
  ],
};
