//TypeScript infers the return type, based on the type of arguments
function insertBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updartedArray = insertBeginning(demoArray, -1); // [-1, 1, 2, 3] 
const stringArray = insertBeginning(['a', 'b'], 'c'); 