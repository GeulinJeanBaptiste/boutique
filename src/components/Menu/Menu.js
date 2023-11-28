import ListMenu from '../ListMenu/ListMenu';
import "./Menu.css";
const Menu = (props) => {
  return (
    <nav id="menu">
      <h1 className='logo'>World Bike</h1>
      <ListMenu
        sendEntries={props.sendEntries}
        handledisplayPanier={props.handledisplayPanier}></ListMenu>
    </nav>
  )
}
export default Menu;