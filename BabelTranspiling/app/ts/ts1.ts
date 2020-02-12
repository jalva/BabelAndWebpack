import * as _ from "lodash";

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

let result = greeter(user);

result = _.padStart(user, 20);

alert(result);