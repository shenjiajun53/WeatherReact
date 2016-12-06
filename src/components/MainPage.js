/**
 * Created by shenjj on 2016/12/5.
 */

import React from 'react';
import {Row, Col, AutoComplete, Card} from 'antd';
import CurrentWeatherCard from './CurrentWeatherCard'
import logo from '../logo.svg';
import 'whatwg-fetch'
import {findCityByName, cityBean} from  '../Utils.js'

const lang = "zh-CN";
let mCityBean = cityBean;

class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addressList: [],
        }
    }

    handleChange(value) {
        let url = findCityByName(value, lang, true);
        // console.log(url);
        // console.log("start handle");
        fetch(url)
            .then(function (response) {
                return response.json()
            }).then(
            (json) => {
                mCityBean = json;
                console.log(mCityBean);
                this.setState({
                    addressList: mCityBean.addresses
                });
            }
        );
        // console.log("done handle");
    }

    onSelect(value) {
        console.log('onSelect', value);
    }

    render() {
        // console.log("start render");
        const addressOption = this.state.addressList.map(
            (addressBean) => {
                console.log(addressBean.latitude + " " + addressBean.longitude + " " + addressBean.address);
                return <AutoComplete.Option
                    key={addressBean.address }>
                    {addressBean.address}
                </AutoComplete.Option>;
            }
        );
        return (
            <div>
                <Row type="flex" align="middle" justify="space-around">
                    <Col lg={4} md={6} sm={24}>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Col>
                    <Col lg={20} md={18} sm={17}>
                        <AutoComplete
                            style={{width: 300}}
                            onSelect={(value) => this.onSelect(value)}
                            onChange={(value) => this.handleChange(value)}
                            placeholder="输入城市名"
                        >
                            {addressOption}
                        </AutoComplete>
                    </Col>
                </Row>
            </div>
        )
            ;
    }
}

class TitleBar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        }
    }

    handleChange(value) {
        let result2;
        if (!value || value.indexOf('@') >= 0) {
            result2 = [];
        } else {
            result2 = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({
            result: result2
        });
    }

    render() {
        // const result = this.state.result;
        const children = this.state.result.map((email) => {
            return <Option key={email}>{email}</Option>;
        });
        return (
            <AutoComplete
                style={{width: 200}}
                onChange={(value) => this.handleChange(value)}
                placeholder="input here"
            >
                {children}
            </AutoComplete>
        );
    }
}

// class TitleBar3 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataSource: [],
//         }
//     }
//
//     handleChange(value) {
//         this.setState({
//             dataSource: !value ? [] : [
//                 value,
//                 value + value,
//                 value + value + value,
//             ],
//         });
//     }
//     render() {
//         const { dataSource } = this.state;
//         return (
//             <AutoComplete
//                 dataSource={dataSource}
//                 style={{ width: 200 }}
//                 onSelect={(value) => this.onSelect(value)}
//                 onChange={(value) => this.handleChange(value)}
//                 placeholder="input here"
//             />
//         );
//     }
// }

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleBar/>
                <CurrentWeatherCard/>
            </div>
        );
    }
}

export default MainComponent;