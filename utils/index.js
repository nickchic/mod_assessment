export const toTitleCase = (str) => {
    if(!str) return ""
    
    return str
        .toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
} 