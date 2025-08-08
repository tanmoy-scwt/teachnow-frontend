export const generateQueryFromFilters = (
    baseParams: URLSearchParams,
    newParams: Record<string, string[] | string | null>
): string => {

    const processedParams = new Map<string, string>();
    baseParams.forEach((value, key) => {
        processedParams.set(key, value);
    });

    for (const key in newParams) {
        const value = newParams[key];

        if (value === null) {
            processedParams.delete(key);
        } else if (Array.isArray(value)) {
            if (value.length > 0) {
                processedParams.set(key, value.join(','));
            } else {
                processedParams.delete(key);
            }
        } else if (typeof value === "string") {
            processedParams.set(key, value);
        }
    }

    const orderedKeys = ['title', 'location', 'job-type', "work-type", "salary-type", "sort", 'page'];
    const resultParams = new URLSearchParams();

    for (const key of orderedKeys) {
        if (processedParams.has(key)) {
            resultParams.set(key, processedParams.get(key)!);
            processedParams.delete(key);
        }
    }
    processedParams.forEach((value, key) => {
        resultParams.set(key, value);
    });

    return resultParams.toString();
};