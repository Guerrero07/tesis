export class Persona {
    public Id?: number;
    public Nombre?: string;
    public Paterno?: string;
    public Materno?: string;
    public Telefono?: number;

    constructor(Id: number, nombre: string, paterno: string, materno: string, telefono: number) {
        this.Id = Id;
        this.Nombre = nombre;
        this.Materno = paterno;
        this.Paterno = materno;
        this.Telefono= telefono;
    }
}