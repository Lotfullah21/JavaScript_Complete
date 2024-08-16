const lab = "HoshmandLab"
const checking = lab.includes("b")
console.log(checking)

const subjects =[
    { title: "Artificial intelligence" },
    { title: "Deep learning" },
    { title: "Python" },
    {title:"Machine learning"},
    
]

// it applies some changes on the element of an object and returns a new  array of the same length.

const contains = subjects.map((subject) => {
    return subject.title.includes("learning")
})
// filter returns items that meet the condition in an object
const filteredItem = subjects.filter((subject) => {
    return subject.title.includes("learning")
})
console.log(contains)
console.log(filteredItem)