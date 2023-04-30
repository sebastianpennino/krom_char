import { TextInput } from "../components/TextInput";
import {
  translateSpecies,
  translateClass,
  translateSubclass,
  classStat,
  speciesStat,
} from "../types/types";

type Props = {
  state: any;
  choosenLang: number;
  derivative: any;
};

// The result page shows all the choices made in the previous screen
export const ResultsPage = ({ state, choosenLang, derivative }: Props) => {
  const getFinalSources = (source: "v" | "m" | "a") => {
    // @ts-ignore
    if (
      // @ts-ignore
      speciesStat[state.charSpecies] &&
      // @ts-ignore
      classStat[state.charClass] &&
      source
    ) {
      // @ts-ignore
      return (
        // @ts-ignore
        speciesStat[state.charSpecies][source] +
        // @ts-ignore
        classStat[state.charClass][source]
      );
    }
    return 0;
  };

  return (
    <>
      <div className="flex space-x-4">
        <div className="w-full text-center bg-neutral-600 text-xl">
          {state.charName}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/3 text-center bg-neutral-700">
          {translateSpecies(state.charSpecies, choosenLang)?.toUpperCase()}
        </div>
        <div className="w-1/3 text-center bg-neutral-700">
          {translateClass(state.charClass, choosenLang)?.toUpperCase()}
        </div>
        <div className="w-1/3 text-center bg-neutral-700">
          {translateSubclass(state.charSubClass, choosenLang)?.toUpperCase()}
        </div>
      </div>

      <div className="flex w-2/3 h-10 mx-auto text-xl">
        <div className="w-1/3 flex items-center bg-rose-700 justify-center">
          {getFinalSources("v")}
        </div>
        <div className="w-1/3 flex items-center bg-cyan-700 justify-center">
          {getFinalSources("m")}
        </div>
        <div className="w-1/3 flex items-center bg-lime-700 justify-center">
          {getFinalSources("a")}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["Golpe", "Impact"]}
            value={String(derivative.golpe)}
            disabled={true}
          />
        </div>
        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["Golpe A2M", "2H Impact"]}
            value={String(derivative.golpe2m)}
            disabled={true}
          />
        </div>
        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["Mistica", "Mystique"]}
            value={String(derivative.mistica)}
            disabled={true}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["Max TA", "Max TA"]}
            value={String(derivative.maxTA)}
            disabled={true}
          />
        </div>
        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["TA Magico", "Magic TA"]}
            value={String(derivative.magicTA)}
            disabled={true}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["Reflejos", "Reflex"]}
            value={String(derivative.reflejos)}
            disabled={true}
          />
        </div>

        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["R. Fisica", "Physic R."]}
            value={String(derivative.reFisica)}
            disabled={true}
          />
        </div>
        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["R. Magica", "Magic R."]}
            value={String(derivative.reMagica)}
            disabled={true}
          />
        </div>
        <div className="block w-full mt-1">
          <TextInput
            chosenLang={choosenLang}
            title={["R. Mental", "Mental R."]}
            value={String(derivative.reMental)}
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};
