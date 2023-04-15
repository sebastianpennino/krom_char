import { Dropdown } from "./components/Dropdown";
import { NumericInput } from "./components/NumericInput";
import { TextInput } from "./components/TextInput";

const species = [
  {
    name: ["Tanque", "Tank-esque"],
    formulaName: "ROCK",
  },
  {
    name: ["Orco", "Orc"],
    formulaName: "ORCO",
  },
  {
    name: ["Feral", "Feral"],
    formulaName: "FERAL",
  },
  {
    name: ["Humano", "Human"],
    formulaName: "HUMANO",
  },
  {
    name: ["Treno", "Treno"],
    formulaName: "TRENO",
  },
  {
    name: ["Elfo", "Elf"],
    formulaName: "ELFO",
  },
  {
    name: ["Magica Full", "Magic Full"],
    formulaName: "FEY",
  },
];

const classes = [
  {
    name: ["Asesino", "Assasin"],
    formulaName: "ASESINO",
  },
  {
    name: ["Ladron", "Thief"],
    formulaName: "LADRON",
  },
  {
    name: ["Guerrero", "Warrior"],
    formulaName: "GUERRERO",
  },
  {
    name: ["Monje", "Monk"],
    formulaName: "MONJE",
  },
  {
    name: ["Cazador", "Hunter"],
    formulaName: "CAZADOR",
  },
  {
    name: ["M-Guerrero", "W-Mage"],
    formulaName: "MAGO_GUERRERO",
  },
  {
    name: ["Shaman", "Shaman"],
    formulaName: "SHAMAN",
  },
  {
    name: ["Mago", "Mage"],
    formulaName: "MAGO",
  },
];

const characteristics = [
  {
    name: ["Fuerza", "Strength"],
    formulaName: "Fu",
  },
  {
    name: ["Resistencia", "Fortitude"],
    formulaName: "Re",
  },
  {
    name: ["Agilidad", "Agility"],
    formulaName: "Ag",
  },
  {
    name: ["Razon", "Reasoning"],
    formulaName: "Ra",
  },
  {
    name: ["Intuicion", "Intuition"],
    formulaName: "Int",
  },
  {
    name: ["Sabiduria", "Knowledge"],
    formulaName: "Sab",
  },
  {
    name: ["Social", "Social"],
    formulaName: "Soc",
  },
  {
    name: ["Percepcion", "Perception"],
    formulaName: "Per",
  },
  {
    name: ["Voluntad", "Willpower"],
    formulaName: "Vo",
  },
];

const subclasses = [
  {
    name: ["NOT READY", "NOT READY"],
    formulaName: "temp",
  },
]

const langs = {
  esp: 0,
  eng: 1,
};

const chosenLanguage = langs.esp;

function App() {
  return (
    <div className="flex flex-col h-screen border border-red-600">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-gray-900">
        <div className="text-white">Logo</div>
        <div className="text-white">Menu Icon</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/3">
            <Dropdown
              title={["Especie", "Species"]}
              options={species}
              chosenLang={chosenLanguage}
            />
          </div>
          <div className="w-1/3">
            <Dropdown
              title={["Clase", "Class"]}
              options={classes}
              chosenLang={chosenLanguage}
            />
          </div>
          <div className="w-1/3">
            <Dropdown
              title={["Sub-Clase", "Sub-Class"]}
              options={subclasses}
              chosenLang={chosenLanguage}
            />
          </div>
        </div>
        <div>
          <TextInput />
        </div>
        <div>
          <label htmlFor="dropdown4">Dropdown 4</label>
          <select id="dropdown4" className="block w-full mt-1">
            <option value="32">32</option>
            <option value="28">28</option>
            <option value="26">26</option>
            <option value="24">24</option>
            <option value="22">22</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {characteristics.map((char) => {
            return (
              <div key={char.formulaName}>
                <NumericInput
                  title={char.name[chosenLanguage]}
                  unique={char.formulaName}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Calculate
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center px-4 py-3 text-gray-500 bg-gray-200">
        <div className="text-sm">© 2023 All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
