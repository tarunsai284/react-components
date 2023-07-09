export const isString = (target) => {
    if (target && ((typeof target === 'string') || (target instanceof String)))
        return true;
    else return false;
}