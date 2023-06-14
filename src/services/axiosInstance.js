import axios from "axios";

export const service = axios.create({
    baseURL: "https://script.googleusercontent.com/macros/echo?user_content_key=GHr6n6SmNaLgm4XHx4B_q6YW8mWpm0kzSsRniSkPEj1XTvFmkLD_jLOydamPnFoDT0C5TQG5Ijz5oWuiuhzkvULsyF8r3-OSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIKfW2IfXpUq830guA0ypr7Wuw1wuV8oV-6TSWgZrdp-MEdRqGJBefeOgewpx0im51noqwAFtJ8YyJxITx30LhaRHnDDfZKxydz9Jw9Md8uu&lib=M3LRR-603ancxhucPt5UpQsz3i_--WCnU",
})