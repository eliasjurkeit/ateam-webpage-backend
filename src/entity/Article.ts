import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    author: string

    @Column()
    content: string

    @Column()
    teaser: string
}