module.exports = {
    Sidebar: [
      "index",
      {type: 'ref', id: 'event/index', label: 'イベント トップ ↪'},
      {
        type: 'autogenerated',
        dirName: './world/npc', // '.' means the current docs folder
      },
    ],

    Event: [
      {type: 'ref', id: 'index', label: '↩︎ システム トップ'},
      {
        type: 'autogenerated',
        dirName: './event', // '.' means the current docs folder
      },
    ],
  };