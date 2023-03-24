class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const cl1 = new Cliente('Marcus', 444);
        const cl2 = new Cliente('Joana', 200);
        this.clientes.push(cl1, cl2);
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: Number): void {
        const clienteARemover = this.pesquisar(cpf);
    }

    pesquisar(cpf: Number): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}
