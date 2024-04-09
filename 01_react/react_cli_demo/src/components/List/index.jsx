import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const {isFirst,isLoading,err,users} = this.props
        return (
            
            <div className="row">
                {
                    isFirst?<h2>请输入关键字点击搜索</h2>:
                    isLoading?<h2>Loading.........</h2>:
                    err?<h2 style={{color:"red"}}>{err}</h2>:
                    users.map((item)=>{
                        return <div className="card" key={item.id}>
                        <a rel ="noreferrer" href={item.html_url} target="_blank">
                            <img alt="head_portrait" src={item.avatar_url} style={{ width: '100px' }} />
                        </a>
                        <p className="card-text">{item.login}</p>
                    </div>
                    })
                }
            </div>
        )
    }
}
