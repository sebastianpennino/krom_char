import { Dropdown } from "./components/Dropdown";
import { NumericInput } from "./components/NumericInput";
import { TextInput } from "./components/TextInput";
import { species, classes, subclasses, PlayerClasses, characteristics } from "./types/types";

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
              filterFn={(opt: any) => {
                return opt.dependsOn === PlayerClasses.MAGO;
              }}
            />
          </div>
        </div>
        <div>
          <TextInput chosenLang={chosenLanguage} />
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
              <NumericInput
                key={char.formulaName}
                title={char.name[chosenLanguage]}
                unique={char.formulaName}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          <button className="w-full px-4 py-2 text-white rounded">Calculate</button>
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
