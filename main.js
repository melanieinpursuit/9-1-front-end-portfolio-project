const baseAPI = 'https://anapioficeandfire.com/api/characters/'

fetch(baseAPI)
.then (res => res.json())
.then (resJson => console.log(resJson))
.catch(err => console.log(err))