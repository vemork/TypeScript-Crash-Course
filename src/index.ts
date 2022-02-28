//  npm i -g typescript (yarn)
//  tsc index
//  tsc --watch
//  tsc --init (generate config file)
// outDir rooDir

console.log("ID:", 24)

//  tuple 
//  the order is required number, string, boolean
//  error ...
// let arr: [number, string, boolean] = [1, 'Emma', 2]

let arr: [number, string, boolean] = [1, 'Emma', true]

//  tuple array
type person = [number, string][]
let company: person = [
  [1, 'Emma'],
  // [1, 'Manu', true]  error
  [2, 'Manu']
]

// tuple
let employee: [number, string][]
employee = [
  [1,'emma'],
  [2,'manu']
]

// union
let ID: string | number
ID = 22
ID = "23"

// Enum
// 0
// 1
// 2
// 3
// ...
enum Direction1 {
  up,
  down,
  left,
  right
}

// 1
// 2
// 3
// 4
// ...
enum Direction2 {
  up = 1,
  down,
  left,
  right
}

enum Direction3 {
  up = 'arriba',
  down = 'abajo',
  left = 'izquierda',
  right ='derecha'
}

// objects

const user: {
  id: number,
  name: string
}= {
  id: 1,
  name: 'bob'
}

// BETTER 
type USER = {
  id: number,
  name: string
}

const newUser: USER = {
  id: 20,
  name: 'michael'
}

// Type Assertion
let cid: any = 1
// let customerID = <number>cid
let customerID = cid as number // another way

// Error
// customerID = true


interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 2,
  name: 'vinicious'
}

// readOnly property
user1.id = 10

interface MathFunc {
  (x: number, y: number): number
}

const sum: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

class Person {
  private id: number
  name: string
  protected salario: number

  constructor(id: number, name: string){
     this.id = id
     this.name = name
     this.salario = 0
  }

  register(){
    return `${this.name} is now registred.`
  }
}

const Emma = new Person(20, 'Emmanuel')

const obj = new Person(30, 'Fernado')
console.log(obj.register())



interface PersonInterface {
  idt: number,
  name: string

  register(): string
}

class Persona implements PersonInterface {
  idt: number
  name: string
  protected salario: number

  constructor(idt: number, name: string){
    this.idt = idt
    this.name = name
    this.salario = 0
 }

 register(): string{
     return 'ok'
 }
}

class Empleoyee extends Persona {
  position: string

  constructor(idt: number, name: string, position: string){
    super(idt, name)
    this.position = position
  }
}


// GENERICS
// reuseable components
function getArray<T>(items: T[]): T[]{
  return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3])
let strArr = getArray<string>(['a', 'b', 'c'])
// error generic number
numArr.push('ooo')
numArr.push(4)

// error generic string
strArr.push(3)
strArr.push('d')




















