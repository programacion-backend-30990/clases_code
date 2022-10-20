import { parse } from "https://deno.land/std@0.159.0/datetime/mod.ts";
import * as colors from "https://deno.land/std@0.159.0/fmt/colors.ts";

const sayHello = (name: string): string => {
    return `Hello ${name}`
}

console.log(sayHello('World'));
console.log(parse("19-10-2022", "dd-MM-yyyy"));

console.log(colors.bgYellow(colors.red('Hello everyone')));
console.log(colors.bgWhite(colors.bold(colors.red('Salludos a  Francisco'))));


console.log(Deno.args);

const port =  Number(Deno.env.get('PORT') || 8080)
console.log(port);

await Deno.writeTextFile('text.txt', "Deno is so easy!!")

const text = await Deno.readTextFile('text.txt')
console.log(text);

// Volvemos a las 21:22 arg =D