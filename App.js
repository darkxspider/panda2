/*

- simple and easier to write compared to class
- dont need to manage state or lifecycle methods






Class Component


- extend from React Component
- they can hold and manage state and provide lifecycle methods
- they are powerful than functional component but also more complex






MENU  - Home , About Us , vehicles , Services , Contact Us
ABOUT
FOOTER
*/




import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer";




function App(){
  return (
    <>
    <Menu/>
    <About/>
    <Footer/>
    </>
  )
}


export default App;







