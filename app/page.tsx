import Users from "./components/users";
export default function Home() {
  let name: string = "luki";
  // the JS code that the TS compiler generated: var name = "luki"
  // bc. by default the TS compiler uses an older version of JS called ES5

  // arrays
  // point of TS: arrays with only one type
  let numbers: number[] = [1, 2, 3];

  numbers.forEach((n) => n.toPrecision()); // intellisense for number variables

  // tuples
  // fixed length arrays with types set
  // tuples are useful when you have only 2 values
  // like key - value pairs
  let user: [number, string] = [1, "Malik"];

  // enums
  // to represent a list of related constants
  const enum Size {
    Small = 1,
    Medium,
    Large, // TS will infer that Medium = 2, and Large = 3
    // but you can also use strings or other types
    // but then you have to expliitly set them for each constant
  }

  let mySize: Size = Size.Large;

  // functions
  // without specifiying a return type, the return type is 'void'
  // you can give parameters a default value: taxYear = 2022 (preferred)
  // or you can define it as optional: taxYear?: number (not preferred, cause it can be undefined)

  function calculateTax(income: number, taxYear: number = 2021) {
    if (taxYear < 2022) {
      return income * 0.45;
    }
    return income * 0.3;
  }

  // objects, apply type annotations to objects:
  // anonymoously:
  let employee: {
    id: number;
    name: string;
  } = { id: 1, name: "Malik" };

  employee.id = 2;

  // using an interface
  interface Employee {
    id: number;
    name: string;
  }

  let employee2: Employee = {
    id: 3,
    name: "Hans",
  };
  // console.log(employee2);

  // using a type alias:
  type Employ = {
    readonly id: number; // you can make properties readonly
    name: string;
    retire: (date: Date) => void; // func inside of object
  };

  let employe3: Employ = {
    id: 1,
    name: "Malik",
    retire: (date: Date) => console.log(date),
  };
  employe3.retire(new Date());

  // Union types
  // With union types, you can give a variable/function more than 1 type
  // with |
  function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") return weight * 2.2;
    else return parseInt(weight) * 2.2;
  }

  // Intersection types with: &

  type Draggable = {
    drag: () => void;
  };
  type Resizable = {
    resize: () => void;
  };
  type UIWidget = Draggable & Resizable;

  let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
  };

  // Literal types (exact, specific)
  // let quantity: 50 = 51; // error
  let quantity: 50 | 100 = 100;

  type Quantity = 70 | 120;
  let quant: Quantity = 120;

  type Metric = "cm" | "inch";

  // nullable types
  // by defaul the TS compiler stops us from using null or undefined values

  function greet(name: string | null | undefined) {
    if (name) console.log(name.toUpperCase());
    else console.log("Hola");
  }

  // now you could pass null or undefined as argument and "Hola" would be returned
  greet(undefined);

  // Optional Chaining
  type Customer = {
    birthday?: Date;
  };

  function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
  }

  let customer = getCustomer(1);
  // if (customer !== null && customer !== undefined) - old way to do it
  // same logic using optional chaining
  // Optional property access operator: '?'
  console.log(customer?.birthday?.getFullYear()); // will return undefined if id === 0

  // Optional element access operator
  // customers?.[0]

  // Optional call
  let log: any = null;
  log?.("a");

  return (
    <main>
      <div>TypeScript fundamentals by {name}</div>
      <div>{mySize}</div>
      <div>{calculateTax(23000)}</div>
      <div>{kgToLbs(87)}</div>
      <div>...</div>
      <div>{kgToLbs("87kg")}</div>
      <br />
      <Users />
    </main>
  );
}
