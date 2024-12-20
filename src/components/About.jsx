import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items=center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            A self-motivated software engineer with 3 years of full stack
            development experience working in an international company. Highly
            responsible and embrace project-ownership while thriving in a fast
            paced environment with cross-functional teams.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
