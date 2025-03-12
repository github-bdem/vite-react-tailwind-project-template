import { useCounterContext } from "./CounterContext";

import githubLogo from "@assets/images/github-mark-white.png";

function Counter() {
    const { state } = useCounterContext();

    const { count } = state;

    return (
        <div className="grid grid-cols-3 gap-3">
            {[...Array(count).keys()].map((idx: number) => {
                return (
                    <img
                        key={`item-${idx}`}
                        alt={`item-${idx}`}
                        src={githubLogo}
                    />
                );
            })}
        </div>
    );
}

export default Counter;
