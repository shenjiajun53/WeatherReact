/**
 * Created by Administrator on 2016/11/27.
 */


import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

// import hdpi from '../../res/drawable-hdpi';
const high=require("../../res/drawable-hdpi/currnet_high_b.png");

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
                    <Row >
                        <Col span={6} id="temper_high_div">
                            <div>高</div>
                            <img src="../../res/drawable-hdpi/currnet_high_b.png"/>
                            <div id="temp_high_value"></div>
                        </Col>
                        <Col span={6} id="temper_low_div">
                            <div>低</div>
                            <img src={require("../../res/drawable-hdpi/currnet_high_b.png")}/>
                            <div id="temper_low_value"></div>
                        </Col>
                        <Col span={6} id="precipitation_div">
                            <div>降水</div>
                            <img src="./res/drawable-hdpi/currnet_preciptation_b.png"/>
                            <div id="precipitation_value"></div>
                        </Col>
                        <Col span={6} id="humidity_div">
                            <div>湿度</div>
                            <img src="res/drawable-hdpi/currnet_humidity_b.png"/>
                            <div id="humidity_value"></div>
                        </Col>
                    </Row>

                    <Row className="row no_margin">
                        <Col span={6} id="visibility_div">
                            <div>可见度</div>
                            <img src="res/drawable-hdpi/currnet_visibility_b.png"/>
                            <div id="visibility_value"></div>
                        </Col>
                        <Col span={6} id="wind_div">
                            <div>风速</div>
                            <img src="res/drawable-hdpi/currnet_wind_b.png"/>
                            <div id="wind_value"></div>
                        </Col>
                        <Col span={6} id="pressure_div">
                            <div>气压</div>
                            <img src="res/drawable-hdpi/currnet_pressure_b.png"/>
                            <div id="pressure_value"></div>
                        </Col>
                        <Col span={6} id="uv_index_div">
                            <div>紫外线指数</div>
                            <img src="res/drawable-hdpi/currnet_uv_b.png"/>
                            <div id="uv_index_value"></div>
                        </Col>
                    </Row>


                </div>
            </Card>
        )
    }
}

export default CurrentWeatherCard;
