import Hero from "../../components/Hero"
import Stats from "../../components/Stats"
import Courses from "../../components/Courses"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Services from "../../components/Services"
import CertificationBanner from "../../components/CertificationBanner"

export default function Home() {

  return (
    <>
      <Hero/>
      <Services />
      <Stats/>
      <Banner />
      <Courses/>
      <CertificationBanner />
      <Footer/>
    </>
  )

}
