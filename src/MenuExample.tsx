import * as React from 'react';
import { CircleIcon, ComposeIcon, Menu, MenuIcon, PresenceAvailableIcon, tabListBehavior } from '@fluentui/react-northstar';

class MenuExample extends React.Component {
  state = {
    OpenedMenu:''    
  }
  handleMenuOpenChange= (currentMenu:any) => {    
    this.setState({
      OpenedMenu:currentMenu,
              
  })
  
  } 
  
  render() {
    return (
      <>
      <Menu defaultActiveIndex={0} items = {[{
        key: 'menuItem0',
        icon: <MenuIcon />,
        menuOpen:this.state.OpenedMenu=='menuItem0'?true:false,                 
        onMouseOver: () => this.handleMenuOpenChange('menuItem0'),                            
        menu: {
          items: [
            { key: '1', content: 'Settings',icon: <PresenceAvailableIcon />,
             menu: [
              { key: '1', content: 'step 1',icon: <ComposeIcon /> },
              { key: '2', content: 'step 2',icon: <ComposeIcon /> },
              { key: '3', content: 'step 3',icon: <ComposeIcon /> },
            ],
           },
            {
              key: '2',
              content: 'Administration',icon: <PresenceAvailableIcon />,
              menu: [
                { key: '1', content: 'Licensing',icon: <ComposeIcon /> },
                { key: '2', content: 'Administration',icon: <ComposeIcon /> },
              ],
            },            
          ],
          
        },
      },
      {
        key: 'menuItem1',
        content: 'MenuItem1',
        menuOpen:this.state.OpenedMenu=='MenuItem1'?true:false,                 
        onMouseOver: () => this.handleMenuOpenChange('MenuItem1'),     
        menu: {
          items: [
            { key: '1',
             content: 'Sub menu Item 1', 
             menu: [
              { key: '1', content: 'My career and Benefits',weight: "bold" },
              { key: '2', content: 'HRWeb' },
              { key: '3', content: 'Benefits' },
              { key: '4', content: 'Learning Portal' },
              { key: '4', content: 'Internal jobs' },
              { key: '4', content: 'Company Store' },
              { key: '5', content: 'Give' },
              { key: '6', content: 'Travel and Expense',weight: "bold" },
              { key: '7', content: 'Travel' },
              { key: '8', content: 'Expenses' },
              { key: '9', content: 'Payments' },
              { key: '10', content: 'Us immigration travel' },
            ]
          },
            {
              key: '2',
              content: 'Sub menu Item 2'             
            },
            {
              key: '3',
              content: 'Sub menu Item 3'             
            },
          ],
        },
      },
      {
        key: 'menuItem2',
        content: 'MenuItem2',
        menuOpen:this.state.OpenedMenu=='MenuItem2'?true:false,                 
        onMouseOver: () => this.handleMenuOpenChange('MenuItem2'),      
        menu: {
          items: [
            { key: '1', content: 'item1' },
            {
              key: '2',
              icon: <CircleIcon />,
              content: 'item2 non augue tortor mollis'              
            },
            {
              key: '3',
              icon: <CircleIcon />,
              content: 'item3 elementum urna varius augue ultrices gravida malesuada fames'             
            },
          ],
        },
      },
      {key:'menuItem3',content:'MenuItem3'},
      {key:'menuItem4',content:'MenuItem4'},
      {key:'menuItem5',content:'MenuItem5'}
    ]}
       />
       </>
     )
   }
 }
export default MenuExample;

