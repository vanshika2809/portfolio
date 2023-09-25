import Header from "@/components/sections/header";
import Organizations from "@/components/sections/Organizations";
import Footer from "@/components/sections/Footer";
import { useEffect, useState } from "react";
import WorkExperience from "@/components/sections/WorkExperience";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-screen fixed inset-0 z-50">
          <div className="loading-icon">
            <div className="circle">
              <div className="letter-v">V</div>
              <div className="letter-m">M</div>
            </div>
          </div>
          <div className="name-container">
            <div className="name">
              VANSHIKA MEHROTRA
              <div className="line"></div>
            </div>
            <div className="small-line"></div>
          </div>
        </div>
      )}
      <main>
        <Header />
        <Organizations />
        <WorkExperience />
        <Footer />
      </main>
    </>
  );
}
