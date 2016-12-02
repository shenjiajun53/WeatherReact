/**
 * Created by Administrator on 2016/11/27.
 */


import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Card} from 'antd';
import 'antd/dist/antd.css';

const defStyle = {
    marginRight: '100px',
    marginLeft: '100px',
    marginTop: '20px',
    marginBottom: '20px'
};

class CurrentWeatherCard extends React.Component {

    render() {
        return (
            <Card className="card-content" style={defStyle}>
                <div className="valign-wrapper" id="current_top">
                    <div id="current_temp" className="col-md-3  text-center valign">14℃</div>
                    <div className="col-md-9 valign">
                        <span id="current_phrase">Cloundy</span>
                        <br/>
                        <span id="city_name">Shanghai</span>
                    </div>
                </div>

                <div className="card_line"></div>

                <div className=" grey lighten-3">
                    <div className="row no_margin">
                        <div id="temper_high_div" className="container_margin col-md-3 col-xs-6 text-center">
                            <div>高</div>
                            <img src="./res/drawable-hdpi/currnet_high_b.png"/>
                            <div id="temp_high_value"></div>
                        </div>
                        <div id="temper_low_div" className="container_margin col-md-3 col-xs-6 text-center">
                            <div>低</div>
                            <img src="./res/drawable-hdpi/currnet_low_b.png"/>
                            <div id="temper_low_value"></div>
                        </div>
                        <div id="precipitation_div" className="container_margin col-md-3 col-xs-6 text-center">
                            <div>降水</div>
                            <img src="./res/drawable-hdpi/currnet_preciptation_b.png"/>
                            <div id="precipitation_value"></div>
                        </div>
                        <div id="humidity_div" className="container_margin col-md-3 col-xs-6 text-center">
                            <div>湿度</div>
                            <img src="res/drawable-hdpi/currnet_humidity_b.png"/>
                            <div id="humidity_value"></div>
                        </div>
                    </div>

                    <div className="row no_margin">
                        <div id="visibility_div" className="container_margin col-md-3 col-xs-6 text-center">
                            <div>可见度</div>
                            <img src="res/drawable-hdpi/currnet_visibility_b.png"/>
                            <div id="visibility_value"></div>
                        </div>
                        <div id="wind_div" className="container_margin col-md-3 col-xs-6 text-center">
                            <div>风速</div>
                            <img src="res/drawable-hdpi/currnet_wind_b.png"/>
                            <div id="wind_value"></div>
                        </div>
                        <div id="pressure_div" className="container_margin col-md-3 col-xs-6 text-center">
                            <div>气压</div>
                            <img src="res/drawable-hdpi/currnet_pressure_b.png"/>
                            <div id="pressure_value"></div>
                        </div>
                        <div id="uv_index_div" className="container_margin col-md-3 col-xs-6 text-center">
                            <div>紫外线指数</div>
                            <img src="res/drawable-hdpi/currnet_uv_b.png"/>
                            <div id="uv_index_value"></div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CurrentWeatherCard;
