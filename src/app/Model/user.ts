export interface UserInterface {
    Id?: number;
    name?: string;
    email?: string;
    password?: string;
    tipo_usuario?: Roles;
    entrevista?: string;
    identrevista?: number;
    estado?: string;
    fecha?: string;
}
//     constructor(Id: number,
//         name: string,
//         pwd: string,
//         email: string,
//         rol: string,
//         entrevista: string,
//         identrevista: number,
//         estado: string,
//         fecha: string) {

//         this.Id = Id;
//         this.name = name;
//         this.pwd = pwd;
//         this.email = email;
//         this.rol = rol;
//         this.entrevista = entrevista;
//         this.identrevista = identrevista;
//         this.estado = estado;
//         this.fecha = fecha;
//     }
// }
export enum Roles{
    admin= '1',
    docente='2',
    secretaria='3',
    tutor= '4'
};
