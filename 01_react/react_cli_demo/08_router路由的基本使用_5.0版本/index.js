//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
//引入路由器
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
//引入App
import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <BrowserRouter><App /></BrowserRouter> */}
        <HashRouter><App /></HashRouter>
    </React.StrictMode>
)

//旧版本写法
//import ReactDOM from 'react-dom'
//ReactDOM.render(<App/>,document.getElementById('root'))