class Cliente {

    private _nome: string;
    private _cpf: number;

    constructor(nome: string, cpf = 0) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}`;
    }
}
