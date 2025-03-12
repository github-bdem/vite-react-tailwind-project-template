import Counter from "@components/Counter/Counter";
import AdjustCountButtons from "@components/Counter/AdjustCountButtons";
import CounterContextProvider from "./components/Counter/CounterContextProvider";

function App() {
    return (
        <CounterContextProvider>
            <div className="bg-primary flex h-screen w-screen flex-col items-center">
                <div className="flex flex-col items-center gap-2">
                    <div style={{ fontFamily: "Momentz" }} className="text-2xl">
                        Vite React Tailwind Project Template
                    </div>
                    <AdjustCountButtons />
                    <Counter />
                </div>
            </div>
        </CounterContextProvider>
    );
}

export default App;
