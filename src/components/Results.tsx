import { FC } from "react";
import { AnsweredQuestionData } from "../types"
import ResultsGrid from "./ResultsGrid";

interface ResultsProps {
    answers: Array<AnsweredQuestionData>
}

// Taken from the original innocence test
const groups: Array<ResultGroup> = [
    {
        threshold: 100,
        title: "Completionniste",
        description: "On adore ta dedication. Tu es une personne de concentration, d'engagement et d'une putain de volonte. Merci de soumettre ta run sur speedrun.com."
    },
    {
        threshold: 81,
        title: "Enfant du diable",
        description: "Je ne sais pas ce que tu fais les week-ends, mais tant mieux pour toi. Lucifer serait fier."
    },
    {
        threshold: 66,
        title: "Paien",
        description: "Tu aimes t'amuser, mais tu sais quand te calmer. Tant mieux pour toi. Evite simplement de faire trop de mauvais choix."
    },
    {
        threshold: 56,
        title: "Corrompu",
        description: "Tu as probablement la vingtaine ou tu es un ado tres rebelle. Quoi qu'il en soit, tu as l'air d'etre une bonne compagnie. Tu viens a notre grosse soiree ce week-end ?"
    },
    {
        threshold: 46,
        title: "Dur a cuire",
        description: "Tu es la personne la plus amusante, mais ma mere me laisserait quand meme trainer avec toi. Tu as trouve ce juste milieu que nous cherchons tous — apprends-nous tes techniques."
    },
    {
        threshold: 34,
        title: "Enfant sauvage",
        description: "Tu es le juste milieu — tu as coche des oui et des non sur cette liste, mais tu sais clairement t'amuser. On a hate de voir ou tu en seras dans quelques annees."
    },
    {
        threshold: 26,
        title: "Rebelle",
        description: "Tu y arrives, mais tu commences clairement a experimenter ton cote sauvage. Bienvenue du cote obscur, mon chou, c'est un endroit amusant."
    },
    {
        threshold: 16,
        title: "Coeur tendre",
        description: "Tu es l'ami(e) maman, ce qui est genial parce que tout le monde en a besoin. D'ailleurs, tu peux passer ce week-end ? Plus serieusement, n'aie pas peur de t'amuser toi aussi parfois."
    },
    {
        threshold: 11,
        title: "Enfant modele",
        description: "Tu sais quand contourner les regles, mais je serais choque si tu en avais vraiment enfreint. Tant mieux pour toi, ton dossier est probablement plus propre que le notre."
    },
    {
        threshold: 6,
        title: "Innocent",
        description: "Tu experimentes quand meme, mais ton coeur est globalement Pur(TM). Ta maman est tellement fiere de toi en ce moment !"
    },
    {
        threshold: 1,
        title: "Ange",
        description: "Tu es l'ami(e) que mes parents me laisseraient toujours voir sans jamais poser de questions. Remets ton halo en place, et continue comme ca."
    },
    {
        threshold: 0,
        title: "Etudiant en informatique theorique",
        description: "Tu ne contribues a rien dans la societe. Reste seul ! Arrete d'essayer. PERSONNE NE T'AIME !"
    }
];

interface ResultGroup {
    threshold: number,
    title: string,
    description: string
}

const Results: FC<ResultsProps> = ({ answers }: ResultsProps) => {
    const total = answers.reduce((previous, current) => previous + current.weight, 0);
    const score = Math.round((answers.filter(answer => answer.answer).reduce((previous, current) => previous + current.weight, 0) / total) * 100);
    const group = groups.find(group => group.threshold <= score)!;

    return (
        <div className="text-center my-5 xl:my-10">
            <span className="uppercase text-sm tracking-widest font-bold text-gray-400">Votre score &mdash; {score}</span>
            <h1 className="text-4xl xl:text-6xl bg-gradient-to-r from-fuchsia-500 to-pink-300 font-black mt-5 mx-auto bg-clip-text text-transparent">{group.title}</h1>
            <p className="px-4 w-full text-sm xl:text-md font-bold sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5 text-neutral-700">
                {group.description}
            </p>
            <ResultsGrid answers={answers} />
        </div>
    );
};

export default Results;
