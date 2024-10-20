import React from 'react';
import './About.css';
import FadeInSection from '../../components/common/fade_in_section/FadeInSection';
import aboutImage1 from '../../assets/images/about/about1.jpeg';
import aboutImage2 from '../../assets/images/about/about2.jpeg';
import aboutImage3 from '../../assets/images/about/about3.png';
import aboutImage4 from '../../assets/images/about/about4.jpeg';
import aboutImage5 from '../../assets/images/about/about5.jpeg';
import aboutImage6 from '../../assets/images/about/about6.jpg';
import aboutImage7 from '../../assets/images/about/about7.png';
import aboutImage8 from '../../assets/images/about/about8.png';
import aboutImage9 from '../../assets/images/about/about9.png';
import aboutImage10 from '../../assets/images/about/about10.png';
import aboutImage11 from '../../assets/images/about/about11.png';

function About() {
  return (
    <div className="about-container">
      <div className="about-fade-section">
        <FadeInSection>
          <div className="about-section">
            <div className="about-image-container about-image-1">
              <img src={aboutImage1} alt="about1" />
            </div>
            <div className="description-container">
              <h2>A Student Developer with a Passion for Eco-friendly Innovation</h2>
              <p>
                I am a student deeply interested in technologies that prioritize both safety and environmental sustainability.
                Due to the increasing legal requirements for installing fire extinguishers in vehicles,
                I began this project to solve the environmental issues caused by the rising number of extinguishers in use.
                While most manufacturers use plastic components,
                I aimed to develop a recyclable product by switching to stainless steel.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>

      <div className="about-fade-section">
        <FadeInSection>
          <div className="about-section">
            <div className="about-image-container">
              <img src={aboutImage2} alt="about2" />
            </div>
            <div className="description-container">
              <h2>My Mission</h2>
              <p>
                In this project, I replaced the key component—the hose— with stainless steel to enhance durability and ensure it can be reused or recycled after its lifespan.
                This not only minimizes the environmental impact but also strengthens the overall safety of the product.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>

      <div className="about-fade-section">
        <FadeInSection>
          <blockquote className="about-quote">
            My goal is to create a better world through technology,
            and I am committed to continuing to develop innovative designs that prioritize both safety and the environment.
          </blockquote>
        </FadeInSection>
      </div>

      <div className="about-fade-section">
        <FadeInSection>
          <div className="bottom-images">
            <img src={aboutImage3} alt="about3" />
            <img src={aboutImage4} alt="about4" />
            <img src={aboutImage5} alt="about5" />
          </div>
          <div className="bottom-images">
            <img src={aboutImage6} alt="about6" />
            <img src={aboutImage7} alt="about7" />
            <img src={aboutImage8} alt="about8" />
          </div>
          <div className="bottom-images">
            <img src={aboutImage9} alt="about9" />
            <img src={aboutImage10} alt="about10" />
            <img src={aboutImage11} alt="about11" />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default About;
