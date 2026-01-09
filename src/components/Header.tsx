import { FC } from "react";

interface HeaderProps {
    displayIntro?: boolean
}

const Header: FC<HeaderProps> = ({ displayIntro = true }: HeaderProps) => {
    return (
        <header className="p-10">
            <h1 className="text-center text-4xl font-black text-white">Le Test d'Innocence</h1>

            {displayIntro && <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5 text-neutral-500">
                Le Rice Purity Test a ete cree dans les annees 80.
                Cela signifie qu'il n'inclut aucune des activites rebelles typiques du 21e siecle (comme le sexting, les fausses cartes d'identite ou Tinder)
            </p>}

            {displayIntro && <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5 text-neutral-700">
                Ce site vise a proposer une version plus aboutie et plus soignee du <a href="https://theinnocencetest.com" target="_blank" className="underline hover:text-indigo-500">test d'innocence original</a>,
                et tout le monde peut l'ameliorer en contribuant sur <a href="https://github.com/jirkavrba/the-innocence-test" target="_blank" className="underline hover:text-indigo-500">Github</a>.
            </p>}
        </header>
    );
};

export default Header;
