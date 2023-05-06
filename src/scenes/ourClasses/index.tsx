import image1 from "@/assets/image1.png";
import image2 from "@/assets/yogaClass.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

import HText from "@/shared/HText";
import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./Class"

const classes: Array<ClassType> = [
  {
    name: "Cours de musculation",
    description:
      "Le cours de musculation est une séance d'entraînement visant à développer la force, l'endurance et la masse musculaire. Il se compose d'exercices tels que les squats, les développés couchés, les tractions et les curls, qui sont effectués avec des poids et des machines de musculation. L'entraîneur guide les participants à travers un programme d'exercices adapté à leur niveau de condition physique et à leurs objectifs.",
    image: image1,
  },
  {
    name: "Cours de Yoga",
    description: "Le cours de yoga est une pratique physique et mentale qui vise à renforcer le corps, à améliorer la souplesse et la stabilité, ainsi qu'à favoriser la détente et la relaxation. Il comprend des postures (asanas) tenues pendant plusieurs respirations, des exercices de respiration (pranayama), des techniques de méditation et de relaxation. L'enseignant guide les participants à travers des mouvements fluides et des positions de yoga adaptées à leur niveau de condition physique et à leurs besoins individuels.",
    image: image2,
  },
  {
    name: "Abdominaux",
    description:
      "Le cours d'abdominaux est une séance d'entraînement visant à renforcer les muscles abdominaux et à améliorer la posture. Il se compose d'exercices tels que les crunchs, les planches, les relevés de jambes et les twists, qui sont effectués en utilisant le poids du corps ou des équipements de musculation. L'entraîneur guide les participants à travers des mouvements ciblant les muscles abdominaux, tout en veillant à ce que la technique et la respiration soient correctes pour éviter les blessures et maximiser les résultats.",
    image: image3,
  },
  {
    name: "Cours de Zumba",
    description:
      "Le cours de Zumba est une séance d'entraînement cardiovasculaire qui mélange des mouvements de danse latine et de fitness. Il se compose de chorégraphies entraînantes sur de la musique rythmée, permettant de brûler des calories tout en s'amusant. L'enseignant guide les participants à travers des mouvements simples et accessibles à tous les niveaux de condition physique.",
    image: image4,
  },
  {
    name: "Cours de fitness",
    description:
      "Le cours de fitness est une séance d'entraînement complète qui combine des exercices cardiovasculaires et de musculation. Il vise à améliorer la condition physique, en travaillant la force, l'endurance, la souplesse et la coordination. L'entraîneur guide les participants à travers un programme d'exercices varié, adapté à leur niveau de condition physique et à leurs objectifs, tout en veillant à ce que la technique et la sécurité soient respectées.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab itaque veritatis quo error aliquam neque quasi nesciunt alias pariatur",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="noscours" className="w-full bg-gray-20 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.NosCours)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-9/12">
            <HText>NOS COURS</HText>
            <p className="py-5">
            Notre salle de gym offre différentes options pour répondre aux besoins de chaque membre. Vous pouvez choisir un entraînement libre pour votre propre programme, ou opter pour un coaching personnalisé pour un suivi plus spécifique de vos objectifs. Nous proposons également des cours progressifs animés par nos entraîneurs expérimentés, qui vous permettront d'atteindre vos objectifs plus rapidement, tout en bénéficiant du soutien et de la motivation d'un groupe convivial. Chez nous, nous croyons que l'exercice devrait être un moment agréable, c'est pourquoi nous nous efforçons de créer une ambiance chaleureuse et accueillante, où chacun peut se sentir à l'aise et apprécier ses séances d'entraînement.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
