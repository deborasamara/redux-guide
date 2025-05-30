import { useState } from "react";
import { useSelector } from "react-redux";
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer);
  console.log({currentUser});
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div>Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
