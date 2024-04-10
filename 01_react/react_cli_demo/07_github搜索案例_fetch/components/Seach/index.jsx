import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Seach extends Component {
    search = async () => {
        //获取用户输入，连续结构赋值,并重命名的写法
        const { inpValue: { value: keyWord } } = this

        //const {inpValue:{value}} = this
        //console.log(value)
        //发布消息
        PubSub.publish('updateList', {
            isLoading: true, isFirst: false, err: ''
        })
        /*axios.get(`/api1/search/users?q=${keyWord}`).then((response) => {
            console.log("请求成功", response.data)
            //进行更新状态
            PubSub.publish('updateList',{
                isLoading:false,users:response.data.items
            })
        }, (error) => {
            console.log("请求失败", error)
            PubSub.publish('updateList',{
                isLoading:false,users:[],err:error.message
            })
        }) #endorigin*/

        
        //使用fetch未优化写法
        /*fetch(`/api1/search/users?q=${keyWord}`).then(
            response => {
                console.log("链接服务器成功", response, response.json)
                return response.json()
            },
            error => {
                return new Promise()
            }).then(
                response => {
                    //进行更新状态
                    console.log("请求成功", response)
                    PubSub.publish('updateList', {
                        isLoading: false, users: response.items
                    })
                },
                error => {
                    console.log("请求失败", error)
                    PubSub.publish('updateList', {
                        isLoading: false, users: [], err: error.message
                    })
                }
            ) */
        //优化写法
        try {
            const response = await fetch(`/api1/search/users?q=${keyWord}`);
            const data = await response.json();
            //进行更新状态
            console.log("请求成功", data)
            PubSub.publish('updateList', {
                isLoading: false, users: data.items
            })
        } catch (error) {
            console.log("请求失败", error)
            PubSub.publish('updateList', {
                isLoading: false, users: [], err: error.message
            })
        }


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
