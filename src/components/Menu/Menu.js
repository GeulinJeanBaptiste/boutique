import ListMenu from '../ListMenu/ListMenu';
import "./Menu.css";
const Menu = (props) => {
  return (
    <nav id="menu">
      <ListMenu
        sendEntries={props.sendEntries}
        handledisplayPanier={props.handledisplayPanier}></ListMenu>
    </nav>
  )
}
export default Menu;