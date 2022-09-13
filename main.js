const baseAPI = "https://thronesapi.com/api/v2/Characters"
fetch(baseAPI)
.then (res => res.json())
.then (resJson => console.log(resJson))
.catch(err => console.log(err))