const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUS3OjOBj8L7rGmYAxYFyVqiXYBozxAz9haw4yyCADAkvCGKfy37eIk5ocdmazN5VArVZ3f/0KSIEZclADBq+gpPgCOWqXvCkRGICX6nhEFHRABDkEAxAa62lF9pNrMETHTU3lpMiuxZmcTXNiEb7ZprpJ5n5Ubdxn8NYBZXXIcPgHQKc3Sz1kqXahWNVI3Ktu3nUru6hWPlw1p31gRj2xDu1FtwVsESGmmMSjMkE5ojBzULOAmH6PvmFseJQauDEO3rQZ79hcSMLxkq+VcR4SaHhmUzZ4yi7C6Hv0z9Gyl3huIvrzXm1WtzrzedV/2sClWb4Uzk4lwdEKs9mptu/0GY4JiuwIEY55823d7YV+a9TJUy/U9MXawWoqisc6etgTa3zz6WZ+6Pfivpvm2833iJ+YHBX97Dx7kq+BqloH+UCf9LMbO5pX1P5+yOz9KimtvVB/Jb6gn1lJ/4/uD7Nq4pXb7vZgXiRmnunIy4aV5WKrOEkLqMtry5lrPR2L6ffoW2l+5Ws3szUS9/39yWaXCZk3XTlU+ezq7btTEe04vqLxF90hr+ifWM7qU1eYYmobpbkTPH8Ee8lQWLiTZj13507sFMMFcwN32ke+2Z3K1ckn3Hs4zDaCtFLk9bY3dotpwYXK2+fiOo+uG1+vn99flKLGjsBAfOsAimLMOIUcF6Tdk/sdAKPLCoUU8Xd1QcYXKV36aTbf5bp6CDYn2dZyR067rnrztw9CKpb6cmVL5egZdEBJixAxhiILM17QxkWMwRgxMPj7ZwcQdOV339rbJLEDjpgyviFVmRUw+jT18yMMw6IifNWQ0GgXiIKB8GsbcY5JzFoZKwJpmOALMhLIGRgcYcbQWwdE6IJD1OIBP/TVg5PA5UzxeUrjIbQyWW8pJwW5/yJqghhKav9RVbrKYy+UhUetq3QfkRaGB6QdD0dJBB2AP0amPfNbB/VKtoPTNoA2TMPIq/tao9NjUAl2+O7CXXpEUQQGnFaoAw4wTKtyXaSI/AF3gmTmb1dNVKih4Uj6PJFgkHELRpsvuHdLweD1V00ZRdTirayVKIr+FnRA/p5A3L68q0iq2ldVTdB6A+Uv9qNudYRl+YMg3sJ+aN4eiBCHOGNth01uM9bzR6PJwc1UZpr6KNaNuBX106PPrN/D1GD1Vtn23nBjJXLhVVmlqpPtxkUdF7Z06WnKNjidn5b+TX/+FxAwAIvF/uF4q8rImFkjG0dQW3hxg1F3M9mNtZWa4aHusOjUNb1wlDCnn2ujYXSZLvZ1JZPcPV32RNFTw+vHmlii8robH3X9ub3tnpWvl9kw8OyV46pCuUZ+BYu55AfXGceBYZHhbJlZT9WFTIL4KV+STKZ0sqvEoXZT4kpJXNyXzqk8v7nb8ppKyymNlG0qvyzvU/jeAtlH++L3AXn9SNYRo/cyI7B16D+8+Zpx4a3zBeKjHX+To5ewqPoqNsb1yZ6TtclQWs6bcptA13aMmfqwQNnOVy6C6dbg7e1nB5QZ5MeC5mAAIIlogSPQARlkXP81pmucI8ZhXoKBqEo9VRIlQXz7B0sugmzbBwAA',
    PREFIXE: process.env.PREFIX || "-",
    OWNER_NAME: process.env.OWNER_NAME || "Trevor",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "263778779094",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Tre Bot',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'online',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

