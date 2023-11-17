// Use `as const` instead of enums!

const SKILL_LEVELS = ['Beginner', 'Intermidiate', 'Advanced'] as const

/* Optional from video comments - but I like it */
type SkillLevels = (typeof SKILL_LEVELS[number])

type Person = {
  name: string
  age: number
  isProgrammer?: boolean
  skillLevel: SkillLevels
}

const personA: Person = {
  name: 'Johnny',
  age: 99,
  isProgrammer: true,
  skillLevel: 'Intermidiate' // autocomplete
}

function printSkillLevels() {
  SKILL_LEVELS.forEach(sl => {
    console.log(`Skill Level: ${sl}`)
  })
}

printSkillLevels()

type ExampleTuple = [ string, boolean ]

const a: ExampleTuple = ['Sausages', true]
const b: ExampleTuple = ['For Tea', 7 ]
