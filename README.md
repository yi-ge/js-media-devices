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

#### checkMediaDevicesSupport()

检查浏览器是否支持 MediaDevices

**_Return type_**

是或否

```
boolean
```

#### getAudioDeviceList()

获取音频设备列表（输入+输出）

**_Return type_**

音频设备信息列表

```
Promise<MediaDeviceInfo[]>
```

#### getAudioMediaStream(deviceId)

根据设备 ID 获取对应的音频输出流

**_Parameters_**

- **`deviceId`** (`string`) – 设备 ID

**_Return type_**

音频流

```
Promise<MediaStream>
```

#### getAudioOutDeviceList()

获取音频输出设备列表

**_Return type_**

音频设备信息列表

```
Promise<MediaDeviceInfo[]>
```

#### getDeviceList()

授权并获取设备列表（所有）

**_Return type_**

媒体设备信息列表

```
Promise<MediaDeviceInfo[]>
```

#### getAudioInDeviceList()

获取音频输入设备列表

**_Return type_**

音频设备信息列表

```
Promise<MediaDeviceInfo[]>
```

#### getOnlyAudioDeviceList()

只授权音频设备并获取音频设备列表

**_Return type_**

音频设备信息列表

```
Promise<MediaDeviceInfo[]>
```

#### getOnlyVideoDeviceList()

只授权视频并获取视频设备列表

**_Return type_**

视频设备信息列表

```
Promise<MediaDeviceInfo[]>
```

#### getVideoAndAudioMediaStream(videoDeviceId, audioDeviceId)

根据视频输入设备 ID 和音频输入设备 ID 获取相应媒体流

**_Parameters_**

- **`videoDeviceId`** (`string`) – 视频输入设备 ID
- **`audioDeviceId`** (`string`) – 音频输入设备 ID

**_Return type_**

媒体流

```
Promise<MediaStream>
```

#### getVideoDeviceList()

获取视频输入设备列表

**_Return type_**

视频设备信息列表

```
Promise<MediaDeviceInfo[]>
```

#### getVideoMediaStream(deviceId [, options])

根据设备 ID 获取对应的视频输出流

**_Parameters_**

- **`deviceId`** (`string`) – 设备 ID
- **`options`** (`any`) – _Optional._ 选项 { minWidth, minHeight, width, height }

**_Return type_**

视频流

```
Promise<MediaStream>
```

#### setAudioOutDevice(element, deviceId)

根据音频输出设备 ID 设置当前音频输出设备

**_Parameters_**

- **`element`** (`HTMLAudioElement`) – HTMLAudioElement
- **`deviceId`** (`string`) – 音频输出设备 ID

**_Return type_**

提示信息

```
Promise<string>
```

#### stopMediaTracks(stream)

停止视频流/音频流

**_Parameters_**

- **`stream`** (`MediaStream`) – 视频流或音频流

**_Return type_**

```
void
```

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
