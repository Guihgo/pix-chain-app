export function shortLongString(str: string, start = 6, end = -4) {
    return `${str.slice(0, start)}...${str.slice(end)}`
}