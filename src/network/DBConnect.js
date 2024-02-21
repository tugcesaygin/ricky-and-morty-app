import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
    {
        name : 'favoriteCharactersDB'
    },
    ()=> {},
    error => {console.log('SQLite hatası : ', error);}
);

db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT favoriteCharacters(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status TEXT, gender TEXT)'
    );
});

const addFavoriteCharacter = (name,status, gender) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO favoriteCharacters(name, status , gender) VALUES (?,?,?)',
            [name,status,gender]
        );
    }

    ) ;       
    
};

const getFavoriteCharacters = (callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM favoriteCharacters',
            [],
            (_,{rows: {_array}}) => {
                callback(_array);
            }
        );
    });
};


export{addFavoriteCharacter, getFavoriteCharacters}