// Helpers to IndexedDB
import { DBSchema, openDB } from 'idb/with-async-ittr.js';

interface MyDB extends DBSchema {
  'workbox-cache-stories': {
    value: {
      url: string,
      timestamp: number,
    },
    key: string,
    indexes: { 'by-timestamp': number }
  }
}

async function demo() {
  const db = await openDB<MyDB>('HN-PWA', 1, {
    upgrade(db) {
      const storyStore = db.createObjectStore('workbox-cache-stories', { keyPath: 'url' });
      storyStore.createIndex('by-timestamp', 'timestamp');
    }
  });
}
export const TEST = () => {demo()}
// *** - create indexedDB database

// *** - save data into IndexedDB

// *** - get data from IndexedDB
