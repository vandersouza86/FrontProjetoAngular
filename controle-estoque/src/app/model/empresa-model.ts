export class EmpresaModel {

    constructor(
        public id: number,
        public nome: string,
        public cnpj: string,
        public cep: string, 
        public estado: string,
        public cidade: string,
        public bairro: string, 
        public logradouro: string,
        public numero: string,
    ){}
}
