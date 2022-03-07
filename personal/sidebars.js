module.exports = {
    wiki: [
      {type: 'ref', id: 'index', label: '↩︎ トップ ページ'},
      {type: 'ref', id: 'note', label: '↩︎ Note ページ'},
      {
        type: 'autogenerated',
        dirName: './wiki', // '.' means the current docs folder
      },
    ],
    note: [
      {type: 'ref', id: 'index', label: '↩︎ トップ ページ'},
      {type: 'ref', id: 'wiki', label: '↩︎ Wiki ページ'},
      {
        type: 'autogenerated',
        dirName: './note', // '.' means the current docs folder
      },
    ],
  };
