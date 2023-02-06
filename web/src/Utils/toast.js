import { EventManager } from '../Lib/EventManager';

export const toastEventManager = new EventManager();

export function toast({ type, text }) {
  toastEventManager.emit('addtoast', { type, text });
}
