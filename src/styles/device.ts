export const deviceSizes = {
  smallMobile: '350px',
  mobile: '400px',
  mediumMobile: '500px',
  smallTablet: '650px',
  tablet: '768px',
  mediumTablet: '850px',
  smallLabtop: '950px',
  laptop: '1024px',
  mediumLaptop: '1200px',
} as const;

type DeviceSizes = keyof typeof deviceSizes;

type Device = Record<DeviceSizes, `@media only screen and (max-width: ${typeof deviceSizes[DeviceSizes]})`>;

export const device: Device = Object.entries(deviceSizes).reduce((device, [deviceName, deviceSize]) => {
  device[deviceName as DeviceSizes] = `@media only screen and (max-width: ${deviceSize})`;

  return device;
}, {} as Device);