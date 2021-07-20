export default class JsMediaDevices {
  public deviceList: MediaDeviceInfo[];

  constructor () {
    this.deviceList = []
  }

  /**
   * 检查浏览器是否支持MediaDevices
   * @returns 是或否
   */
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

  /**
   * 授权并获取设备列表（所有）
   * @returns 媒体设备信息列表
   */
  async getDeviceList(): Promise<MediaDeviceInfo[]> {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })

    this.deviceList = await navigator.mediaDevices.enumerateDevices()

    return this.deviceList
  }

  /**
   * 只授权音频设备并获取音频设备列表
   * @returns 音频设备信息列表
   */
  async getOnlyAudioDeviceList(): Promise<MediaDeviceInfo[]> {
    await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true
    })

    return navigator.mediaDevices.enumerateDevices()
  }

  /**
   * 只授权视频并获取视频设备列表
   * @returns 视频设备信息列表
   */
  async getOnlyVideoDeviceList(): Promise<MediaDeviceInfo[]> {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })

    return navigator.mediaDevices.enumerateDevices()
  }

  /**
   * 获取音频设备列表（输入+输出）
   * @returns 音频设备信息列表
   */
  async getAudioDeviceList(): Promise<MediaDeviceInfo[]> {
    const deviceList = this.deviceList.length ? this.deviceList : await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audioinput' || item.kind === 'audiooutput')
  }

  /**
   * 获取视频输入设备列表
   * @returns 视频设备信息列表
   */
  async getVideoDeviceList(): Promise<MediaDeviceInfo[]> {
    const deviceList = this.deviceList.length ? this.deviceList : await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'videoinput')
  }

  /**
   * 获取音频输出设备列表
   * @returns 音频设备信息列表
   */
  async getAudioOutDeviceList(): Promise<MediaDeviceInfo[]> {
    const deviceList = this.deviceList.length ? this.deviceList : await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audiooutput')
  }

  /**
   * 获取音频输入设备列表
   * @returns 音频设备信息列表
   */
  async getAudioInDeviceList(): Promise<MediaDeviceInfo[]> {
    const deviceList = this.deviceList.length ? this.deviceList : await this.getDeviceList()

    return deviceList.filter(item => item.kind === 'audioinput')
  }

  /**
   * 根据设备ID获取对应的视频输出流
   * @param deviceId 设备ID
   * @param options 选项 { minWidth, minHeight, width, height }
   * @returns 视频流
   */
  async getVideoMediaStream(deviceId: string, options?: any): Promise<MediaStream> {
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

  /**
   * 根据设备ID获取对应的音频输出流
   * @param deviceId 设备ID
   * @returns 音频流
   */
  async getAudioMediaStream(deviceId: string): Promise<MediaStream> {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: deviceId ? { deviceId: { exact: deviceId } } : true
    })

    return stream
  }

  /**
   * 根据视频输入设备ID和音频输入设备ID获取相应媒体流
   * @param videoDeviceId 视频输入设备ID
   * @param audioDeviceId 音频输入设备ID
   * @returns 媒体流
   */
  async getVideoAndAudioMediaStream(videoDeviceId: string, audioDeviceId: string): Promise<MediaStream> {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: { exact: videoDeviceId } },
      audio: { deviceId: { exact: audioDeviceId } }
    })

    return stream
  }

  /**
   * 停止视频流/音频流
   * @param stream 视频流或音频流
   */
  stopMediaTracks(stream: MediaStream): void {
    stream.getTracks().forEach(track => {
      track.stop()
    })
  }

  /**
   * 根据音频输出设备ID设置当前音频输出设备
   * @param element HTMLAudioElement
   * @param deviceId 音频输出设备ID
   * @returns 提示信息
   */
  setAudioOutDevice(element: HTMLAudioElement, deviceId: string): Promise<string> {
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
