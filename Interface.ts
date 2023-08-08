interface Person {
    name: string;
    age: number;
    sayHello(): void;
  }
  
interface Student extends Person {
    grade: number;
}