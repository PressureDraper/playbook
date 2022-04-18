const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

console.log('Explorers')
explorers.forEach(ex => {
    console.log(ex.name)
})

console.log('\nExplorers stacks')
explorers.forEach(ex => {
    console.log(ex.stack)
})

console.log('\nNew map list for explorer stacks')
const stacks = explorers.map(function(ex){ 
    return ex.stack
})
console.log(stacks)

console.log('\nFilter js stacks')
const jsStacks = explorers.filter(ex =>
  ex.stack.includes('js')
)
console.log(jsStacks)

console.log('\nfind cdmx explorer')
const explorercdmx = explorers.find(ex => {
    return ex.city === "CDMX"
})
console.log(explorercdmx)

console.log('\nsum all completed excercises')
const compExercises = explorers.reduce(function(past, object) { return past + object.exercises_completed} , 0)
console.log(compExercises)

console.log('\nexercises validation')
const exValidation = explorers.some(ex =>  ex.missions.frontend.exercisesFinished === true)
console.log(exValidation) //true

console.log('\nonboarding finished true')
const finTrue = explorers.every(ex =>  ex.missions.onboarding.isFinished === true) // every
console.log(finTrue)