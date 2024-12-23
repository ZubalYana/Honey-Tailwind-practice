import './App.css'
import logo from '/logo.svg'
import Header from './components/Header/Header'
import honeySpoon from '/honey spoon.png'
import bannerHoney from '/banner honey.png'
import bee from '/bee.png'
import shopLogo1 from '/shopLogo1.svg'
import shopLogo2 from '/shopLogo2.svg'
import shopLogo3 from '/shopLogo3.svg'
import shopLogo4 from '/shopLogo4.svg'
import secondScreenIllustration from '/second screen illustration.png'
import thirdScreenIllustration from '/third screen illustration.png'
export default function App() {
  return (
    <>
     <div className="wrap w-full">
     <Header />

     {/* main page start */}
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
     {/* main page end */}

     {/* trusted shops page start */}
      <section className='trustedShopsPage w-full h-[38vh] py-12 px-56 relative'>
        <h3 className='text-3xl font-semibold text-black my-9'>Our Trusted Shops</h3>
        <div className="shopLogosCon flex justify-between items-center">
          <img src={shopLogo1} alt="shop logo 1" />
          <img src={shopLogo2} alt="shop logo 2" />
          <img src={shopLogo3} alt="shop logo 3" />
          <img src={shopLogo4} alt="shop logo 4" />
        </div>
      </section>
     {/* trusted shops page end */}

     {/* honey created page start */}
      <section className='honeyCreatedPage w-full h-[90vh] p-12 relative flex justify-center'>
        <div className="honeyImgCon w-[50%]">
          <img src={secondScreenIllustration} alt="second screen illustration" className='w-[600px]' />
        </div>
        <div className="honeyInfoCon w-[40%] h-full flex flex-col justify-center">
          <h3 className='text-3xl font-semibold text-black w-[380px]'>Honey created in the laps of nature.</h3>
          <p className='my-5 w-[470px]'>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
          <button className='w-[184px] h-[60px] bg-darkOrange text-white font-medium focus:outline-none hover:bg-transparent hover:text-darkOrange hover:border-2 hover:border-darkOrange transition-all duration-300 my-6'>Learn More</button>
        </div>
      </section>
     {/* honey created page end */}

     {/* honey taste page start */}
     <section className='honeyCreatedPage w-full h-[90vh] p-12 relative flex justify-center'>
        <div className="honeyInfoCon w-[40%] h-full flex flex-col justify-center">
          <h3 className='text-3xl font-semibold text-black w-[380px]'>Does your honey taste bad? Try us!</h3>
          <p className='my-5 w-[470px]'>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
          <button className='w-[184px] h-[60px] bg-darkOrange text-white font-medium focus:outline-none hover:bg-transparent hover:text-darkOrange hover:border-2 hover:border-darkOrange transition-all duration-300 my-6'>Learn More</button>
        </div>
        <div className="honeyImgCon w-[42%]">
          <img src={thirdScreenIllustration} alt="second screen illustration" className='w-[600px]' />
        </div>
      </section>
     {/* honey taste page end */}

     </div>
    </>
  )
}
