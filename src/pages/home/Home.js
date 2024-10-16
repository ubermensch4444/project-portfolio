import React from 'react';
import './Home.css';
import FadeInSection from '../../components/common/fade_in_section/FadeInSection';
import home1 from '../../assets/images/home/home1.png';
import home2 from '../../assets/images/home/home2.jpeg';
import home3 from '../../assets/images/home/home3.jpeg';
import home4 from '../../assets/images/home/home4.jpg';
import home5 from '../../assets/images/home/home5.png';
import home6 from '../../assets/images/home/home6.png';
import home7 from '../../assets/images/home/home7.jpeg';

function Home() {
  return (
    <div className="home-container">
      <FadeInSection>
        <div className="home-header-section">
          <h1>Eco-friendly Fire Extinguishers for a Sustainable Future</h1>
          <p>A project focused on developing fire extinguishers that promote both safety and environmental protection.</p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="home-section">
          <div className="home-content-wrapper">
            <div className="home-image-container">
              <img src={home1} alt="statistics" />
            </div>
            <div className="home-description-container">
              <h2>Project Background</h2>
              <p className="home-summary">The Need for Environmental Protection and the Issue of Fire Extinguisher Disposal</p>
              <p>
                With the mandatory installation of fire extinguishers in vehicles, the demand for fire extinguishers is on the rise.
                However, most fire extinguishers are made with plastic components,
                which are difficult to recycle once they reach the end of their lifespan, resulting in significant environmental impact.
                To address this issue, I focused on designing a more eco-friendly fire extinguisher.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="home-section">
          <div className="home-content-wrapper reverse">
            <div className="home-image-container">
              <img src={home3} alt="fire extinguisher design" />
            </div>
            <div className="home-description-container">
              <h2>Eco-friendly Fire Extinguisher Design</h2>
              <p className="home-summary">Designing with Recyclable Stainless Steel Hoses</p>
              <p>
                Instead of the traditional plastic hoses, I redesigned the key components of the fire extinguisher using flexible and durable stainless steel hoses.
                This ensures that even after a 10-year lifespan, the materials can be reused or recycled, significantly reducing the environmental impact.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="home-section">
          <div className="home-content-wrapper">
            <div className="home-image-container">
              <img src={home2} alt="stainless steel hose" />
            </div>
            <div className="home-description-container">
              <h2>Technical Features</h2>
              <p className="home-summary">Maintaining Fire Extinguisher Performance While Achieving Environmental Benefits</p>
              <p>
                The stainless steel hoses are designed to maintain strength and flexibility while also being fully recyclable.
                In addition, they are more durable than plastic hoses and meet all fire extinguisher performance standards.
                This technical innovation allows us to achieve both safety and environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="home-section">
          <div className="home-content-wrapper reverse">
            <div className="home-image-container">
              <img src={home4} alt="future potential" />
            </div>
            <div className="home-description-container">
              <h2>Future Potential</h2>
              <p className="home-summary">The Advancement of Fire Extinguisher Technology with Environmental Consideration</p>
              <p>
                This project goes beyond simply creating a fire extinguisher; it sets a new standard for sustainable fire extinguisher production.
                If widely adopted, this technology could play a crucial role in addressing the global issue of fire extinguisher waste.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="home-gallery-images">
          <img src={home5} alt="document capture1" />
          <img src={home6} alt="document capture2" />
          <img src={home7} alt="document capture3" />
        </div>
      </FadeInSection>
    </div>
  );
}

export default Home;
