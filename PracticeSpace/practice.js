const checkAnagram = (str1, str2) => {
    const normalize = (str) => str.replace(/\s+/g, '').toLowerCase()

    str1 = normalize(str1) 
    str2 = normalize(str2) 

    if(str1.length !== str2.length) return false

    return str1.split('').toSorted().join('') === str2.split('').toSorted().join('')
}

console.log(checkAnagram("apple", "leapp"));
console.log(checkAnagram("apple", "leapo"));
