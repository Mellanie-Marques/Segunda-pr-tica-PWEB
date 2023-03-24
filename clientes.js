class Clientes{
    constructor() {
        this._clientes = [];
    }

    inserir(cliente) {
        this._clientes.push(cliente);
        return cliente;
    }

    remover(cpf) {
        const indxRemocao = this._clientes.indexOf(cliente => cliente.cpf === cpf);
        this._clientes.splice(indxRemocao, 1);
    }

    listar() {
        return this._clientes;
    }

    pesquisarClientePeloCpf(cpf) {
        return this._clientes.filter(cliente => cliente.cpf === cpf);
    }

}