/**
 * Created by shenjiajun on 2016/3/21.
 */
var APIKEY = "0efd9b4f14275d37789a2f57e5101852";

const lang = "zh-CN";

function buildUrl(url, parameters) {
    var qs = "";
    for (var key in parameters) {
        var value = parameters[key];
        qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); //chop off last "&"
        url = url + "?" + qs;
    }
    return url;
}

var iconDailyMap = {

    28: "res/drawable-hdpi/mini_icons_cloundy.png",
    30: "res/drawable-hdpi/mini_icons_cloundy.png",

    9: "res/drawable-hdpi/mini_icons_drizzle.png",
    11: "res/drawable-hdpi/mini_icons_drizzle.png",
    45: "res/drawable-hdpi/mini_icons_drizzle.png",
    46: "res/drawable-hdpi/mini_icons_drizzle.png",

    19: "res/drawable-hdpi/mini_icons_fog.png",
    20: "res/drawable-hdpi/mini_icons_fog.png",
    21: "res/drawable-hdpi/mini_icons_fog.png",
    22: "res/drawable-hdpi/mini_icons_fog.png",

    17: "res/drawable-hdpi/mini_icons_hail.png",

    3: "res/drawable-hdpi/mini_icons_lightning.png",
    4: "res/drawable-hdpi/mini_icons_lightning.png",

    31: "res/drawable-hdpi/mini_icons_night_clear.png",
    33: "res/drawable-hdpi/mini_icons_night_clear.png",

    27: "res/drawable-hdpi/mini_icons_night_clound.png",
    29: "res/drawable-hdpi/mini_icons_night_clound.png",

    26: "res/drawable-hdpi/mini_icons_overcast.png",

    12: "res/drawable-hdpi/mini_icons_rain.png",
    40: "res/drawable-hdpi/mini_icons_rain.png",

    5: "res/drawable-hdpi/mini_icons_rain_snow.png",
    6: "res/drawable-hdpi/mini_icons_rain_snow.png",
    7: "res/drawable-hdpi/mini_icons_rain_snow.png",
    8: "res/drawable-hdpi/mini_icons_rain_snow.png",
    10: "res/drawable-hdpi/mini_icons_rain_snow.png",
    18: "res/drawable-hdpi/mini_icons_rain_snow.png",
    35: "res/drawable-hdpi/mini_icons_rain_snow.png",


    13: "res/drawable-hdpi/mini_icons_snow.png",
    14: "res/drawable-hdpi/mini_icons_snow.png",
    15: "res/drawable-hdpi/mini_icons_snow.png",
    8: "res/drawable-hdpi/mini_icons_snow.png",
    16: "res/drawable-hdpi/mini_icons_snow.png",
    41: "res/drawable-hdpi/mini_icons_snow.png",
    42: "res/drawable-hdpi/mini_icons_snow.png",
    43: "res/drawable-hdpi/mini_icons_snow.png",

    32: "res/drawable-hdpi/mini_icons_sunny.png",
    34: "res/drawable-hdpi/mini_icons_sunny.png",
    44: "res/drawable-hdpi/mini_icons_sunny.png",

    37: "res/drawable-hdpi/mini_icons_sunny_lightning.png",
    38: "res/drawable-hdpi/mini_icons_sunny_lightning.png",
    47: "res/drawable-hdpi/mini_icons_sunny_lightning.png",

    39: "res/drawable-hdpi/mini_icons_sunny_rain.png",

    0: "res/drawable-hdpi/mini_icons_wind.png",
    1: "res/drawable-hdpi/mini_icons_wind.png",
    2: "res/drawable-hdpi/mini_icons_wind.png",
    23: "res/drawable-hdpi/mini_icons_wind.png",
    24: "res/drawable-hdpi/mini_icons_wind.png",

    25: "res/drawable-hdpi/mini_icons_cold.png",

    36: "res/drawable-hdpi/mini_icons_hot.png",
};

function getDailyIcon(icon) {
    if (iconDailyMap[icon] != null) {
        return iconDailyMap[icon];
    } else {
        return "res/drawable-hdpi/mini_icons_sunny.png";
    }
}

var iconHourlyMap = {

    28: "res/drawable-hdpi/mini_icons_cloundy_h.png",
    30: "res/drawable-hdpi/mini_icons_cloundy_h.png",

    9: "res/drawable-hdpi/mini_icons_drizzle_h.png",
    11: "res/drawable-hdpi/mini_icons_drizzle_h.png",
    45: "res/drawable-hdpi/mini_icons_drizzle_h.png",
    46: "res/drawable-hdpi/mini_icons_drizzle_h.png",

    19: "res/drawable-hdpi/mini_icons_fog_h.png",
    20: "res/drawable-hdpi/mini_icons_fog_h.png",
    21: "res/drawable-hdpi/mini_icons_fog_h.png",
    22: "res/drawable-hdpi/mini_icons_fog_h.png",

    17: "res/drawable-hdpi/mini_icons_hail_h.png",

    3: "res/drawable-hdpi/mini_icons_lightning_h.png",
    4: "res/drawable-hdpi/mini_icons_lightning_h.png",

    31: "res/drawable-hdpi/mini_icons_night_clear_h.png",
    33: "res/drawable-hdpi/mini_icons_night_clear_h.png",

    27: "res/drawable-hdpi/mini_icons_night_clound_h.png",
    29: "res/drawable-hdpi/mini_icons_night_clound_h.png",

    26: "res/drawable-hdpi/mini_icons_overcast_h.png",

    12: "res/drawable-hdpi/mini_icons_rain_h.png",
    40: "res/drawable-hdpi/mini_icons_rain_h.png",

    5: "res/drawable-hdpi/mini_icons_rain_snow_h.png",
    6: "res/drawable-hdpi/mini_icons_rain_snow_h.png",
    7: "res/drawable-hdpi/mini_icons_rain_snow_h.png",
    8: "res/drawable-hdpi/mini_icons_rain_snow_h.png",
    10: "res/drawable-hdpi/mini_icons_rain_snow_h.png",
    18: "res/drawable-hdpi/mini_icons_rain_snow_h.png",
    35: "res/drawable-hdpi/mini_icons_rain_snow_h.png",


    13: "res/drawable-hdpi/mini_icons_snow_h.png",
    14: "res/drawable-hdpi/mini_icons_snow_h.png",
    15: "res/drawable-hdpi/mini_icons_snow_h.png",
    8: "res/drawable-hdpi/mini_icons_snow_h.png",
    16: "res/drawable-hdpi/mini_icons_snow_h.png",
    41: "res/drawable-hdpi/mini_icons_snow_h.png",
    42: "res/drawable-hdpi/mini_icons_snow_h.png",
    43: "res/drawable-hdpi/mini_icons_snow_h.png",

    32: "res/drawable-hdpi/mini_icons_sunny_h.png",
    34: "res/drawable-hdpi/mini_icons_sunny_h.png",
    44: "res/drawable-hdpi/mini_icons_sunny_h.png",

    37: "res/drawable-hdpi/mini_icons_sunny_lightning_h.png",
    38: "res/drawable-hdpi/mini_icons_sunny_lightning_h.png",
    47: "res/drawable-hdpi/mini_icons_sunny_lightning_h.png",

    39: "res/drawable-hdpi/mini_icons_sunny_rain_h.png",

    0: "res/drawable-hdpi/mini_icons_wind_h.png",
    1: "res/drawable-hdpi/mini_icons_wind_h.png",
    2: "res/drawable-hdpi/mini_icons_wind_h.png",
    23: "res/drawable-hdpi/mini_icons_wind_h.png",
    24: "res/drawable-hdpi/mini_icons_wind_h.png",

    25: "res/drawable-hdpi/mini_icons_cold_h.png",

    36: "res/drawable-hdpi/mini_icons_hot_h.png",
};

function getHourlyIcon(icon) {
    if (iconHourlyMap[icon] != null) {
        return iconHourlyMap[icon];
    } else {
        return "res/drawable-hdpi/mini_icons_sunny_h.png";
    }
}


var backgoundImageMap = {
    27: "res/drawable-xxhdpi/bg_clear.png",
    29: "res/drawable-xxhdpi/bg_clear.png",
    31: "res/drawable-xxhdpi/bg_clear.png",
    33: "res/drawable-xxhdpi/bg_clear.png",

    26: "res/drawable-xxhdpi/bg_cloudy.png",
    28: "res/drawable-xxhdpi/bg_cloudy.png",
    30: "res/drawable-xxhdpi/bg_cloudy.png",
    34: "res/drawable-xxhdpi/bg_cloudy.png",

    19: "res/drawable-xxhdpi/bg_fog.png",
    20: "res/drawable-xxhdpi/bg_fog.png",
    21: "res/drawable-xxhdpi/bg_fog.png",
    22: "res/drawable-xxhdpi/bg_fog.png",
    23: "res/drawable-xxhdpi/bg_fog.png",
    24: "res/drawable-xxhdpi/bg_fog.png",

    25: "res/drawable-xxhdpi/bg_frost.png",

    4: "res/drawable-xxhdpi/bg_rainy.jpg",
    5: "res/drawable-xxhdpi/bg_rainy.jpg",
    6: "res/drawable-xxhdpi/bg_rainy.jpg",
    8: "res/drawable-xxhdpi/bg_rainy.jpg",
    9: "res/drawable-xxhdpi/bg_rainy.jpg",
    10: "res/drawable-xxhdpi/bg_rainy.jpg",
    11: "res/drawable-xxhdpi/bg_rainy.jpg",
    12: "res/drawable-xxhdpi/bg_rainy.jpg",
    40: "res/drawable-xxhdpi/bg_rainy.jpg",

    7: "res/drawable-xxhdpi/bg_snow.png",
    13: "res/drawable-xxhdpi/bg_snow.png",
    14: "res/drawable-xxhdpi/bg_snow.png",
    15: "res/drawable-xxhdpi/bg_snow.png",
    16: "res/drawable-xxhdpi/bg_snow.png",
    17: "res/drawable-xxhdpi/bg_snow.png",
    18: "res/drawable-xxhdpi/bg_snow.png",
    42: "res/drawable-xxhdpi/bg_snow.png",

    38: "res/drawable-xxhdpi/bg_storm.png",
    47: "res/drawable-xxhdpi/bg_storm.png",

    32: "res/drawable-xxhdpi/bg_sunny.jpg"
};

function getBackgroundImage(id) {
    if (backgoundImageMap[id] != null) {
        return backgoundImageMap[id];
    } else {
        return "res/drawable-xxhdpi/bg_sunny.jpg";
    }
}

var backgoundColorMap = {
    27: "#202959",
    29: "#202959",
    31: "#202959",
    33: "#202959",

    26: "#2193f0",
    28: "#2193f0",
    30: "#2193f0",
    34: "#2193f0",

    19: "#37474f",
    20: "#37474f",
    21: "#37474f",
    22: "#37474f",
    23: "#37474f",
    24: "#37474f",

    25: "#37474f",

    4: "#37474f",
    5: "#37474f",
    6: "#37474f",
    8: "#37474f",
    9: "#37474f",
    10: "#37474f",
    11: "#37474f",
    12: "#37474f",
    40: "#37474f",

    7: "#37474f",
    13: "#37474f",
    14: "#37474f",
    15: "#37474f",
    16: "#37474f",
    17: "#37474f",
    18: "#37474f",
    42: "#37474f",

    38: "#009688",
    47: "#009688",

    32: "#2193f0"
};

function getBackgroundColor(id) {
    if (backgoundColorMap[id] != null) {
        return backgoundColorMap[id];
    } else {
        return "#2193f0";
    }
}


export function currentWeatherUrl(lantitude, longitude) {
    var url = "http://api.weather.com/v1/" + "geocode/" + lantitude + "/" + longitude + "/" + "observations/current.json?apiKey=" + APIKEY + "&language=" + lang + "&units=m";
    return encodeURI(url);
}

export function forcastHourlyWeatherUrl(lantitude, longitude) {
    var url = "http://api.weather.com/v1/" + "geocode/" + lantitude + "/" + longitude + "/" + "forecast/hourly/24hour.json?apiKey=" + APIKEY + "&language=" + lang + "&units=m";
    return encodeURI(url);
}

export function forecastDailyWeatherUrl(lantitude, longitude) {
    var url = "http://api.weather.com/v1/" + "geocode/" + lantitude + "/" + longitude + "/" + "forecast/daily/5day.json?apiKey=" + APIKEY + "&language=" + lang + "&units=m";
    return encodeURI(url);
}


export function findCityByGeoLocation(geolocation) {
    var url = "http://api.weather.com/v2/location?" + "geocode=" + geolocation + "&language=" + lang + "&format=" + "json" + "&apiKey=" + APIKEY;
    return encodeURI(url);
}

export function findCityByName(name) {
    var url = "http://api.weather.com/v2/location?" + "address=" + name + "&language=" + lang + "&format=" + "json" + "&apiKey=" + APIKEY;
    var temp = "http://api.weather.com/v2/location?address=%E4%B8%8A%E6%B5%B7&language=zh-CN&format=json&apiKey=0efd9b4f14275d37789a2f57e5101852";
    return encodeURI(url);
}


export var cityBean = {
    "metadata": {
        "version": "v2",
        "transaction_id": "1458544289748:-171226551",
        "generated_time": 1458544289,
        "total_cache_time_secs": 86400,
        "status_code": 200,
        "language": "zh-CN",
        "latitude": 31.22,
        "longitude": 121.54,
        "format": "json"
    },
    "addresses": [{
        "latitude": 31.22,
        "longitude": 121.54,
        "address": "丁香路",
        "locality": "浦东新区",
        "admin_district": "上海市",
        "country": "中华人民共和国",
        "country_code": "CN"
    }]
};

export var addressBean = {
    "latitude": 31.22,
    "longitude": 121.54,
    "address": "丁香路",
    "locality": "浦东新区",
    "admin_district": "上海市",
    "country": "中华人民共和国",
    "country_code": "CN"
};

export var currentWeatherBean = {
    "metadata": {
        "language": "zh-CN",
        "transaction_id": "1458546612249:-1457749884",
        "version": "1",
        "latitude": 31.22,
        "longitude": 121.54,
        "units": "m",
        "expire_time_gmt": 1458547212,
        "status_code": 200
    },
    "observation": {
        "class": "observation",
        "expire_time_gmt": 1458547212,
        "obs_time": 1458545400,
        "obs_time_local": "2016-03-21T15:30:00+0800",
        "wdir": 110,
        "icon_code": 34,                           //icon
        "icon_extd": 3400,
        "sunrise": "2016-03-21T05:56:33+0800",
        "sunset": "2016-03-21T18:05:54+0800",
        "day_ind": "D",
        "uv_index": 3,                          //uv_index
        "uv_warning": 0,
        "wxman": "wx1000",
        "obs_qualifier_code": null,
        "ptend_code": 2,
        "dow": "星期一",
        "wdir_cardinal": "東南偏東風",
        "uv_desc": "中等",                        //uv_desc
        "phrase_12char": null,
        "phrase_22char": null,
        "phrase_32char": "晴朗",
        "ptend_desc": "降温",
        "sky_cover": "晴朗",
        "clds": "CLR",
        "obs_qualifier_severity": null,
        "vocal_key": "OT59:OX3400",
        "metric": {
            "wspd": 14,                   //windSpeed
            "gust": null,
            "vis": 9.99,                  //visibility
            "mslp": 1021.0,             //pressure
            "altimeter": 1021.0,
            "temp": 15,
            "dewpt": 6,
            "rh": 55,                    //humidity
            "wc": 15,
            "hi": 15,
            "temp_change_24hour": -20,
            "temp_max_24hour": 17,
            "temp_min_24hour": 8,
            "pchange": -1.02,
            "feels_like": 15,              //realfeel
            "snow_1hour": 0.0,
            "snow_6hour": 0.0,
            "snow_24hour": 0.0,
            "snow_mtd": null,
            "snow_season": null,
            "snow_ytd": null,
            "snow_2day": null,
            "snow_3day": null,
            "snow_7day": null,
            "ceiling": null,
            "precip_1hour": 0.0,
            "precip_6hour": 0.0,
            "precip_24hour": 0.0,               //precipitation
            "precip_mtd": null,
            "precip_ytd": null,
            "precip_2day": null,
            "precip_3day": null,
            "precip_7day": null,
            "obs_qualifier_100char": null,
            "obs_qualifier_50char": null,
            "obs_qualifier_32char": null
        }
    }
};

export var dailyWeatherBean = {
    "metadata": {
        "language": "zh-CN",
        "transaction_id": "1458701243206:-1716831011",
        "version": "1",
        "latitude": 31.22,
        "longitude": 121.54,
        "units": "m",
        "expire_time_gmt": 1458702884,
        "status_code": 200
    },
    "forecasts": [{
        "class": "fod_long_range_daily",
        "expire_time_gmt": 1458702884,
        "fcst_valid": 1458687600,
        "fcst_valid_local": "2016-03-23T07:00:00+0800",
        "num": 1,
        "max_temp": 13,
        "min_temp": 6,
        "torcon": null,
        "stormcon": null,
        "blurb": null,
        "blurb_author": null,
        "lunar_phase_day": 14,
        "dow": "星期三",
        "lunar_phase": "满月",
        "lunar_phase_code": "F",
        "sunrise": "2016-03-23T05:54:05+0800",
        "sunset": "2016-03-23T18:07:12+0800",
        "moonrise": "2016-03-23T17:59:03+0800",
        "moonset": "2016-03-23T05:41:17+0800",
        "qualifier_code": null,
        "qualifier": null,
        "narrative": "阴。 最高 12 到 14ºC，最低 5 到 7ºC。",
        "qpf": 0.0,
        "snow_qpf": 0.0,
        "snow_range": "",
        "snow_phrase": "",
        "snow_code": "",
        "night": {
            "fcst_valid": 1458730800,
            "fcst_valid_local": "2016-03-23T19:00:00+0800",
            "day_ind": "N",
            "thunder_enum": 0,
            "daypart_name": "今天晚上",
            "long_daypart_name": "周三晚间",
            "alt_daypart_name": "今天晚上",
            "thunder_enum_phrase": null,
            "num": 2,
            "temp": 6,
            "hi": 10,
            "wc": 3,
            "pop": 0,
            "icon_extd": 2700,
            "icon_code": 27,
            "wxman": "wx1250",
            "phrase_12char": "",
            "phrase_22char": "",
            "phrase_32char": "大部分地区多云",
            "subphrase_pt1": "",
            "subphrase_pt2": "",
            "subphrase_pt3": "",
            "precip_type": "rain",
            "rh": 57,
            "wspd": 28,
            "wdir": 7,
            "wdir_cardinal": "北風",
            "clds": 67,
            "pop_phrase": "",
            "temp_phrase": "最低 6ºC。",
            "accumulation_phrase": "",
            "wind_phrase": "北風 风 25 到 40 每 km / h 。",
            "shortcast": "大部多云。",
            "narrative": "大部多云。 最低 6ºC。 北風 风 25 到 40 每 km / h 。",
            "qpf": 0.0,
            "snow_qpf": 0.0,
            "snow_range": "",
            "snow_phrase": "",
            "snow_code": "",
            "vocal_key": "D2:DA02:X3000260021:S270021:TL6:W16R05",
            "qualifier_code": null,
            "qualifier": null,
            "uv_index_raw": 0,
            "uv_index": 0,
            "uv_warning": 0,
            "uv_desc": "低",
            "golf_index": null,
            "golf_category": ""
        },
        "day": {
            "fcst_valid": 1458687600,
            "fcst_valid_local": "2016-03-23T07:00:00+0800",
            "day_ind": "D",
            "thunder_enum": 0,
            "daypart_name": "今天白天",
            "long_daypart_name": "星期三",
            "alt_daypart_name": "今天白天",
            "thunder_enum_phrase": null,
            "num": 1,
            "temp": 13,
            "hi": 13,
            "wc": 8,
            "pop": 0,
            "icon_extd": 2600,
            "icon_code": 26,
            "wxman": "wx1250",
            "phrase_12char": "",
            "phrase_22char": "",
            "phrase_32char": "多云",
            "subphrase_pt1": "",
            "subphrase_pt2": "",
            "subphrase_pt3": "",
            "precip_type": "rain",
            "rh": 57,
            "wspd": 30,
            "wdir": 21,
            "wdir_cardinal": "東北偏北風",
            "clds": 75,
            "pop_phrase": "",
            "temp_phrase": "最高 13ºC。",
            "accumulation_phrase": "",
            "wind_phrase": "東北偏北風 风 25 到 40 每 km / h 。",
            "shortcast": "阴。",
            "narrative": "阴。 最高 13ºC。 東北偏北風 风 25 到 40 每 km / h 。",
            "qpf": 0.0,
            "snow_qpf": 0.0,
            "snow_range": "",
            "snow_phrase": "",
            "snow_code": "",
            "vocal_key": "D1:DA01:X2600260011:S260011:TH13:W01R05",
            "qualifier_code": null,
            "qualifier": null,
            "uv_index_raw": 4.77,
            "uv_index": 5,
            "uv_warning": 0,
            "uv_desc": "中等",
            "golf_index": 7,
            "golf_category": "健康"
        }
    }, {
        "class": "fod_long_range_daily",
        "expire_time_gmt": 1458702884,
        "fcst_valid": 1458774000,
        "fcst_valid_local": "2016-03-24T07:00:00+0800",
        "num": 2,
        "max_temp": 11,
        "min_temp": 4,
        "torcon": null,
        "stormcon": null,
        "blurb": null,
        "blurb_author": null,
        "lunar_phase_day": 15,
        "dow": "星期四",
        "lunar_phase": "满月",
        "lunar_phase_code": "F",
        "sunrise": "2016-03-24T05:52:50+0800",
        "sunset": "2016-03-24T18:07:51+0800",
        "moonrise": "2016-03-24T18:51:06+0800",
        "moonset": "2016-03-24T06:14:01+0800",
        "qualifier_code": null,
        "qualifier": null,
        "narrative": "上午多云，下午转晴。 最高 10 到 12ºC，最低 3 到 5ºC。",
        "qpf": 0.0,
        "snow_qpf": 0.0,
        "snow_range": "",
        "snow_phrase": "",
        "snow_code": "",
        "night": {
            "fcst_valid": 1458817200,
            "fcst_valid_local": "2016-03-24T19:00:00+0800",
            "day_ind": "N",
            "thunder_enum": 0,
            "daypart_name": "明天晚上",
            "long_daypart_name": "周四晚间",
            "alt_daypart_name": "周四晚间",
            "thunder_enum_phrase": null,
            "num": 4,
            "temp": 4,
            "hi": 8,
            "wc": 3,
            "pop": 0,
            "icon_extd": 2700,
            "icon_code": 27,
            "wxman": "wx1210",
            "phrase_12char": "",
            "phrase_22char": "",
            "phrase_32char": "大部分地区多云",
            "subphrase_pt1": "",
            "subphrase_pt2": "",
            "subphrase_pt3": "",
            "precip_type": "precip",
            "rh": 64,
            "wspd": 21,
            "wdir": 340,
            "wdir_cardinal": "西北偏北風",
            "clds": 59,
            "pop_phrase": "",
            "temp_phrase": "最低 4ºC。",
            "accumulation_phrase": "",
            "wind_phrase": "西北偏北風 风 15 到 30 每 km / h 。",
            "shortcast": "大部多云。",
            "narrative": "大部多云。 最低 4ºC。 西北偏北風 风 15 到 30 每 km / h 。",
            "qpf": 0.0,
            "snow_qpf": 0.0,
            "snow_range": "",
            "snow_phrase": "",
            "snow_code": "",
            "vocal_key": "D4:DA13:X3000260041:S270041:TL4:W15R04",
            "qualifier_code": null,
            "qualifier": null,
            "uv_index_raw": 0,
            "uv_index": 0,
            "uv_warning": 0,
            "uv_desc": "低",
            "golf_index": null,
            "golf_category": ""
        },
        "day": {
            "fcst_valid": 1458774000,
            "fcst_valid_local": "2016-03-24T07:00:00+0800",
            "day_ind": "D",
            "thunder_enum": 0,
            "daypart_name": "明天白天",
            "long_daypart_name": "星期四",
            "alt_daypart_name": "星期四",
            "thunder_enum_phrase": null,
            "num": 3,
            "temp": 11,
            "hi": 11,
            "wc": 3,
            "pop": 0,
            "icon_extd": 9003,
            "icon_code": 30,
            "wxman": "wx1150",
            "phrase_12char": "",
            "phrase_22char": "",
            "phrase_32char": "上午多云，下午晴朗",
            "subphrase_pt1": "",
            "subphrase_pt2": "",
            "subphrase_pt3": "",
            "precip_type": "rain",
            "rh": 47,
            "wspd": 28,
            "wdir": 4,
            "wdir_cardinal": "北風",
            "clds": 69,
            "pop_phrase": "",
            "temp_phrase": "最高 11ºC。",
            "accumulation_phrase": "",
            "wind_phrase": "北風 风 25 到 40 每 km / h 。",
            "shortcast": "上午多云，下午转晴。",
            "narrative": "上午多云，下午转晴。 最高 11ºC。 北風 风 25 到 40 每 km / h 。",
            "qpf": 0.0,
            "snow_qpf": 0.0,
            "snow_range": "",
            "snow_phrase": "",
            "snow_code": "",
            "vocal_key": "D3:DA12:X2600300031:S900331:TH11:W16R05",
            "qualifier_code": null,
            "qualifier": null,
            "uv_index_raw": 5.26,
            "uv_index": 5,
            "uv_warning": 0,
            "uv_desc": "中等",
            "golf_index": 6,
            "golf_category": "健康"
        }
    }]
};


export var hourlyWeatherBean = {
    "metadata": {
        "language": "zh-CN",
        "transaction_id": "1458701084434:-437149432",
        "version": "1",
        "latitude": 31.22,
        "longitude": 121.54,
        "units": "m",
        "expire_time_gmt": 1458701684,
        "status_code": 200
    },
    "forecasts": [{
        "class": "fod_short_range_hourly",
        "expire_time_gmt": 1458701684,
        "fcst_valid": 1458702000,
        "fcst_valid_local": "2016-03-23T11:00:00+0800",
        "num": 1,
        "day_ind": "D",
        "temp": 12,
        "dewpt": 6,
        "hi": 12,
        "wc": 10,
        "feels_like": 10,
        "icon_extd": 2600,
        "wxman": "wx1250",
        "icon_code": 26,
        "dow": "星期三",
        "phrase_12char": "",
        "phrase_22char": "",
        "phrase_32char": "多云",
        "subphrase_pt1": "",
        "subphrase_pt2": "",
        "subphrase_pt3": "",
        "pop": 0,
        "precip_type": "rain",
        "qpf": 0.0,
        "snow_qpf": 0.0,
        "rh": 66,
        "wspd": 24,
        "wdir": 20,
        "wdir_cardinal": "東北偏北風",
        "gust": 31,
        "clds": 94,
        "vis": 16.1,
        "mslp": 1022.7,
        "uv_index_raw": 3.27,
        "uv_index": 3,
        "uv_warning": 0,
        "uv_desc": "中等",
        "golf_index": 7,
        "golf_category": "健康",
        "severity": 1
    }, {
        "class": "fod_short_range_hourly",
        "expire_time_gmt": 1458701684,
        "fcst_valid": 1458705600,
        "fcst_valid_local": "2016-03-23T12:00:00+0800",
        "num": 2,
        "day_ind": "D",
        "temp": 12,
        "dewpt": 5,
        "hi": 12,
        "wc": 9,
        "feels_like": 9,
        "icon_extd": 2600,
        "wxman": "wx1250",
        "icon_code": 26,
        "dow": "星期三",
        "phrase_12char": "",
        "phrase_22char": "",
        "phrase_32char": "多云",
        "subphrase_pt1": "",
        "subphrase_pt2": "",
        "subphrase_pt3": "",
        "pop": 0,
        "precip_type": "rain",
        "qpf": 0.0,
        "snow_qpf": 0.0,
        "rh": 62,
        "wspd": 26,
        "wdir": 21,
        "wdir_cardinal": "東北偏北風",
        "gust": 33,
        "clds": 92,
        "vis": 16.1,
        "mslp": 1022.8,
        "uv_index_raw": 3.58,
        "uv_index": 4,
        "uv_warning": 0,
        "uv_desc": "中等",
        "golf_index": 7,
        "golf_category": "健康",
        "severity": 1
    }]
};

