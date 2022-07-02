/* db.js */

import { Client } from 'mysql';

const home = Deno.env.get('HOME');
console.log(`HOME: ${home}`);

const connectionData = {
	'/home/codio': {
		hostname: '127.0.0.1',
		username: 'websiteuser',
		password: 'websitepassword',
		db: 'website',
	},
	'/app': {
		hostname: 'us-cdbr-east-06.cleardb.net',
		username: 'bbbceda08e5938',
		password: '15e598d1',
		db: 'heroku_86414731cab56f5',
	},
};

const conn = connectionData[home];
console.log(conn);

const db = await new Client().connect(conn);

export { db };
