import SponsorRedBull from "../../assets/Red-Bull-Logo (1).png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import HomePageText from "@/assets/HomePageText.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePicture from '@/assets/HomePicture.png';
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="accueil" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={()=>setSelectedPage(SelectedPage.Accueil)}
        >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div 
          className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden:  {opacity: 0, x:-50},
            visible: {opacity: 1, x:0}, 
          }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
            Brûlez des calories en vous amusant : découvrez notre large choix de cours en groupe dans une salle équipée d'équipements de classe mondiale
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div className="mt-8 flex items-center gap-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{ delay: 0.2, duration: 0.5}}
          variants={{
            hidden:  {opacity: 0, x:-50},
            visible: {opacity: 1, x:0}, 
          }}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Rejoindre
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.NousContacter)}
              href={`#${SelectedPage.NousContacter}`}
            >
              <p>En savoir plus ...</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img alt="home-pageGraphic" src={HomePicture} width="450"/>
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
      <div className="h-[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex w-3/5 items-center justify-between gap-8">
            <img alt="redbull-sponsor" src={SponsorRedBull} width="100px"/>
            <img alt="forbes-sponsor" src={SponsorForbes}/>
            <img alt="fortune-sponsor" src={SponsorFortune}/>
          </div>
        </div>
      </div>
      )}
    </section>
  );
};

export default Home;
