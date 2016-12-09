/**
 * Created by shenjj on 2016/12/5.
 */

import React from 'react';
import {Row, Col, AutoComplete, Card, Select} from 'antd';
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
            inputValue: ""
        }
    }

    handleChange(value) {
        let url = findCityByName(value, lang, true);
        console.log("input = " + value);
        // console.log("start handle");
        fetch(url)
            .then(
                (response) => response.json()
            ).then(
            (json) => {
                mCityBean = json;
                // console.dir(JSON.stringify(mCityBean));
                if (cityBean.metadata.status_code == 200) {
                    this.setState({
                        addressList: mCityBean.addresses,
                        inputValue: value
                    });
                } else {
                    this.setState({
                        addressList: null,
                        inputValue: null
                    });
                }
            }
        ).catch(
            (ex) => {
                console.error('parsing failed', ex);
                // this.setState({
                //     addressList: null,
                //     inputValue: ""
                // });
            });
        // console.log("done handle");
    }

    onSelect(value) {
        console.log('onSelect', value);
    }

    render() {
        console.log("start render");
        // console.log(JSON.stringify(this.state.addressList));
        // let addressOption = new Array();
        // if (null != this.state.addressList) {
        //     for (let i = 0; i < this.state.addressList.length; i++) {
        //         let addressBean = this.state.addressList[i];
        //         console.log(JSON.stringify(addressBean));
        //         let item = <AutoComplete.Option
        //             key={addressBean.latitude + " " + addressBean.longitude}>
        //             {addressBean.address}
        //         </AutoComplete.Option>;
        //         addressOption.push(item);
        //     }
        // }

        let addressOption = new Array();
        if (null != this.state.addressList) {
            addressOption = this.state.addressList.map(
                (addressBean) => {
                    console.dir(JSON.stringify(addressBean));
                    return <AutoComplete.Option
                        key={addressBean.latitude + " " + addressBean.longitude}>
                        {addressBean.address}
                    </AutoComplete.Option>;
                }
            );
        }
        // console.log("option size=" + addressOption.length);
        return (
            <div>
                <Row type="flex" align="middle" justify="space-around">
                    <Col lg={4} md={6} sm={24}>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Col>
                    <Col lg={20} md={18} sm={17}>
                        <AutoComplete
                            combobox
                            filterOption={false}
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
        );
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
            return <AutoComplete.Option key={email}>{email}</AutoComplete.Option>;
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