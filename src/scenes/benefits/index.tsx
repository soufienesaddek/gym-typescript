import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import exerciceVelo from '../../assets/exerciceVelo.png';
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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam exercitationem soluta, dolorum maiores dolores aliquid impedit nihil ipsa vero vel modi quia. Ducimus, quas optio! Vero voluptatem",
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
          className="md:my-5 md:w-3/5"
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            voluptatibus nulla, incidunt vero doloremque hic? Fugit quasi modi
            officia illo officiis aspernatur rerum quos sint, tempora amet hic
            quod repellendus?
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
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
          width="450px"
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
              <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod quas quis eos distinctio illum sunt? Id, laudantium modi! Debitis, unde consequuntur temporibus, qui assumenda aliquid eveniet rerum veritatis earum facilis vitae, deserunt adipisci atque distinctio iure dolorum eius. Vitae!</p>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quo cumque ipsum voluptatum reprehenderit, dignissimos corporis nihil at. Explicabo perspiciatis recusandae, inventore aut quisquam officiis!</p>
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
