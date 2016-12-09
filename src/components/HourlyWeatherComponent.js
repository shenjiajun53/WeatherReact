/**
 * Created by shenjj on 2016/12/9.
 */
import React from 'react';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import {forcastHourlyWeatherUrl, hourlyWeatherBean} from  '../Utils.js'

const defStyle = {
    marginRight: '100px',
    marginLeft: '100px',
    marginTop: '20px',
    marginBottom: '20px'
};

let mLatitude;
let mLongitude;
let mHourlyWeatherBean;

class HourlyWeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hourlyWeatherBean: null
        }
    }

    getHourlyWeather() {
        let url = forcastHourlyWeatherUrl(mLatitude, mLongitude);
        fetch(url)
            .then(
                (response) => response.json()
            ).then(
            (json) => {
                mHourlyWeatherBean = json;
                console.dir(JSON.stringify(json));
                if (mHourlyWeatherBean.metadata.status_code == 200) {
                    this.setState({
                        hourlyWeatherBean: mHourlyWeatherBean
                    });
                } else {
                    this.setState({
                        hourlyWeatherBean: null
                    });
                }
            }
        ).catch(
            (ex) => {
                console.error('parsing failed', ex);
            });
    }

    render() {
        if (mLatitude != this.props.latitude && mLongitude != this.props.longitude) {
            mLatitude = this.props.latitude;
            mLongitude = this.props.longitude;
            this.getHourlyWeather();
        }
        if (null != this.state.hourlyWeatherBean) {
            return (
                <Card style={defStyle}>

                </Card>
            )
        } else {
            return (
                <div>
                </div>
            )
        }

    }
}
export default HourlyWeatherComponent;