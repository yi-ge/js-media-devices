export default class JsMediaDevices {
  constructor () {
    this.deviceList = null
  }

  checkMediaDevicesSupport () {
    if (!navigator) {
      throw new Error('navigator not supported.')
    }

    if (!navigator.mediaDevices) {
      throw new Error('mediaDevices not supported.')
    }

    if (!navigator.mediaDevices.enumerateDevices) {
      throw new Error('mediaDevices.enumerateDevices() not supported.')
    }
    return true
  }

  stopMediaTracks (stream) {
    stream.getTracks().forEach(track => {
      track.stop()
    })
  }

  async getVideoMedia (deviceId, minWidth, minHeight) {
    if (minWidth && minHeight) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: deviceId ? { width: { min: minWidth }, height: { min: minHeight }, deviceId: { exact: deviceId } } : true,
        audio: false
      })
  
      return stream
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: deviceId ? { deviceId: { exact: deviceId } } : true,
      audio: false
    })

    return stream
  }

  async getAudioMedia (deviceId) {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: deviceId ? { deviceId: { exact: deviceId } } : true
    })

    return stream
  }

  async getVideoAndAudioMedia (videoDeviceId, audioDeviceId) {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: { exact: videoDeviceId } },
      audio: { deviceId: { exact: audioDeviceId } }
    })

    return stream
  }

  async getDeviceList () {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })

    this.deviceList = await navigator.mediaDevices.enumerateDevices()

    return this.deviceList
  }

  async getOnlyAudioDeviceList () {
    await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true
    })

    return navigator.mediaDevices.enumerateDevices()
  }

  async getOnlyVideoDeviceList () {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })

    return navigator.mediaDevices.enumerateDevices()
  }

  async getAudioDeviceList () {
    const deviceList = this.deviceList || await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audioinput' || item.kind === 'audiooutput')
  }

  async getVideoDeviceList () {
    const deviceList = this.deviceList || await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'videoinput')
  }

  async getOutAudioDeviceList () {
    const deviceList = this.deviceList || await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audiooutput')
  }

  async getInAudioDeviceList () {
    const deviceList = this.deviceList || await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audioinput')
  }

  setOutAudioDevices (element, deviceId) {
    return new Promise((resolve, reject) => {
      if (typeof element.sinkId !== 'undefined') {
        element.setSinkId(deviceId)
          .then(() => {
            resolve(`Success, audio output device attached: ${deviceId} to element with ${element.title} as source.`)
          })
          .catch(error => {
            let errorMessage = error
            if (error.name === 'SecurityError') {
              errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`
            }
            reject(errorMessage)
          })
      } else {
        reject('Browser does not support output device selection.')
      }
    })
  }
}
