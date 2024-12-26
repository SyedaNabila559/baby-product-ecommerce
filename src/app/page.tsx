import Hero from "@/components/Hero";
import TryOnFeature from "@/components/TryOnFeature";
import Categories from "@/components/Catagories";
import PopularProducts from "@/components/PopularProducts";
import Promotions from "@/components/Promotion";
import ProductPage from "@/components/ProductPage";
import FeedbackSection from "@/components/FeedbackSection";
import Chatbot from "@/components/Chatbox";


const Home: React.FC = () => {
  

  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <Categories />
      <PopularProducts />
      <Promotions />
      <TryOnFeature />
      <section className="bg-gray-100 py-10">
        <ProductPage />
        <FeedbackSection/>
      </section>
      <Chatbot />
    </main>
  );
};

export default Home;