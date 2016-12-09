/**
 * Created by shenjj on 2016/12/9.
 */
import React from 'react';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import {forecastDailyWeatherUrl} from  '../Utils.js'

const defStyle = {
    marginRight: '100px',
    marginLeft: '100px',
    marginTop: '20px',
    marginBottom: '20px'
};

let mLatitude;
let mLongitude;


class DailyWeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyWeatherBean: null
        }
    }

    getDailyWeather() {
        let url = forecastDailyWeatherUrl(mLatitude, mLongitude);
        fetch(url)
            .then(
                (response) => response.json()
            ).then(
            (json) => {
                let mDailyWeatherBean = json;
                console.dir(JSON.stringify(json));
                if (mDailyWeatherBean.metadata.status_code == 200) {
                    this.setState({
                        dailyWeatherBean: mDailyWeatherBean
                    });
                } else {
                    this.setState({
                        dailyWeatherBean: null
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
            this.getDailyWeather();
        }

        if (null != this.state.dailyWeatherBean) {
            let dailyList = this.state.dailyWeatherBean.forecasts;
            let dailyItemList = dailyList.map(
                (dailyItem) => {
                    return <li key={dailyItem.num}>
                        <div>
                            {"High "+dailyItem.max_temp}
                        </div>
                        <div>
                            {"Low "+dailyItem.min_temp}
                        </div>
                    </li>
                }
            );
            return (
                <Card style={defStyle}>
                    <ul>
                        {dailyItemList}
                    </ul>
                </Card>
            )
        } else {
            return (<div></div>)
        }

    }
}
export default DailyWeatherComponent;