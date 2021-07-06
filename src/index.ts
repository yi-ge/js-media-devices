export default class JsMediaDevices {
  public deviceList: MediaDeviceInfo[];

  constructor () {
    this.deviceList = []
  }

  checkMediaDevicesSupport(): boolean {
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

  stopMediaTracks(stream: MediaStream): void {
    stream.getTracks().forEach(track => {
      track.stop()
    })
  }

  async getVideoMedia(deviceId: string, options: any): Promise<MediaStream> {
    const { minWidth, minHeight, width, height } = Object.assign({
      minWidth: null, minHeight: null, width: null, height: null
    }, options)
    if (width && height) {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        video: deviceId ? { width, height, deviceId: { exact: deviceId } } : true,
        audio: false
      })

      return stream
    } else if (minWidth && minHeight) {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
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

  async getAudioMedia(deviceId: string): Promise<MediaStream> {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: deviceId ? { deviceId: { exact: deviceId } } : true
    })

    return stream
  }

  async getVideoAndAudioMedia(videoDeviceId: string, audioDeviceId: string): Promise<MediaStream> {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: { exact: videoDeviceId } },
      audio: { deviceId: { exact: audioDeviceId } }
    })

    return stream
  }

  async getDeviceList(): Promise<MediaDeviceInfo[]> {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })

    this.deviceList = await navigator.mediaDevices.enumerateDevices()

    return this.deviceList
  }

  async getOnlyAudioDeviceList(): Promise<MediaDeviceInfo[]> {
    await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true
    })

    return navigator.mediaDevices.enumerateDevices()
  }

  async getOnlyVideoDeviceList(): Promise<MediaDeviceInfo[]> {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })

    return navigator.mediaDevices.enumerateDevices()
  }

  async getAudioDeviceList(): Promise<MediaDeviceInfo[]> {
    const deviceList = this.deviceList || await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audioinput' || item.kind === 'audiooutput')
  }

  async getVideoDeviceList(): Promise<MediaDeviceInfo[]> {
    const deviceList = this.deviceList || await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'videoinput')
  }

  async getOutAudioDeviceList(): Promise<MediaDeviceInfo[]> {
    const deviceList = this.deviceList || await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audiooutput')
  }

  async getInAudioDeviceList(): Promise<MediaDeviceInfo[]> {
    const deviceList = this.deviceList || await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audioinput')
  }

  setOutAudioDevices(element: HTMLAudioElement, deviceId: string): Promise<string> {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      if (typeof element.sinkId !== 'undefined') {
        // @ts-ignore
        element.setSinkId(deviceId)
          .then(() => {
            resolve(`Success, audio output device attached: ${deviceId} to element with ${element.title} as source.`)
          })
          // @ts-ignore
          .catch(error => {
            let errorMessage = error
            if (error.name === 'SecurityError') {
              errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`
            }
            reject(errorMessage)
          })
      } else {
        reject(new Error('Browser does not support output device selection.'))
      }
    })
  }
}
