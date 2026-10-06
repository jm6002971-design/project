/***************************************************************************************************
 * Fix global, process, and Buffer for Web3Auth and other Node libs
 ***************************************************************************************************/
import { Buffer } from 'buffer';
import process from 'process';

(window as any).global = window;
(window as any).Buffer = Buffer;
(window as any).process = process;
(window as any).process.env = (window as any).process.env || {};
if (!(window as any).process.nextTick) {
  (window as any).process.nextTick = (fn: any, ...args: any[]) => setTimeout(() => fn(...args), 0);
}
