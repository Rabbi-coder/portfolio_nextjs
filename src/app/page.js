import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Partners from "@/components/Partners";
import Subscription from "@/components/Subsciption";
import Team from "@/components/Team";
import Work from "@/components/Work";
import Layout from "@/components/layout/layout";


export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Clients />
        <Team />
        <Blog />
        <Work />
        <Partners />
        <About />
        <Subscription />
      </Layout>
    </>
  )
}
