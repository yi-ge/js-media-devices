# Js Media Devices
[![npm version](https://img.shields.io/npm/v/js-media-devices.svg?style=flat-square)](https://www.npmjs.org/package/js-media-devices)
[![npm](https://img.shields.io/npm/dt/js-media-devices.svg?style=flat-square)](http://npm-stat.com/charts.html?package=js-media-devices)
[![Github file size](https://img.shields.io/github/size/yi-ge/js-media-devices/bin/js-media-devices.min.js.svg?style=flat-square)](https://github.com/yi-ge/js-media-devices/blob/master/bin/js-media-devices.min.js)
[![license](https://img.shields.io/github/license/yi-ge/js-media-devices.svg?style=flat-square)](https://github.com/yi-ge/js-media-devices/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/yi-ge/js-media-devices.svg?style=flat-square)](https://github.com/yi-ge/js-media-devices)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Manage Media Devices use javascript. 

The [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface provides access to connected media input devices like cameras and microphones.

## Usage
```
npm i js-media-devices
```

```javascript
const JsMediaDevices = require('js-media-devices')

device = new JsMediaDevices()

await device.getDeviceList() // find out: src/index.js

await device.setOutAudioDevices(element, deviceId)
```
