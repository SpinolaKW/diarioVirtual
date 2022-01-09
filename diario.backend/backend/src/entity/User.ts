import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Diario {
    @PrimaryGeneratedColumn()
    cod_anot: number;

    @Column()
    titulo_anot: string;

    @Column()
    descricao: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

}