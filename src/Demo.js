/**
 * Created by shenjj on 2016/12/14.
 */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Row, Col, AutoComplete, Button} from 'antd';
import TimerComponent from './components/TimerComponent'
import ListComponent from './components/ListComponent'
import SyncInputGroup from './components/SyncInputGroup'
import MainComponent from './components/MainPage'

let timerComponent = null;
class Demo extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        timerComponent = this.refs.timerComponent;
    }

    onButtonClick() {
        if (null != timerComponent) {
            timerComponent.toggleTimer();
        } else {
            console.log("timerComponent=null");
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button onClick={() => this.onButtonClick()}>Toggle时间</Button>
                <TimerComponent ref="timerComponent"/>
                <ListComponent/>
                <SyncInputGroup/>


                <MainComponent/>
            </div>
        );
    }
}

export default Demo;
