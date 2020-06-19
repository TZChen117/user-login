function checkUser(email, password) {
// 定義使用者資料
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
 ]

 // 比對登入資料
  const userInfo = users.find(user => {
    return user.email === email // 先比對email
  })

  if (userInfo.email !== email || userInfo.password !== password) { 
    return 'fail'// email or password比對失敗
  } else {
    return userInfo // email & password 比對成功
  } 
}

 module.exports = checkUser