import { Dropdown } from "./components/Dropdown";
import { NumericInput } from "./components/NumericInput";
import { TextInput } from "./components/TextInput";

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
            <Dropdown />
          </div>
          <div className="w-1/3">
            <label htmlFor="dropdown2">Dropdown 2</label>
            <select id="dropdown2" className="block w-full mt-1">
              <option value="d">Option D</option>
              <option value="e">Option E</option>
              <option value="f">Option F</option>
            </select>
          </div>
          <div className="w-1/3">
            <label htmlFor="dropdown3">Dropdown 3</label>
            <select id="dropdown3" className="block w-full mt-1">
              <option value="g">Option G</option>
              <option value="h">Option H</option>
              <option value="i">Option I</option>
            </select>
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
          <div>
            <NumericInput />
          </div>
          <div>
            <label htmlFor="re">Re</label>
            <input id="re" type="number" min="1" max="5" step="1" className="block w-full mt-1" />
          </div>
          <div>
            <label htmlFor="ag">Ag</label>
            <input id="ag" type="number" min="1" max="5" step="1" className="block w-full mt-1" />
          </div>
          <div>
            <label htmlFor="ra">Ra</label>
            <input id="ra" type="number" min="1" max="5" step="1" className="block w-full mt-1" />
          </div>
          <div>
            <label htmlFor="intu">Intu</label>
            <input id="intu" type="number" min="1" max="5" step="1" className="block w-full mt-1" />
          </div>
          <div>
            <label htmlFor="sab">Sab</label>
            <input id="sab" type="number" min="1" max="5" step="1" className="block w-full mt-1" />
          </div>
          <div>
            <label htmlFor="soc">Soc</label>
            <input id="soc" type="number" min="1" max="5" step="1" className="block w-full mt-1" />
          </div>
          <div>
            <label htmlFor="per">Per</label>
            <input id="per" type="number" min="1" max="5" step="1" className="block w-full mt-1" />
          </div>
          <div>
            <label htmlFor="vo">Vo</label>
            <input id="vo" type="number" min="1" max="5" step="1" className="block w-full mt-1" />
          </div>
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