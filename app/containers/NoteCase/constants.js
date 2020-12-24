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
    shortcut: {
      assist: 'Alt',
      key_p: 'F',
      key_s: ''
    },
    
    items: [
      {
        name: 'open',
        onClick: () => {
          console.log('menu.file.open clicked');
        },
        shortcut: {
          assist: 'Ctrl',
          key_p: 'O',
          key_s: ''
        }
      }
    ]
  },
  {
    name: 'edit',
    onClick: () => {
      console.log('menu.edit clicked')
    },
    shortcut: {
      assist: 'Alt',
      key_p: 'E',
      key_s: ''
    },
    items: [
      {
        name: 'copy',
        onClick: () => {
          console.log('menu.edit.copy clicked');
        },
        shortcut: {
          assist: 'Ctrl',
          key_p: 'C',
          key_s: ''
        }
      }
    ]
  },
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
        shortcut: {
          assist: 'Ctrl',
          key_p: 'O',
          key_s: ''
        }
      }
    ]
  },
  {
    name: 'edit',
    onClick: () => {
      console.log('menu.edit clicked')
    },
    shortcut: 'Alt + E',
    items: [
      {
        name: 'copy',
        onClick: () => {
          console.log('menu.edit.copy clicked');
        },
        shortcut: 'Ctrl + C'
      }
    ]
  }
];

export {
  INIT_STATE,
  MENU_CONST,
  MENU_CONFIG
};
