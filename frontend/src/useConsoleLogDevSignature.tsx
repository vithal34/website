/* eslint-disable no-console */
import { useTimeout } from 'usehooks-ts';
import { useIsProbablySafari } from './useIsProbablySafari';

export const useConsoleLogDevSignature = () => {
  const isSafari = useIsProbablySafari();
  const sizeStyle = `font-size: 20px;  ${isSafari ? '' : 'display:inline-block; padding: 10px;'}`;
  const style = `color: white; background: blue; font-family:monospace; ${sizeStyle}`;
  const log = (text: string) => console.log(`%c${text.toUpperCase()}`, style);
  useTimeout(() => {
    log('Hover here — Coach K would want you to?');
    log('Hovering here counts as a three pointers against UNC!');
    log('Welcome AOs! Please forgive me if you find it too funky!');
    console.log('%chttps://vithalagrawal.com', sizeStyle);
    log('hmu to nerd out about SaathiCare, NightVisionX, or Duke!');
    log('vithal@vithalagrawal.com');
  }, 1000);
};
