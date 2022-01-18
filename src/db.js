import Dexie from 'dexie'

const db = new Dexie('ShortlyDatabase');
db.version(1).stores({
    links: '++id, originalLink, shortenedLink'
});

export default db;

