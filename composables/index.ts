export const useCounterObj = () => useState('bla-bla', () => ({}));

const useCounter = () => {
    const counter = ref(1);

    const increment = () => counter.value += 1;
    const decrement = () => counter.value -= 1;

    return {
        counter,

        increment,
        decrement
    }
};

export const useTestComposable = (key: string) => {
    useCounterObj().value[key] = useCounter(); // error: Cannot stringify a function

    return useCounterObj().value[key];
}