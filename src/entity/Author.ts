import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    picture: string

    @Column()
    fullName: string

    @Column()
    department: string

    @Column()
    role: string

    @Column()
    articles: number
}