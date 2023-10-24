import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Teaser {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    thumbnail: string

    @Column()
    title: string

    @Column()
    synopsis: string

    @Column()
    publicationDate: string

    @Column()
    article: string
}