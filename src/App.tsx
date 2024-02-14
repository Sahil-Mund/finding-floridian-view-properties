import "./styles/App.scss";
import {
  ContactPage,
  HomePage,
  HomeTour,
  UserLogIn,
  NotFound,
  PropertyDetailGallery,
  QuestionnaireLandingPage,
  ShopPage,
  AddPropertyPage,
} from "./views";
import {
  ChatBotButton,
  Navbar,
  QStepper,
  RecommendationPostCard,
  Footer,
  ScrollToTop,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { salesPosts } from "./assets/constansts";
import { postCardDetails } from "./assets/data";
import PropertyDetail from "./views/PropertyDetail";
import NewPropertyPost from "./components/dashboard/user/NewPropertyPost";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";
import { fetchPostsData } from "backend";

function App() {
  useEffect(() => {
    async function fetch() {
      // await fetchPostsData();
    }
    fetch();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <ScrollToTop />
        <Navbar />
        {/* <ChatBotButton /> */}
        {/* <UserLogIn /> */}
        <Routes>
          <Route path="/" element={<RecommendationPostCard data={postCardDetails} />} />
          {/* <Route path="/home-tour" element={<HomeTour />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/questionnaire" element={<QuestionnaireLandingPage />} />
          <Route path="/questionnaire/qna" element={<QStepper />} />
          <Route
            path="/recommendation"
            element={<RecommendationPostCard data={salesPosts} />}
          /> */}
          <Route path="/property-details" element={<PropertyDetail />} />
          <Route
            path="/property-details/gallery"
            element={<PropertyDetailGallery />}
          />
          {/* <Route
            path="/property/new-post/okefjjgrtgbjtrhgbh/qfgrkjgh6hy"
            element={<NewPropertyPost />}
          /> */}
          {/* <Route path="/property/new-post" element={<AddPropertyPage />} /> */}

          {/* Not found route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
