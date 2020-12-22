const INIT_STATE = {
  INDEX_TREE_WIDTH: 200,
  
  MENU_BAR_WIDTH: 60,
  MENU_BAR_HEIGHT: 25,
  
  MENU_ITEM_WIDTH: 200
};

const MENU_CONST = {
  MENU_OFF: -1
};

const MENU_CONFIG = [
  {
    name: 'file',
    onClick: () => {
      console.log('menu.file clicked')
    },
    shortcut: 'Alt + F',
    items: [
      {
        name: 'open',
        onClick: () => {
          console.log('menu.file.open clicked');
        },
        shortcut: 'Ctrl + O'
      }
    ]
  }
];

export {
  INIT_STATE,
  MENU_CONST,
  MENU_CONFIG
};
