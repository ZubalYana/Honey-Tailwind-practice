import './App.css'
import logo from '/logo.svg'
export default function App() {
  return (
    <>
     <div className="wrap w-full">
      <header className='w-full flex items-center justify-between px-12 py-8'>
        <img src={logo} alt="" />
        <ul className='w-[415px] flex justify-between items-center'>
          <li>Home</li>
          <li>About</li>
          <li>Our Product</li>
          <li>Contact</li>
        </ul>
      </header>
     </div>
    </>
  )
}
