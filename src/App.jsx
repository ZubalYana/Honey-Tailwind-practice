import './App.css'
import logo from '/logo.svg'
import Header from './components/Header/Header'
import honeySpoon from '/honey spoon.png'
import bannerHoney from '/banner honey.png'
import bee from '/bee.png'
export default function App() {
  return (
    <>
     <div className="wrap w-full">
     <Header />
      <section className='mainPage w-full h-[78vh] px-12 relative'>
        <img src={honeySpoon} alt="honey spoon" className='w-[150px] absolute top-[10px] left-[-20px]' />
        <div className="mainPage_banner w-full h-full bg-gradient-to-tr from-honeyStart to-honeyEnd rounded-3xl flex items-center justify-center">
          <img src={logo} alt="honey" className='w-[65%] absolute z-10' />
          <div className="banner_infoContent z-20 w-[60%] px-40 flex justify-center flex-col">
            <div className="titleContainer font-semibold text-7xl w-[70%] h-[280px] flex flex-col justify-between my-9">
              <div className="titleWord">Finger</div>
              <div className="titleWord mx-36">licking</div>
              <div className="titleWord flex items-end">
                <div className="beeContainer ">
                  <img src={bee} alt="bee" className='w-[120px]' />
                  <div className="beeUnderline w-[200px] h-[2px] bg-black"></div>
                </div>
                <p className='mx-8'>honey!</p>
                </div>
            </div>
            <div className="buttonsContainer w-[360px] flex justify-between">
              <button className="w-[170px] h-[50px] bg-black text-white font-medium focus:outline-none hover:bg-transparent hover:text-black hover:border-2 hover:border-black transition-all duration-500">Buy Now</button>
              <button className='w-[170px] h-[50px] text-black border-2 border-black font-medium hover:bg-black hover:text-white transition-all duration-500'>Learn More</button>
            </div>
          </div>
          <div className="banner_imgContainer w-[40%] z-20">
            <img src={bannerHoney} alt="honey" className='w-[90%]' />
          </div>
        </div>
      </section>
     </div>
    </>
  )
}
