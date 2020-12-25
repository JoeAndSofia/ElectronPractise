import {
  folder
} from '../../images'

const INIT_STATE = {
  INDEX_TREE_WIDTH: 200
};

const MENU_CONST = {
  MENU_OFF: -1,
  
  MENU_BAR: {
    WIDTH: 60,
    HEIGHT: 25
  },
  
  MENU_ITEM: {
    WIDTH: 320,
    BORDER_STYLE: {
      SIDE: 'solid',
      TOP: 'solid',
      BOTTOM: 'solid',
      NONE: 'none'
    }
  },
};

console.log('constants: ', {
  folder
});

const MENU_CONFIG = [
  {
    name: 'file',
    onClick: () => {
      console.log('menu.file clicked')
    },
    shortcut: [
      {
        assist: 'Alt',
        key_p: 'F',
        key_s: ''
      }
    ],
    
    items: [
      {
        icon: folder,
        name: 'open',
        onClick: () => {
          console.log('menu.file.open clicked');
        },
        shortcut: [
          {
            assist: 'Ctrl',
            key_p: 'O',
            key_s: ''
          }
        ],
        first: true,
        last: true
      }
    ]
  },
  {
    name: 'edit',
    onClick: () => {
      console.log('menu.edit clicked')
    },
    shortcut: [
      {
        assist: 'Alt',
        key_p: 'E',
        key_s: ''
      }
    ],
    items: [
      {
        name: 'copy',
        onClick: () => {
          console.log('menu.edit.copy clicked');
        },
        shortcut: [
          {
            assist: 'Ctrl',
            key_p: 'C',
            key_s: ''
          }
        ],
        first: true,
        last: true
      }
    ]
  },
  {
    name: 'view',
    onClick: () => {
      console.log('menu.view clicked')
    },
    shortcut: [
      {
        assist: 'Alt',
        key_p: 'F'
      }
    ],
    items: [
      {
        name: 'toggle_sidebar',
        onClick: () => {
          console.log('menu.view.toggle_sidebar clicked');
        },
        shortcut: [
          {
            assist: 'Ctrl + Alt',
            key_p: 'S',
          }
        ],
        first: true,
        last: true
      }
    ]
  }
];

export {
  INIT_STATE,
  MENU_CONST,
  MENU_CONFIG
};
