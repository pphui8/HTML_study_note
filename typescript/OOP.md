## OOP
没什么讲的

```ts
class Person {
    _name: string;
    constructor(name: string) {
        this._name = name;
    }
    sayHi() {
        return `Hi, ${this._name}`;
    }
    
    // 存取器
    public get name() : string {
        return this._name;
    }

    
    public set name(v : string) {
        this._name = v;
    }    
}
```
