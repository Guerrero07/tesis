export interface UserInterface {
    id_usuario?: number;
    username?: string;
    email?: string;
    password?: string;
    rol?: Roles;
    entrevista?: string;
    estado?: string;
    fecha?: string;
    token?: string;
}

export enum Roles{
    admin='1',
    docente='2',
    secretaria='3',
    tutor='4'
};
