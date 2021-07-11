# Js Media Devices

[![npm version](https://img.shields.io/npm/v/js-media-devices.svg?style=flat-square)](https://www.npmjs.org/package/js-media-devices)
[![npm](https://img.shields.io/npm/dt/js-media-devices.svg?style=flat-square)](http://npm-stat.com/charts.html?package=js-media-devices)
[![Github file size](https://img.shields.io/github/size/yi-ge/js-media-devices/bin/js-media-devices.min.js.svg?style=flat-square)](https://github.com/yi-ge/js-media-devices/blob/master/bin/js-media-devices.min.js)
[![license](https://img.shields.io/github/license/yi-ge/js-media-devices.svg?style=flat-square)](https://github.com/yi-ge/js-media-devices/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/yi-ge/js-media-devices.svg?style=flat-square)](https://github.com/yi-ge/js-media-devices)

Manage Media Devices use javascript.

The [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface provides access to connected media input devices like cameras and microphones.

## Usage

### Install

```
npm i js-media-devices
```

### API

### Example

```javascript
import JsMediaDevices from "js-media-devices";

const device = new JsMediaDevices()(async () => {
  await device.getDeviceList(); // find out: src/index.js

  await device.setOutAudioDevices(element, deviceId);
})();
```

## Build

```bash
yarn global add uglify-js
```
