import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import exerciceVelo from '@/assets/exerciceVelo.png';
import ActionButton from "@/shared/ActionButton";
 

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Installations à la Pointe de la Technologie",
    description:
      "Une expérience d'entraînement de pointe grâce à nos équipements de dernière génération. Nous disposons de machines de musculation et d'haltères de haute qualité pour rendre vos séances d'entraînement plus stimulantes et efficaces. ",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Cours Variés",
    description:
      "Nous sommes fiers de proposer une grande variété de cours de fitness. Que vous préfériez les cours de yoga pour améliorer votre souplesse et votre équilibre, les cours de cardio pour brûler des calories, les cours de musculation pour tonifier votre corps, ou encore les cours de danse pour vous amuser tout en vous entraînant. Nos instructeurs qualifiés sont là pour vous guider et vous motiver à chaque étape.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Des Coachs Professionels",
    description:
      "Nos coachs sont tout simplement incroyables ! Ils sont dévoués à vous aider à atteindre vos objectifs de remise en forme en utilisant des méthodes d'entraînement innovantes et efficaces. Leur passion pour le fitness est contagieuse et leur soutien constant vous permettra de dépasser vos limites. Avec eux, vous êtes entre de bonnes mains !",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="avantages" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Avantages)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-10/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>PLUS QU'UNE SALLE DE SPORT.</HText>
          <p className="my-5 text-sm">
          Nous vous invitons à découvrir notre salle de sport aux nombreux avantages. Nous proposons des équipements haut de gamme ainsi qu'un environnement motivant pour vous aider à atteindre vos objectifs de fitness. Nos coachs expérimentés et  accueillants vous accompagneront dans votre parcours de remise en forme. Nous croyons que la santé physique et mentale sont étroitement liées et c'est pourquoi nous encourageons nos clients à maintenir une pratique régulière pour se sentir bien dans leur peau. Venez nous rejoindre et découvrir les avantages de notre salle pour votre bien-être.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center  gap-6 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-8 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img 
          className="mx-auto"
          alt="benefits-image"
          src={exerciceVelo}
          width="500px"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative ">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                 >
                  <HText>
                    DES CENTAINES DE MEMBRES {" "}
                    <span className="text-primary-500">EN FORME</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
             }}
             >
              <p className="my-5">Nos membres peuvent obtenir des résultats remarquables en matière de remise en forme. En effet, en combinant une alimentation équilibrée, une routine d'exercice régulière et un style de vie sain, les membres peuvent voir une amélioration significative de leur santé physique et mentale. Les résultats peuvent varier en fonction des objectifs individuels de chaque membre, mais de manière générale, une pratique régulière de l'exercice peut aider à perdre du poids, renforcer la musculature, augmenter l'endurance et la flexibilité, améliorer la santé cardiovasculaire et réduire le stress. </p>
              <p className="mb-5">Vous pourrez constater des changements positifs dans votre estime de soi et votre confiance en vous-même. Les résultats obtenus dépendent de l'engagement et de la persévérance de chaque membre, mais avec le soutien et les conseils des coachs et des autres membres, notre salle de gym peut être un environnement propice à l'atteinte de résultats significatifs et durables.</p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Rejoindre</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
