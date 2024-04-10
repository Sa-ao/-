import React, { Component } from 'react'
import axios from 'axios'

export default class Seach extends Component {
    search = () => {
        //获取用户输入，连续结构赋值,并重命名的写法
        const { inpValue: { value: keyWord } } = this
        console.log(keyWord)

        //const {inpValue:{value}} = this
        //console.log(value)
        this.props.updateAppState({
            isLoading:true,isFirst:false,err:''
        })
        axios.get(`/api1/search/users?q=${keyWord}`).then((response) => {
            console.log("请求成功", response.data)
            //进行更新状态
            this.props.updateAppState({
                isLoading:false,users:response.data.items
            })
        }, (error) => {
            console.log("请求失败", error)
            this.props.updateAppState({
                isLoading:false,users:[],err:error.message
            })
        })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.inpValue = c} type="text" placeholder="输入关键字进行搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
