/**
 * Created by shenjj on 2016/12/9.
 */
import React from 'react';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import {forcastHourlyWeatherUrl, getHourlyIcon} from  '../Utils.js'
// import uri from '../../res/drawable-hdpi/mini_icons_sunny_h.png';

const defStyle = {
    marginRight: '100px',
    marginLeft: '100px',
    marginTop: '20px',
    marginBottom: '20px'
};

// const uri='../../res/drawable-hdpi/mini_icons_sunny_h.png';
// let iconUri = require(uri);
// let uri = require('../../res/drawable-hdpi/mini_icons_sunny_h.png');

let mLatitude;
let mLongitude;

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
                let mHourlyWeatherBean = json;
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

    formatTime(time) {
        time = time.substring(11, 16);
        return time;
    }

    getIconById(iconId) {
        let iconUri = getHourlyIcon(iconId);
        console.log("iconUri=" + iconUri);
        return iconUri;
    }

    render() {
        if (mLatitude != this.props.latitude && mLongitude != this.props.longitude) {
            mLatitude = this.props.latitude;
            mLongitude = this.props.longitude;
            this.getHourlyWeather();
        }
        if (null != this.state.hourlyWeatherBean) {
            let forcastList = this.state.hourlyWeatherBean.forecasts;
            let focastItemList = forcastList.map(
                (forecastItem) => {
                    return <Col lg={1} md={3} sm={6} key={forecastItem.num}>
                        <div>
                            {this.formatTime(forecastItem.fcst_valid_local)}
                        </div>
                        <img src={this.getIconById(forecastItem.icon_code)}/>
                        <div>
                            {forecastItem.temp}
                        </div>
                    </Col>
                }
            );
            return (
                <Card style={defStyle}>
                    <Row type="flex" align="middle" justify="space-around">
                        {focastItemList}
                    </Row>
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