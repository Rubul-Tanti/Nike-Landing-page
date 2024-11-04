import {
  Hero,
  PopularProducts,
  Services,
  SignIn,
  CustumerReview,
  SuperQuality,
  Footer,Nav,
  SpecialOffers
} from "./sections/index"

const App = () => (
  <main className="relative">
    <Nav></Nav>
    <section className="xl:padding-1 wide:padding-r padding-b"><Hero></Hero></section>
    <section className="padding "><PopularProducts></PopularProducts></section>
    <section className="padding"><SuperQuality></SuperQuality></section>
    <section className="padding-x py-10">
      <Services></Services>
    </section>

    <section className="padding"><SpecialOffers></SpecialOffers></section>


    <section className="bg-pale-blue padding"><CustumerReview></CustumerReview></section>


    <section className="padding-x sm:py-32 py-16 w-full"><SignIn></SignIn></section>


    <section className="padding-x padding-t pb-8 bg-black"><Footer></Footer></section>

  </main>
)
export default App